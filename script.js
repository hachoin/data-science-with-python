const aiCourses=document.getElementById("aiCourses");
const dsCourses=document.getElementById("dsCourses");

for(let i=1;i<=10;i++){
aiCourses.innerHTML+=`<div class="course-card">
<h3>AI Course ${i}</h3>
<p>Duration: 6 Months</p>
<p>Students: $1,499</p>
</div>`;
}

for(let i=1;i<=13;i++){
dsCourses.innerHTML+=`<div class="course-card">
<h3>Data Science Course ${i}</h3>
<p>Duration: 5 Months</p>
<p>Price: $1,299</p>
</div>`;
}

function showCategory(category){
document.querySelectorAll(".course-category").forEach(el=>el.style.display="none");
document.getElementById(category).style.display="block";
document.querySelectorAll(".tabs button").forEach(btn=>btn.classList.remove("active"));
event.target.classList.add("active");
}

document.querySelectorAll(".faq-question").forEach(btn=>{
btn.addEventListener("click",()=>{
const answer=btn.nextElementSibling;
answer.style.display=answer.style.display==="block"?"none":"block";
});
});

const aiCoursesData = [
    {title:"Artificial Intelligence Course", level:"Beginner-Advance", duration:"8 Weeks", price:"$1200", image:"artificial-intelligence-course.png"},
  {title:"Machine Learning Course", level:"Beginner-Advance", duration:"10 Weeks", price:"$1500", image:"machine-learning-course.png"},
  {title:"AI Healthcare Course", level:"Beginner-Advance", duration:"12 Weeks", price:"$1800", image:"ai-healthcare-course.png"},
  {title:"ChatGpt Course", level:"Beginner-Advance", duration:"10 Weeks", price:"$2000", image:"chatgpt-course.png"},
  {title:"MLOps Course", level:"Beginner-Advance", duration:"6 Weeks", price:"$1100", image:"mlops-course.png"},
  {title:"NLP Course", level:"Beginner-Advance", duration:"12 Weeks", price:"$1900", image:"nature-language-processing.png"},
  {title:"Agentic AI Course", level:"Beginner-Advance", duration:"8 Weeks", price:"$1300", image:"agentic-ai-course.png"},
  {title:"Generative AI Course", level:"Beginner-Advance", duration:"10 Weeks", price:"$1700", image:"generative-ai-course.png"},
  {title:"GenAI with Python", level:"Beginner-Advance", duration:"9 Weeks", price:"$1600", image:"GenAI-with-Python-course.png"},
  {title:"Large Language Module", level:"Beginner-Advance", duration:"8 Weeks", price:"$2100", image:"llm-course.png"}

];

const dsCoursesData = [
  {title:"Data Science with Python Course", level:"Beginner-Advance", duration:"8 Weeks", price:"$1000", image:"data-science-with-python-course.png"},
  {title:"Data Science with Python & ML Course", level:"Beginner-Advance", duration:"6 Weeks", price:"$900", image:"data-science-with-python-ML.png"},
  {title:"SQL with Python Course", level:"Beginner-Advance", duration:"6 Weeks", price:"$900", image:"sql-with-python.png"},
  {title:"PL/SQL Course", level:"Beginner-Advance", duration:"6 Weeks", price:"$900", image:"pl-sql-course-online.png"},

];

function createCard(course){
  let levelClass = course.level.toLowerCase();
  return `
  <div class="course-card">
 

    <div class="course-content">
      <span class="badge ${levelClass}">${course.level}</span>
      <h3>${course.title}</h3>
      <div class="course-meta">
        <span>${course.duration}</span>
        <span class="price">${course.price}</span>
      </div>
      <a href="#faq" class="btn">Start now – get 10% off!</a>
    </div>
  </div>`;
}

document.getElementById("aiCourses").innerHTML =
  aiCoursesData.map(createCard).join("");

document.getElementById("dsCourses").innerHTML =
  dsCoursesData.map(createCard).join("");

function showCategory(id, btn){
  document.querySelectorAll('.category').forEach(el=>el.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function searchCourse(value){
  value = value.toLowerCase();
  document.querySelectorAll('.course-card').forEach(card=>{
    card.style.display =
      card.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
}

window.addEventListener("scroll", function() {
  const roadmap = document.querySelector(".roadmap-section");
  const steps = document.querySelectorAll(".roadmap-step");
  const line = document.querySelector(".progress-line");

  const position = roadmap.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if(position < screenPosition){
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.classList.add("active");
      }, index * 400);
    });

    line.style.width = "100%";
  }
});

/* Sticky background change */
window.addEventListener("scroll", function(){
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

/* Mobile toggle */
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}

/* Active menu highlight */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }
  });
});

function animateSalary(){
  const counters = document.querySelectorAll(".salary-amount");

  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText.replace(/\D/g,'');
      const increment = target / 100;

      if(current < target){
        counter.innerText = "$" + Math.ceil(current + increment).toLocaleString();
        setTimeout(update, 20);
      } else {
        counter.innerText = "$" + target.toLocaleString();
      }
    };
    update();
  });
}

window.addEventListener("scroll", function(){
  const section = document.querySelector(".salary-section");
  const position = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if(position < screenPosition){
    animateSalary();
  }
});


document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;

    document.querySelectorAll(".faq-item").forEach(faq => {
      if(faq !== item){
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

function createCard(course){
  let levelClass = course.level.toLowerCase();

  return `
  <div class="course-card">

    <div class="course-image">
      <img src="${course.image}" alt="${course.title}">
    </div>

    <div class="course-content">
      <span class="badge ${levelClass}">${course.level}</span>
      <h3>${course.title}</h3>
      <div class="course-meta">
        <span>${course.duration}</span>
        <span class="price">${course.price}</span>
      </div>
      <a href="#" class="btn">Enroll Now</a>
    </div>

  </div>`;
}






















