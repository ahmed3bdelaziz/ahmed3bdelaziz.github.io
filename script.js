document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "EduVersity",
            description: "A comprehensive academic management system developed as part of the DEPI Graduation Project. Features include student, instructor, and course management.",
            url: "https://github.com/ahmed3bdelaziz/DEPI-Graduation-Project-EduVersity"
        },
        {
            title: "School ERP System",
            description: "An Academic ERP System built with ASP.NET MVC to manage students, instructors, courses, departments, and results.",
            url: "https://github.com/ahmed3bdelaziz/School-ERP-System"
        },
        {
            title: "Revit Add-ins Collection",
            description: "A suite of Autodesk Revit add-ins developed in C# to automate BIM tasks and enhance productivity.",
            url: "https://github.com/ahmed3bdelaziz/RevitAddins"
        },
        {
            title: "ArchitectShowcase",
            description: "A responsive and modern portfolio website created with HTML and CSS. It serves as a professional showcase for architects or designers.",
            url: "https://github.com/ahmed3bdelaziz/ArchitectShowcase"
        }
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("col-md-6", "col-lg-4", "mb-4");

        projectCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.url}" class="btn btn-primary" target="_blank">View on GitHub</a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
});
