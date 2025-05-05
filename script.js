// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully!");

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: "smooth"
                });
            }
        });
    });

    // Add hover effect to cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
        });

        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });

    // Back-to-top button functionality
    const backToTopBtn = document.createElement("button");
    backToTopBtn.innerHTML = "↑";
    backToTopBtn.setAttribute("id", "back-to-top");
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.padding = "10px 15px";
    backToTopBtn.style.fontSize = "16px";
    backToTopBtn.style.backgroundColor = "#0078ff";
    backToTopBtn.style.color = "white";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.borderRadius = "5px";
    backToTopBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    backToTopBtn.style.cursor = "pointer";
    backToTopBtn.style.display = "none";
    backToTopBtn.style.zIndex = "1000";
    document.body.appendChild(backToTopBtn);

    // Show/hide back-to-top button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Scroll to top on button click
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
