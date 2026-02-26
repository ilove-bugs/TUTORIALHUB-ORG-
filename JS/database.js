//array of calculus

var meta = document.body.dataset.content;

var subj = {
  math: {
    Derivative: [
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
      },
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
      },
    ],
    RateMeasure: [
      {
        title: "Application of Derivative",
        owner: "Math Guru Shashi",
        link: "https://youtu.be/-2LygdBEcoI",
        img: "RM1.jpeg",
      },
      {
        title: "Rate Measure(one shot)",
        owner: "",
        link: "https://youtu.be/U2kFS6KcqdA",
        img: "rm2.jpeg",
      },
      {
        title: "Rate Measure-part-1",
        owner: "Goal X",
        link: "https://youtu.be/Ft_Yb3BvZKE",
        img: "rm3.jpeg",
      },
      {
        title: "Rate Measure-part-2",
        owner: "Goal X",
        link: "https://youtu.be/5GKYEFe-V88",
        img: "rm4.jpeg",
      },
    ],
    Antiderivative: [
      {
        title: "Anti-Derivative(Ex 14.1)",
        owner: "SBG math",
        link: "https://youtu.be/7FrGgsN_rkk",

        img: "1847618340053836317.jpeg",
      },
      {
        title: "Integration(One Shot)",
        owner: "",
        link: "https://youtu.be/q3ZTXiPX2eM",

        img: "i2.jpeg",
      },
      {
        title: "Anti-Derivative(combinbed)",
        owner: "GoalX",
        link: "https://youtu.be/Cphnfruzex4",

        img: "i3.jpeg",
      },
    ],
    Vectors:[
      {
 title: "Vectors, Scalar Product(Basics)",
 owner:"Goal X",
  link:"https://youtu.be/lB7XpHIu7Fw?si=jlOuk7jNMXDSjIQr"
      },
      {
 title:"Scalar Product(Basics)",
 owner:"",
  link:"https://youtu.be/NdHfMqBx7Dc?si=QZWF6WYPhB4i-Wqo"
      },
      {
 title:"Scalar Product, part-1",
 owner:"SBG Math",
  link:"https://youtu.be/hWArmCRRMcE"
      },
      {
 title:"Proved Questions,Ex. 9.1",
 owner:"Goal X",
  link:"https://youtu.be/XGcyqne_g1o"
      },
      {
        title: "Prove questions(Setbook)(One Shot)",
        owner: "Nepal Education YT", 
        link: "https://youtu.be/gePig3mVuTk"
      }
    ]

    // lhospital=[
    //   {

    //   }
    // ],
  },
};
// let getvdo= (n)=>{
//   calculus[n].forEach(v=>{
//     console.log(v.)
//   })
// }
// getvdo("derivative")

//evennt listener for chapter buttons
let chapters = document.getElementById("chapters");
var sbtn = document.querySelector(".subj-btn");

let getdata = (chapname) => {
  subj[meta][chapname].forEach((el) => {
    // console.log(Object.values(el))

    function getimg(url) {
       const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = url.match(regex);

  if (!match) return "";

  const videoId = match[1];

  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    }
    let li;
    li = document.createElement("li");
    li.setAttribute("class", "list");

    li.innerHTML = `
      <header class="title">${el.title}</header>
    <header class="owner">${el.owner}</header>
    <img src="${getimg(el.link)}" alt="${el.title} "id="thumbnail">
    <a href="${el.link}" class="clickme">Click me!</a>
<hr class= "line"> 
  
  `;
    chapters.appendChild(li);
  });
};

sbtn.addEventListener("click", (e) => {
  // alert(e.target.innerText)

  if (e.target.tagName == "BUTTON") {
    //we will pass the function here with parameter which will carry name of the chapter
    chapters.innerHTML = ""; // removing the previous datas when new button is clicked
    getdata(e.target.innerText);
  }
});
