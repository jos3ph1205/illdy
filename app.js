const mainSection = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
console.log(mainSection);
console.log(navLinks);

const mainSectionObserver = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         let secId = entry.target.getAttribute("id");
         console.log(entry, secId)

         if (entry.isIntersecting) {
            navLinks.forEach((link) => {
               link.classList.remove("active");
            });

            document.querySelector(`.nav-links a[href*="${secId}"]`).classList.add("active");
         }
      });
   },
   {
      threshold: .7,
   }
);

mainSection.forEach((el) => mainSectionObserver.observe(el));