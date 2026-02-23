const aiCourses=document.getElementById("aiCourses");
const dsCourses=document.getElementById("dsCourses");

for(let i=1;i<=10;i++){
aiCourses.innerHTML+=`<div class="course-card">
<h3>AI Course ${i}</h3>
<p>Duration: 6 Months</p>
<p>Price: $1,499</p>
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
    {title:"Artificial Intelligence Course", level:"Beginner", duration:"8 Weeks", price:"$1200", image:"artificial-intelligence-course.png"},
  {title:"Machine Learning Course", level:"Intermediate", duration:"10 Weeks", price:"$1500", image:"machine-learning-course.png"},
  {title:"AI Healthcare Course", level:"Advanced", duration:"12 Weeks", price:"$1800", image:"ai-healthcare-course.png"},
  {title:"Generative AI Bootcamp", level:"Advanced", duration:"10 Weeks", price:"$2000", image:"chatgpt-course.png"},
  {title:"Prompt Engineering", level:"Intermediate", duration:"6 Weeks", price:"$1100", image:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f"},
  {title:"NLP Specialist", level:"Advanced", duration:"12 Weeks", price:"$1900", image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b"},
  {title:"AI for Business", level:"Beginner", duration:"8 Weeks", price:"$1300", image:"https://images.unsplash.com/photo-1551434678-e076c223a692"},
  {title:"Computer Vision", level:"Advanced", duration:"10 Weeks", price:"$1700", image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"},
  {title:"AI Deployment", level:"Intermediate", duration:"9 Weeks", price:"$1600", image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c"},
  {title:"AI Capstone Project", level:"Advanced", duration:"8 Weeks", price:"$2100", image:"https://images.unsplash.com/photo-1534751516642-a1af1ef26a56"}

];

const dsCoursesData = [
  {title:"Data Science Foundations", level:"Beginner", duration:"8 Weeks", price:"$1000", image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71"},
  {title:"Python for Data Science", level:"Beginner", duration:"6 Weeks", price:"$900", image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935"},
  {title:"SQL Mastery", level:"Intermediate", duration:"6 Weeks", price:"$950", image:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d"},
  {title:"Statistics for DS", level:"Intermediate", duration:"8 Weeks", price:"$1100", image:"https://images.unsplash.com/photo-1509228468518-180dd4864904"},
  {title:"Data Visualization", level:"Beginner", duration:"6 Weeks", price:"$850", image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71"},
  {title:"Big Data Engineering", level:"Advanced", duration:"12 Weeks", price:"$1800", image:"https://images.unsplash.com/photo-1518770660439-4636190af475"},
  {title:"Power BI Professional", level:"Intermediate", duration:"6 Weeks", price:"$1000", image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d"},
  {title:"Tableau Expert", level:"Intermediate", duration:"6 Weeks", price:"$950", image:"https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"},
  {title:"Data Analytics Bootcamp", level:"Advanced", duration:"10 Weeks", price:"$1500", image:"https://images.unsplash.com/photo-1559027615-cd4628902d4a"},
  {title:"ML for Data Science", level:"Advanced", duration:"12 Weeks", price:"$1700", image:"https://images.unsplash.com/photo-1516117172878-fd2c41f4a759"},
  {title:"Cloud Data Engineering", level:"Advanced", duration:"12 Weeks", price:"$2000", image:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0"},
  {title:"Data Warehousing", level:"Intermediate", duration:"8 Weeks", price:"$1200", image:"https://images.unsplash.com/photo-1556761175-4b46a572b786"},
  {title:"Capstone Project DS", level:"Advanced", duration:"8 Weeks", price:"$2200", image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d"}

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
      <a href="#" class="btn">Enroll Now</a>
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




