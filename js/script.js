function activeIntroduction() {
  introductionButton.classList.add("active");
  projectsButton.classList.remove("active");
  contactMeButton.classList.remove("active");
}

function activeProjects() {
  introductionButton.classList.remove("active");
  projectsButton.classList.add("active");
  contactMeButton.classList.remove("active");
}

function activeContactMe() {
  introductionButton.classList.remove("active");
  projectsButton.classList.remove("active");
  contactMeButton.classList.add("active");
}

let introductionButton = document.querySelector("#introduction");
let projectsButton = document.querySelector("#projects");
let contactMeButton = document.querySelector("#contact-me");

introductionButton.addEventListener("click", activeIntroduction);
projectsButton.addEventListener("click", activeProjects);
contactMeButton.addEventListener("click", activeContactMe);

console.log(introductionButton);
console.log(projectsButton);
console.log(contactMeButton);
