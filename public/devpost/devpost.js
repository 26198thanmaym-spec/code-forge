document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const sendBtn = document.getElementById("sendBtn");
  const attachBtn = document.getElementById("attachBtn");
  const fileAttach = document.getElementById("fileAttach");
  const postInput = document.getElementById("postInput");
  const postsFeed = document.getElementById("postsFeed");

  // Theme toggle
  const postBox = document.querySelector(".post-box");

themeToggle.addEventListener("click", () => {
  postBox.classList.toggle("light");
});

  // Open file dialog
  attachBtn.addEventListener("click", () => fileAttach.click());

  // Handle post send
  sendBtn.addEventListener("click", () => {
    if (!postInput.value && !fileAttach.files[0]) return;

    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const textPara = document.createElement("p");
    textPara.textContent = postInput.value;
    postDiv.appendChild(textPara);

    if (fileAttach.files[0]) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(fileAttach.files[0]);
      postDiv.appendChild(img);
    }

    // Add actions: like / dislike / reply
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "post-actions";
    ["Like 👍", "Dislike 👎", "Reply 💬"].forEach(a => {
      const btn = document.createElement("button");
      btn.textContent = a;
      actionsDiv.appendChild(btn);
    });
    postDiv.appendChild(actionsDiv);

    postsFeed.prepend(postDiv); // newest on top
    postInput.value = "";
    fileAttach.value = "";
  });
});
