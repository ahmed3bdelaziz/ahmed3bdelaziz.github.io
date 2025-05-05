document.addEventListener("DOMContentLoaded", function () {
  const repoList = document.getElementById("repo-list");

  // Fetch GitHub repositories
  fetch("https://api.github.com/users/ahmed3bdelaziz/repos")
    .then((response) => response.json())
    .then((repos) => {
      repoList.innerHTML = ""; // Clear loading text
      repos.forEach((repo) => {
        const repoCard = document.createElement("div");
        repoCard.className = "card";
        repoCard.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description available"}</p>
          <p><strong>Language:</strong> ${repo.language || "N/A"}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        repoList.appendChild(repoCard);
      });
    })
    .catch((error) => {
      repoList.innerHTML = "<p>Could not load projects. Please try again later.</p>";
      console.error("GitHub API error:", error);
    });
});
