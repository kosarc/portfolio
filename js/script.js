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

function formSubmition(event) {
  event.preventDefault();
  document.querySelector("#contact-me-anchor").innerHTML =
    "Thank you, your form is submitted";
}

let introductionButton = document.querySelector("#introduction");
let projectsButton = document.querySelector("#projects");
let contactMeButton = document.querySelector("#contact-me");
let contactSection = document.querySelector("#form-submission");

console.log(contactSection);

introductionButton.addEventListener("click", activeIntroduction);
projectsButton.addEventListener("click", activeProjects);
contactMeButton.addEventListener("click", activeContactMe);
contactSection.addEventListener("submit", formSubmition);
