document.addEventListener("DOMContentLoaded", function () {
  const projectData = [
    {
      name: "Revit Add-ins Collection",
      description: "A suite of C# Revit add-ins to automate BIM tasks and improve workflow efficiency.",
      url: "https://github.com/ahmed3bdelaziz/revit-addins"
    },
    {
      name: "ArchitectShowcase",
      description: "A responsive, mobile-first portfolio site showcasing architectural projects.",
      url: "https://github.com/ahmed3bdelaziz/architect-showcase"
    },
    {
      name: "EduVersity",
      description: "An academic management system featuring full CRUD for students, instructors, and courses.",
      url: "https://github.com/ahmed3bdelaziz/eduversity"
    },
    {
      name: "School-ERP-System",
      description: "A comprehensive ERP covering academics, departments, courses, and result tracking.",
      url: "https://github.com/ahmed3bdelaziz/school-erp-system"
    }
  ];

  const projectGrid = document.querySelector(".project-grid");

  projectData.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.url}" target="_blank">View on GitHub</a>
    `;
    projectGrid.appendChild(projectItem);
  });

  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Back to Top Button
  const backToTop = document.getElementById("back-to-top");
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
