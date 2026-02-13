// Course viewing section
const buttons = document.querySelectorAll(".course-tabs button");
const years = document.querySelectorAll(".year");

// loop through each button
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        years.forEach(y => y.classList.remove("visible"));

        btn.classList.add("active");
        document.querySelector(`.year[data-year="${btn.dataset.year}"]`)
            .classList.add("visible");
      
    })
})