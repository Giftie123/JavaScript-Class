//The Document Object Model (Dom)
//The document stands for your entire html and css
//Tree like structure with objects
//all HTML and CSS turned into javascript
//  console.log(document);

 //DOM methods
//  console.dir(document.body)
//  getElementByID(); //selects element by id
//  getElementsByClassName() //selects an element by class
//  getElemetnsByTagName()//selects html tags ie p, h1, h2
//  querySelector(); //selcts the first matching css class
//  //it can also be used for ids and html tags
//  querySelectorAll(); //selects all matching elements

//  const allTitles = document.getElementsByTagName("h1");
// console.log(allTitles.length);
// for(let i = 0; i <allTitles.length; i++){
//     console.log(allTitles[i])
// }

// const firstTitle = document.getElementById("heading-one");
// const firstTitle = document.querySelector(".title");
// const firstTitle = document.querySelector("#title");
// const firstTitle = document.querySelector("h1");

const allTitles = document.querySelectorAll("h1");
allTitles[3].className = "title";
allTitles[3].textContent = "This is my Fourth heading"
allTitles[2].style.fontSize = "50px"
allTitles[2].style.color = "red"
// allTitles.setAttribute
// allTitles.remove();
// [h1,h1,h1,h1]

//  C create/get
//  R 
//  U
//  D