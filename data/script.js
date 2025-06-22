import { Tutorials } from "./Data/Tutorials.js";
 
import { References } from "./Reference.js";

import { ExercisesandQuizzes } from "./Exercises andQuizzes.js";


let mobileTutorialContent =''
 let  mobileReferncesContent = ''
 let  mobileExercisesContent =''

let MenuBtnMobileE1=document.getElementById("Menu-btn-Mobile");
let MenuBtnMobileE1openBoolen=false;
let mobileMenuNavE1=document.getElementById("mobile-menu-nav");

MenuBtnMobileE1.addEventListener("click", () => {
  if (MenuBtnMobileE1openBoolen) {
    //  mobileMenuNavE1.style.display="none"
    mobileMenuNavE1.classList.remove("mobile-menu-nav-hidden");
    MenuBtnMobileE1openBoolen=false;
  } else {
    // mobileMenuNavE1.style.display="block"
    mobileMenuNavE1.classList.add("mobile-menu-nav-hidden");
    MenuBtnMobileE1openBoolen=true;
  }
});

let mobileNavcloseE1=document.getElementById("mobile-Nav-close");

mobileNavcloseE1.addEventListener("click", () => {
  // mobileMenuNavE1.style.display="none"
        mobileMenuNavE1.classList.remove("mobile-menu-nav-hidden");
  MenuBtnMobileE1openBoolen=false;
});

const NestedNavigationContainer=document.getElementById(
  "nested-navigation-container_id"
);
let tutorialE1=document.getElementById("tutorial-btn");
const nestedNavigationCloseBtn=document.getElementById("nested-navigation-close-btn");

tutorialE1.addEventListener("click", toggletutorial);

nestedNavigationCloseBtn.addEventListener("click",closeMenuContent );

function closeMenuContent(){
    NestedNavigationContainer.classList.toggle("nested_navigation_hidden")  

    tutorialE1.classList.remove("bg-black");
  tutorialE1.classList.remove("text-white");
  //refrences
  referencebtnE1.classList.remove("bg-black");
   referencebtnE1.classList.remove("text-white");
   //excersies
   exercisebtnE1.classList.remove("bg-black");
  exercisebtnE1.classList.remove("text-white");
  
}



function toggletutorial() {
  tutorialE1.classList.toggle("bg-black");
  tutorialE1.classList.toggle("text-white");
  NestedNavigationContainer.classList.toggle("nested_navigation_hidden");
  
  tutorialMenuDisplayAll()
  referencebtnE1.classList.remove("bg-black");
  referencebtnE1.classList.remove("text-white");
  //excersies
  exercisebtnE1.classList.remove("bg-black");
 exercisebtnE1.classList.remove("text-white");
 
}

console.log(Tutorials);

/**********************************/
let NestedNavigationContainerContentID=document.getElementById(
  "nested-navigation-container-contentID"
);
let nestedNavigationHeading="";
let nestedNavigationTab1="";
let nestedNavigationTab2="";
let nestedNavigationTab3="";
let nestedNavigationTab4="";
/********************************* */

//heading
//render all the menu
const sample=`
<div class="nested-navigation-container_Content_data">
<div class="nested-navigation_item">
<h1 class="tt">Tutorials</h1>
<h2>HTML and CSS</h2>
<a href="">Learn HTML</a>
<a href="">Learn CSS</a>
<a href="">Learn RWD</a>
</div>
<div class="nested-navigation_item">
  <h2>Javascript</h2>
<a href="">Learn Javascript</a>
  <a href="">Learn jQuery</a>
<a href="">Learn React</a>
</div>
<div class="nested-navigation_item">
<h2>ServerSide</h2>
<a href="">Learn SQL</a>
<a href="">Learn MySQL</a>
<a href="">Learn PHP</a>
</div>
<div class="nested-navigation_item">
<h2>Data Analyst</h2>
<a href="">Learn AI</a>
<a href="">Learn Machine Learning</a>
<a href="">Learn Data Science</a>
</div>                  
`
  const tutorialMenuLinkMobileE1 =document.getElementById("tutorial_menuLink_mobile")
let TutorialMenuMobileE1= document.getElementById("Tutorial_menu_mobile")


 tutorialMenuLinkMobileE1.addEventListener("click",()=>{

  tutorialMenuDisplayAll()

  let tutorialMenuTab_Mobile = mobileTutorialContent

  tutorialMenuLinkMobileE1.classList.toggle("mobile_menu_Active")
  TutorialMenuMobileE1.classList.toggle("mobile_menuActive_tutorial")

  TutorialMenuMobileE1.innerHTML= tutorialMenuTab_Mobile


 })
 

 function tutorialMenuDisplayAll(){
  nestedNavigationHeading="";
  nestedNavigationTab1="";
  nestedNavigationTab2="";
  nestedNavigationTab3="";
  nestedNavigationTab4="";
 
  nestedNavigationHeading+=`<h1>${Tutorials.name}</h1>`;

///sub-menu
nestedNavigationTab1 +=`<h1>${Tutorials.HTMLAndCSS.name}</h1>`
Tutorials.HTMLAndCSS.menu.forEach(el=> {
  nestedNavigationTab1 +=`<a href="${el.link}">${el.title}</a>`
})

nestedNavigationTab2 +=`<h2>${Tutorials.Javascript.name}</h2>`
Tutorials.Javascript.menu.forEach(el => {
  nestedNavigationTab2+=`<a href="${el.link}">${el.title}</a>`
})

nestedNavigationTab3 +=`<h1>${Tutorials.ServerSide.name}</h1>`
Tutorials.ServerSide.menu.forEach(el => {
  nestedNavigationTab3+=`<a href="${el.link}">${el.title}</a>`
})


nestedNavigationTab4 +=`<h1>${Tutorials.DataAnalystics.name}</h1>`;
Tutorials.DataAnalystics.menu.forEach(el => {
  nestedNavigationTab4 +=`<a href="${el.link}">${el.title}</a>`
})

nestedNavigationTab2 +=`<h2>${Tutorials.  Webbuilding .name}</h2>`
Tutorials.  Webbuilding .menu.forEach(el => {
  nestedNavigationTab2+=`<a href="${el.link}">${el.title}</a>`
})

  NestedNavigationContainerContentID.innerHTML=`
         ${nestedNavigationHeading}
 <div class="nested-navigation-container_Content_data">
         <div class="nested-navigation_item">
            ${nestedNavigationTab1}
           </div>
           <div class="nested-navigation_item">
               ${nestedNavigationTab2}
           </div>
           <div class="nested-navigation_item">
               ${nestedNavigationTab3}
           </div>
           <div class="nested-navigation_item">
                  ${nestedNavigationTab4}
             < /div>
             </div>
`

let  mobileTutorialContent = nestedNavigationHeading + nestedNavigationTab1 + nestedNavigationTab2 + nestedNavigationTab3 + nestedNavigationTab4

 nestedNavigationHeading="";
 nestedNavigationTab1="";
 nestedNavigationTab2="";
 nestedNavigationTab3="";
 nestedNavigationTab4="";

 }

 console.log(References);

 let referencebtnE1=document.getElementById("reference-btn" )
 referencebtnE1.addEventListener("click",()=>{
   //alert("hiiii")
   referencebtnE1.classList.toggle("bg-black");
   referencebtnE1.classList.toggle("text-white");
   NestedNavigationContainer.classList.remove("nested_navigation_hidden")
//tutorials
tutorialE1.classList.remove("bg-black");
tutorialE1.classList.remove("text-white");
//excersies
 exercisebtnE1.classList.remove("bg-black");
 exercisebtnE1.classList.remove("text-white");

 referenceContent ()
  
 })

 

 function referenceContent (){
  nestedNavigationHeading+=`<h1>${References.name}</h1>`;

///sub-menu
nestedNavigationTab1 +=`<h1>${References.HTML.name}</h1>`
References.HTML.menu.forEach(el=> {
  nestedNavigationTab1 +=`<a href="${el.link}">${el.title}</a>`
})

nestedNavigationTab2 +=`<h2>${References.Javascript.name}</h2>`
References.Javascript.menu.forEach(el => {
  nestedNavigationTab2+=`<a href="${el.link}">${el.title}</a>`
})

nestedNavigationTab3 +=`<h1>${References.Backend.name}</h1>`
References.Backend.menu.forEach(el => {
  nestedNavigationTab3+=`<a href="${el.link}">${el.title}</a>`
})
nestedNavigationTab4 +=`<h1>${References.DataAnalystics.name}</h1>`;
References.DataAnalystics.menu.forEach(el => {
  nestedNavigationTab4 +=`<a href="${el.link}">${el.title}</a>`
})

nestedNavigationTab2 +=`<h2>${Tutorials.  Webbuilding .name}</h2>`
Tutorials.  Webbuilding .menu.forEach(el => {
  nestedNavigationTab2+=`<a href="${el.link}">${el.title}</a>`
})

  NestedNavigationContainerContentID.innerHTML=`
         ${nestedNavigationHeading}
 <div class="nested-navigation-container_Content_data">
         <div class="nested-navigation_item">
            ${nestedNavigationTab1}
           </div>
           <div class="nested-navigation_item">
               ${nestedNavigationTab2}
           </div>
           <div class="nested-navigation_item">
               ${nestedNavigationTab3}
           </div>
           <div class="nested-navigation_item">
                  ${nestedNavigationTab4}
             < /div>
o+             </div>
`
 nestedNavigationHeading="";
 nestedNavigationTab1="";
 nestedNavigationTab2="";
 nestedNavigationTab3="";
 nestedNavigationTab4="";

 }
 
   let exercisebtnE1  = document.getElementById("exercise-btn" )
  exercisebtnE1.addEventListener("click",()=>{
   //alert("hiiii")
   exercisebtnE1.classList.toggle("bg-black");
   exercisebtnE1.classList.toggle("text-white");
   NestedNavigationContainer.classList.remove("nested_navigation_hidden")
//tutorials
tutorialE1.classList.remove("bg-black");
tutorialE1.classList.remove("text-white");
//refrences
referencebtnE1.classList.remove("bg-black");
 referencebtnE1.classList.remove("text-white");

 exerciseContent()
 })



 function exerciseContent(){

  nestedNavigationHeading="";
  nestedNavigationTab1="";
  nestedNavigationTab2="";
  nestedNavigationTab3="";
  nestedNavigationTab4="";
 
  

  ///sub-menu
  nestedNavigationTab1 +=`<h1>${ExercisesandQuizzes.Exercises.name}</h1>`
  ExercisesandQuizzes.Exercises.menu.forEach(el=> {
    nestedNavigationTab1 +=`<a href="${el.link}">${el.title}</a>`
  })
  
  nestedNavigationTab2 +=`<h2>${ExercisesandQuizzes.Quizzes.name}</h2>`
  ExercisesandQuizzes.Quizzes.menu.forEach(el => {
    nestedNavigationTab2+=`<a href="${el.link}">${el.title}</a>`
  })
  
  nestedNavigationTab3 +=`<h1>${ExercisesandQuizzes.Certificates.name}</h1>`
  ExercisesandQuizzes.Certificates.menu.forEach(el => {
    nestedNavigationTab3+=`<a href="${el.link}">${el.title}</a>`
  })
 
  
    NestedNavigationContainerContentID.innerHTML=`
           ${nestedNavigationHeading}
   <div class="nested-navigation-container_Content_data">
           <div class="nested-navigation_item">
              ${nestedNavigationTab1}
             </div>
             <div class="nested-navigation_item">
                 ${nestedNavigationTab2}
             </div>
             <div class="nested-navigation_item">
                 ${nestedNavigationTab3}
             </div>
             <div class="nested-navigation_item">
                    ${nestedNavigationTab4}
               < /div>
               </div>
  `
   nestedNavigationHeading="";
   nestedNavigationTab1="";
   nestedNavigationTab2="";
   nestedNavigationTab3="";
   nestedNavigationTab4="";
  
   
 }
 console.log(ExercisesandQuizzes);

/**************************************************** */
const htmlCode = `<!DOCTYPE html>
              <html> 
               
            <title>HTML Tutorial</title>

            <body>

            <h1>This is a heading</h1>
            <p>This is a paragraph.</p>

            </body>

            </html>
            `
            

    let htmlCodeE1= document.getElementById("htmlCode").innerText= htmlCode



    const cssCode=`
    body {
  background-color: lightblue;
 }

 h1 {
  color: white;
  text-align: center;
 }

 p {
  font-family: verdana;
} 
  `

let cssCodeE1= document.getElementById("cssCode").innerText= cssCode



const jscode=
`<button onclick="myFunction()">Click Me!</button>

<script>

function myFunction() {
 
let x = document.getElementById("demo");
  
x.style.fontSize = "25px";
  
x.style.color = "red";

}
</script>
`

let jscodeE1=document.getElementById("jscode").innerText= jscode

const pycode=
`if 5 > 2:
  print("Five is greater than two!")
`
let pycodeE1=document.getElementById("pycode").innerText= pycode

const sqlcode=
`
SELECT * FROM Customers

WHERE Country='Mexico';
  
}`

let sqlcodeE1=document.getElementById("sqlcode").innerText= sqlcode
 let ImageAnimationCodeEditor = document.getElementById ("animationCodeEditorPart")
 let codeEditor_frontend = document.getElementById("codeEditor_frontend")
 let codeEditor_backendE1 = document.getElementById("codeEditor_backend")
   
 codeEditor_backendE1.addEventListener("click",()=>{
           ImageAnimationCodeEditor.src= "https://www.w3schools.com/tryit/best2.webp"
           codeEditor_frontend.classList.toggle("active")
           codeEditor_backendE1.classList.toggle("active")
 })
 
 codeEditor_frontend.addEventListener("click",()=>{
  ImageAnimationCodeEditor.src= "https://www.w3schools.com/codeeditor.gif"
  codeEditor_frontend.classList.toggle("active")
  codeEditor_backendE1.classList.toggle("active")
})
