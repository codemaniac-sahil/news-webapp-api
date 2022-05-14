// https://newsapi.org/v2/top-headlines?country=in&apiKey=7ccf3b8406a94d028b1cd059f0c6d015
async function getgeolocation(){
    
    let url='https://ipapi.co/json';
    let response=await fetch(url)
    let data = await response.json()
    current_location=data.country_code
    document.getElementById("country").innerHTML=data.country_name
    async function getnews(){
        url1='https://newsapi.org/v2/top-headlines?country='
        url2=current_location+'&apiKey=7ccf3b8406a94d028b1cd059f0c6d015'
        full_url=url1+url2;
        console.log(full_url)
        let response1=await fetch(full_url);
        let data1=await response1.json()
        for(var i=0;i<data1.articles.length;i++){
            document.getElementById("news").innerHTML+=`<div class='img'><img src=${data1.articles[i].urlToImage}>
            </div>
            <div class='news'><p>${data1.articles[i].title} <a href='${data1.articles[i].url}'> Read full article</p>
            
            `
        }

    }
   getnews()
    
}

getgeolocation()
