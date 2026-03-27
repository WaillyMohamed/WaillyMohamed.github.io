// Defining Constants
// Course viewing section
const courses = document.querySelectorAll(".course-tabs button");
const years = document.querySelectorAll(".year");

// Project detail 
const projects = document.querySelectorAll(".project-select button"); // Buttons

// loop through each button
courses.forEach(btn => {
    btn.addEventListener("click", () => {
        courses.forEach(b => b.classList.remove("active"));
        years.forEach(y => y.classList.remove("visible"));

        btn.classList.add("active");
        document.querySelector(`.year[data-year="${btn.dataset.year}"]`)
            .classList.add("visible");
      
    })
})
// Add the initial click to my default button ( the first one )
document.addEventListener("DOMContentLoaded", () => {
    const defaultBtn = document.querySelector(".course-tabs button.active");
    if (defaultBtn) {
        defaultBtn.click();
    }
});


projects.forEach(btn => {
    btn.addEventListener("click", () => {
        projects.forEach( b => b.classList.remove("active"));
        btn.classList.add("active");


        // Hide the project elements
        document.querySelectorAll("[data-project]").forEach(el => {
            el.classList.remove("visible");
        })

        // show the selected project elements
        document.querySelectorAll(`[data-project="${btn.dataset.project}"]`).forEach(p => {
            p.classList.add("visible");
        })
    })
})

