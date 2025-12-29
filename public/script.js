document.addEventListener("DOMContentLoaded", () => {

  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "/pricing.html";
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "/pricing.html";
    });
  }

});

let selectedFeature = null;

  function loadFeatures(lang) {
    featureList.innerHTML = "";
    FEATURES[lang].forEach(f => {
      const div = document.createElement("div");
      div.className = "feature-item";
      div.textContent = f.title;

      div.addEventListener("click", () => {
        selectedFeature = f;
        titleEl.textContent = f.title;
        descEl.textContent = f.desc;
        previewEl.value = `This will generate:\n${f.title} code template`;
      });

      featureList.appendChild(div);
    });
  }

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadFeatures(btn.dataset.lang);
    });
  });

  loadFeatures("html");

  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      if (!selectedFeature) return;
      previewEl.value = "Generated code for " + selectedFeature.title;
    });
  }

