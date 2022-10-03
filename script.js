// https://gnews.io/api/v4/top-headlines?token=a175ac9bf19a19e7e95f50136ebffcbb&country=in&lang=en
//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=efbe6953b5e24dc7857c47ac7e35e650
async function getgeolocation(){
    
    let url='https://ipapi.co/json';
    let response=await fetch(url)
    let data = await response.json()
    current_location=data.country_code
    current_location
    document.getElementById("country").innerHTML=data.country_name
    async function getnews(){
        url1='https://gnews.io/api/v4/top-headlines?token=a175ac9bf19a19e7e95f50136ebffcbb&country='
        url2=current_location.toLowerCase()+'&lang=en'
        full_url=url1+url2;
        let response1=await fetch(full_url);
        let data1=await response1.json()
        for(var i=0;i<data1.articles.length;i++){
            document.getElementById("news").innerHTML+=`<div class='img'><img src=${data1.articles[i].image}>
            </div>
            <div class='news'><p>${data1.articles[i].title} <a href='${data1.articles[i].url}'> Read full article</p>
            
            `
        }

    }
   getnews()
    
}

getgeolocation()

