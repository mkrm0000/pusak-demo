document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("member-grid");
  const panel = document.body.dataset.panel;

  if (!grid || !panel) return;

  fetch("../members.json")
    .then(res => res.json())
    .then(data => {

      const members = data[panel];

      if (!members) return;

      grid.innerHTML = "";

      members.forEach(member => {

        const card = document.createElement("article");
        card.className = "member-card reveal";

        card.innerHTML = `
          <div class="member-photo">
            <img src="${member.image}" alt="${member.name}">
          </div>

          <div class="member-info">
            <span class="member-role">${member.role || ""}</span>
            <h3>${member.name}</h3>
            <p>${member.institution || ""}</p>
          </div>
        `;

        grid.appendChild(card);
      });

      revealOnScroll();
    });

});


// --------------------
// Reveal animation
// --------------------
function revealOnScroll() {

  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });

  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}