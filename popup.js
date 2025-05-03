document.getElementById("save").addEventListener("click", () => {
  const repo = document.getElementById("repo").value;
  const token = document.getElementById("token").value;

  chrome.storage.sync.set({ repo, token }, () => {
    alert("Settings saved!");
  });
});
