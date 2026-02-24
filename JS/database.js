//array of calculus

var meta= document.body.dataset.content;


var subj={
  math:{
  Derivative:[
    {
      id: 1,
      title: "Derivative of Hyperbolic functions",
      owner: "GoalX",
      link: "https://www.youtube.com/watch?v=LkKJSfxRec8&t=1s",
      img: "DerivativeH1.jpg",
    },

    {
      id: 2,
      title: "Derivative of Hyperbolic Functions",
      owner: "SBG MATH",
      link: " https://youtu.be/XpuFAwmRl4M?si=jIZ7E8nEmChgkvC-",
      img: "DerivativeH2.jpg",
    }
  ],

  TangentandNormal: [
    {
    
      id: 3,
      title: "Nepali Education YT's tutorial",
      owner: "Nepali Education YT",
      link: "https://youtu.be/6SDUB-SyO3I?si=TiIhoOLJIKsB_boj&t=1902s",
      img: "tangent2.jpg",
    },
    {
      id: 4,
      title: "Nepal Online Schools's tutorial(Detailed)",
      owner: "NepaL Online School",
      link: "https://www.youtube.com/live/Fg6XuVRWNzU?si=OcWQeXp4XxNuU-4P",
      img: "tangent3.jpg",
    }
  ],
  RateMeasure:[
{
  
  title: "Application of Derivative",
owner: "Math Guru Shashi",
 link: "https://youtu.be/-2LygdBEcoI",
 img: "RM1.jpeg"

},
{
  title:"Rate Measure(one shot)",
owner: "",
 link:"https://youtu.be/U2kFS6KcqdA",
 img: "rm2.jpeg"
},
{
  title: "Rate Measure-part-1",
owner:"Goal X",
 link:"https://youtu.be/Ft_Yb3BvZKE",
 img: "rm3.jpeg"
},
{
  title:"Rate Measure-part-2",
owner:"Goal X",
 link:"https://youtu.be/5GKYEFe-V88",
 img: "rm4.jpeg" 
}

  ]

  // lhospital=[
  //   {

  //   }
  // ],
},

}
// let getvdo= (n)=>{
//   calculus[n].forEach(v=>{
//     console.log(v.)
//   })
// }
// getvdo("derivative")


//evennt listener for chapter buttons
let chapters= document.getElementById("chapters")
var sbtn= document.querySelector(".subj-btn");

let getdata=(chapname)=>{
subj[meta][chapname].forEach((el)=>{
  // console.log(Object.values(el))


  let li;
 li=document.createElement("li")
  li.setAttribute("class", "list")

  li.innerHTML=`
      <header class="title">${el.title}</header>
    <header class="owner">${el.owner}</header>
    <img src="/Thumbnails/${el.img}" alt="" id="thumbnail">
    <a href="${el.link}" class="clickme">Click me!</a>
<hr class= "line"> 
  
  `
chapters.appendChild(li)
})


}



sbtn.addEventListener("click",(e)=>{
  // alert(e.target.innerText)

 if(e.target.tagName=="BUTTON"){
   //we will pass the function here with parameter which will carry name of the chapter
  chapters.innerHTML="" // removing the previous datas when new button is clicked
  getdata(e.target.innerText)
 }
})
