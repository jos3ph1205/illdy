const mainSection = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
console.log(mainSection);
console.log(navLinks);

const mainSectionObserver = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         let secId = entry.target.getAttribute("id");
         console.log(entry, secId);

         if (entry.isIntersecting) {
            navLinks.forEach((link) => {
               link.classList.remove("active");
            });

            document.querySelectorAll(`.nav-links a[href*="${secId}"]`).forEach((el) => {
               el.classList.add("active");
            })
         }
      });
   },
   {
      threshold: 0.7,
   }
);

mainSection.forEach((el) => mainSectionObserver.observe(el));

let menuToggleBtn = document.querySelectorAll(".mob-menu-tog");
let mobileMenu = document.querySelector(".mobile-menu");

menuToggleBtn.forEach((btn) => {
   btn.addEventListener("click", () => {
      btn.classList.toggle("show");
      mobileMenu.classList.toggle("show");
   });
});
