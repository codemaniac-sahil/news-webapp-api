// https://gnews.io/api/v4/top-headlines?token=a175ac9bf19a19e7e95f50136ebffcbb&country=in&lang=en
//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=efbe6953b5e24dc7857c47ac7e35e650


 const ball = document.querySelector(".toggle-ball");
 const items = document.querySelectorAll("body,main,.dark,.container,div,.toggle,ul,.footer,.button,.icon-container,.navHai,nav,.social,.hovereffect");
 ball.addEventListener("click",()=>{

     items.forEach(item=>{
         item.classList.toggle("active")
     })
     ball.classList.toggle("active")
 })

async function getgeolocation(){
    
    let url='https://ipapi.co/json';
    let response=await fetch(url)
    let data = await response.json()
    var current_location = data.country_code
    var current__lang = data.languages;
    document.getElementById("country").innerHTML = data.country_name;
    async function getnews(){
        let full_url ='https://gnews.io/api/v4/top-headlines?token=a175ac9bf19a19e7e95f50136ebffcbb&country=' + current_location.toLowerCase()+ '&lang=' + current__lang.toLowerCase();
        console.log(full_url)
        let response1 = await fetch(full_url);
        let data1 = await response1.json()
        for(var i=0;i<data1.articles.length;i++){
            document.getElementById("news").innerHTML+=
            // `<div class='news'>  <div class='img'> <img src=${data1.articles[i].image } </div>    <p>${data1.articles[i].title} <br> <a class="read" href='${data1.articles[i].url}'> Read full article </a> </p>
            // </div>
            

            `<div class="card" style="width: 18rem;">
            <img src=${data1.articles[i].image} class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${data1.articles[i].title}</p>
                 <a href=${data1.articles[i].url} class="btn btn-primary">Read full article</a>
            </div>
            </div>
            `
        }

        // <h5 class="card-title">${data1.articles[i].title}</h5>

    }
   getnews()
    
}

getgeolocation()

