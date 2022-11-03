// fetch('https://newsapi.org/docs/get-started')
// .then(response =>{
//     return response.json();
// }).then(data =>{
//     console.log(data);
// })

let headline = document.querySelector(".headline")
let description = document.querySelector(".description")
let aname = document.querySelector(".aname")
let right=document.querySelector(".right")
let selectag=document.querySelector(".sec")
let optiontag=document.querySelector(".opt") 
let navbar=document.querySelector('.nav-bar')

var allNewsurl=
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-10-27&" +
  "sortBy=popularity&" +
  "apiKey=4ed54132d8c24284a7ddccf6e357b288";
let main =  document.querySelector('.container')
let topnews=document.querySelector('.cont')

function getNewsData(url,container){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        data.articles.forEach(val => {
         allcardnews(val,container)
        });
    })
}

   function allcardnews(val,container){
    let body = document.body
       
    let division = document.createElement('div')
    division.setAttribute("class","container2")

    let picture=document.createElement('img')
    picture.classList.add('picture')

    let headline = document.createElement('h1')
    headline.setAttribute('class','headline')

    let description = document.createElement('p')
    description.setAttribute('class','description')

    let aname =  document.createElement('h1')
    aname.classList.add('aname')

    // let published=document.createElement('p')
    // published.classList.add('publish')

    let link=document.createElement('a')
    link.href=val.url
    link.target = "_blank"
    link.innerHTML = "Read more.."


    body.append(division)
    division.append(picture,headline,description,aname,link)
    main.append(division)
    
     headline.innerText = val.title
     description.innerText = val.description
     aname.innerText = `author:${val.author}`
    //  published.innerText=val.publishedAt
     picture.src=val.urlToImage
   }

   function showAllNews(){
    getNewsData(allNewsUrl,main)
  }

allcardnews();