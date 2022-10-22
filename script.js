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


function myFunction() {

  var element = document.body;
  element.classList.toggle("dark-mode");
}

async function getgeolocation() {
  let url = "https://ipapi.co/json";
  let response = await fetch(url);
  let data = await response.json();
  var current_location = data.country_code;
  var current__lang = data.languages;
  document.getElementById("country").innerHTML = data.country_name.toUpperCase();
  async function getnews() {
    let full_url =
      "https://gnews.io/api/v4/top-headlines?token=a175ac9bf19a19e7e95f50136ebffcbb&country=" +
      current_location.toLowerCase() +
      "&lang=" +
      current__lang.toLowerCase();
    let newsResponse = await fetch(full_url);
    let newsData = await newsResponse.json();
    if (newsResponse.ok) {
      for (var i = 0; i < newsData.articles.length; i++) {
        document.getElementById(
          "news"
        ).innerHTML += `<div class="card" style="width: 18rem;">
            <img src=${newsData.articles[i].image} class="card-img-top" alt="...">

            <div class="card-body">
                <p class="card-text">${newsData.articles[i].title}</p>
                 <a href=${newsData.articles[i].url} class="btn btn-primary">Read full article</a>
            </div>
            </div>
            `;
      }
    } else {
      document.getElementById(
        "news"
      ).innerHTML = `<div class="error-container"><p>Oops!</p><p>Looks like we are having some trouble loading the news.</p><p>We request you to try again later.</p></div>`;
      console.log(`Error ${newsResponse.status}: ${newsData.errors[0]}`);
    }
  }
  getnews();
}

getgeolocation();
