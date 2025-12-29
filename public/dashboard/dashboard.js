window.logout = () => { window.location.href = "/login.html"; };
window.openHelp = () => { window.location.href = "/help.html"; };
window.openAchievements = () => {
  const tab = document.getElementById("achievementsTab");
  tab.classList.toggle("active");
};

// ================= FEATURES DATA =================
// Paste your full FEATURES object here exactly as it is from your code
const FEATURES = {
  html: [
    { title: "HTML Boilerplate", desc: "Basic HTML page structure." },
    { title: "Form Generator", desc: "Login / signup form HTML." },
    { title: "Navbar Builder", desc: "Responsive navigation bar." },
    { title: "Landing Page", desc: "Hero section with CTA." },
    { title: "Footer Generator", desc: "Website footer layout." }
  ],
  python: [
    { title: "CSV Reader", desc: "Read CSV using Pandas." },
    { title: "Data Plot", desc: "Plot graph using Matplotlib." },
    { title: "Flask App", desc: "Minimal Flask backend." },
    { title: "Automation Script", desc: "File automation script." },
    { title: "ML Starter", desc: "Basic ML model template." }
  ],
  javascript: [
    { title: "DOM Manipulation", desc: "Show/hide elements." },
    { title: "Fetch API", desc: "API request example." },
    { title: "Form Validation", desc: "Validate inputs." },
    { title: "Local Storage", desc: "Save data locally." },
    { title: "Slider Component", desc: "JS slider/carousel." }
  ],
  java: [
    { title: "Hello World", desc: "Basic Java program." },
    { title: "File Reader", desc: "Read files in Java." },
    { title: "JDBC Connect", desc: "Database connection." },
    { title: "Spring API", desc: "REST API skeleton." },
    { title: "Exception Handling", desc: "Try-catch template." }
  ],
  cpp: [
    { title: "Game Loop", desc: "Basic game loop." },
    { title: "STL Vector", desc: "Vector usage." },
    { title: "File IO", desc: "Read/write files." },
    { title: "Pointers", desc: "Pointer example." },
    { title: "Multithreading", desc: "Thread usage." }
  ],
  csharp: [
    { title: "Unity Script", desc: "MonoBehaviour script." },
    { title: "LINQ Query", desc: "LINQ usage." },
    { title: "Windows Form", desc: "Desktop UI starter." },
    { title: "Timer", desc: "Scheduled tasks." },
    { title: "API Call", desc: "HTTP request example." }
  ],
  rust: [
    { title: "Ownership Demo", desc: "Ownership & borrowing." },
    { title: "Struct Impl", desc: "Struct with methods." },
    { title: "File Handling", desc: "Safe file IO." },
    { title: "CLI App", desc: "Command-line tool." },
    { title: "Concurrency", desc: "Thread-safe concurrency." }
  ],
  swift: [
    { title: "UIViewController", desc: "iOS screen starter." },
    { title: "TableView", desc: "List UI." },
    { title: "Networking", desc: "API request." },
    { title: "Animations", desc: "Basic animations." },
    { title: "UserDefaults", desc: "Save settings." }
  ],
  sql: [
    { title: "SELECT Query", desc: "Basic SELECT." },
    { title: "JOIN Tables", desc: "JOIN example." },
    { title: "CREATE TABLE", desc: "Create table." },
    { title: "Indexes", desc: "Optimize queries." },
    { title: "Transactions", desc: "ACID example." }
  ],
  go: [
    { title: "HTTP Server", desc: "REST API server." },
    { title: "Goroutines", desc: "Concurrency example." },
    { title: "JSON Handling", desc: "Encode/decode JSON." },
    { title: "CLI Flags", desc: "Command-line flags." },
    { title: "Unit Test", desc: "Testing skeleton." }
  ],
  kotlin: [
    { title: "Activity Starter", desc: "Android activity." },
    { title: "RecyclerView", desc: "Efficient lists." },
    { title: "Coroutines", desc: "Async tasks." },
    { title: "Retrofit", desc: "API calls." },
    { title: "Data Class", desc: "Model class." }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const featureList = document.getElementById("featureList");
  const featureTitle = document.getElementById("featureTitle");
  const featureDesc = document.getElementById("featureDescription");
  const answerInput = document.getElementById("answerInput");
  const answerOutput = document.getElementById("answerOutput");
  const generateBtn = document.querySelector(".generate-btn");
  const creditScoreEl = document.getElementById("creditScore");
  const achievementsTab = document.getElementById("achievementsTab");

  let selectedFeature = null;
  let creditScore = 0;
  let achievements = [];

  function loadFeatures(lang) {
    featureList.innerHTML = "";
    FEATURES[lang].forEach(f => {
      const div = document.createElement("div");
      div.className = "feature-item";
      div.textContent = f.title;
      div.onclick = () => {
        selectedFeature = f;
        featureTitle.textContent = f.title;
        featureDesc.textContent = f.desc;
        answerInput.value = `Feature: ${f.title}`;
        answerOutput.value = "";
      };
      featureList.appendChild(div);
    });
  }

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadFeatures(btn.dataset.lang);
    };
  });

  loadFeatures("html"); // default

  generateBtn.addEventListener("click", () => {
    const query = answerInput.value.trim();
    if (!query) return alert("Type something first!");

    let outputText = selectedFeature 
      ? `Generated code for "${selectedFeature.title}"\n\nSimulated output:\n${query}`
      : `Simulated answer for input:\n${query}`;

    answerOutput.value = outputText;

    // Update credit score
    creditScore += 10;
    creditScoreEl.textContent = creditScore;

    // Add achievement every 50 points
    if (creditScore % 50 === 0) {
      const badge = `Badge ${achievements.length + 1}`;
      achievements.push(badge);

      const badgeEl = document.createElement("div");
      badgeEl.className = "achievement-badge";
      badgeEl.textContent = badge;
      achievementsTab.appendChild(badgeEl);
    }
  });
});
