const express = require("express");
const path = require("path");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// In-memory users
const USERS = [];
const ADMIN_PASSWORD = "supersecret";

// ---------------- SIGNUP ----------------
app.post("/signup", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });
  if (USERS.find(u => u.email === email)) return res.status(400).json({ error: "Email already registered" });

  USERS.push({ email, password, plan: "free" });
  return res.status(200).json({ redirect: "/pricing.html" });
});

// ---------------- LOGIN ----------------
app.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  const user = USERS.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const redirectURL = user.plan === "free" ? "/pricing.html" : "/dashboard.html";
  return res.status(200).json({ redirect: redirectURL });
});

// ---------------- ADMIN ----------------
app.post("/verify-admin-command", (req, res) => {
  const { command } = req.body;
  if (command === ADMIN_PASSWORD) return res.json({ success: true });
  return res.json({ success: false });
});

// ---------------- GENERATE CODE ----------------
app.post("/generate-code", (req, res) => {
  const { description, language } = req.body;
  res.json({ code: `// Generated code for ${description} in ${language}` });
});

// Serve HTML pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "login.html")));
app.get("/login.html", (req, res) => res.sendFile(path.join(__dirname, "public", "login.html")));
app.get("/signup.html", (req, res) => res.sendFile(path.join(__dirname, "public", "signup.html")));
app.get("/pricing.html", (req, res) => res.sendFile(path.join(__dirname, "public", "pricing.html")));
app.get("/dashboard.html", (req, res) => res.sendFile(path.join(__dirname, "public", "dashboard.html")));

const PORT = process.env.PORT || 3100;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});