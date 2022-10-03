async function getworld_news(){
    let response2 = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=efbe6953b5e24dc7857c47ac7e35e650 ");
    let data2=await response2.json()
            for(var i=0;i<data2.articles.length;i++){
                document.getElementById("world_news").innerHTML+=`<div class='img'><img src=${data2.articles[i].urlToImage}>
            
                <div class='world_news'><p>${data2.articles[i].title} <a href='${data2.articles[i].url}'> Read full article</p> `
            }
        }
    
    getworld_news()