var titles;
var body;
var text,dark,light;
var islight = 1;
function toggle (){
    if(islight===1){
        DarkMode();
        islight = 0;
    }
    else{
        lightMode();
        islight = 1;
    }
}

function DarkMode(){
    light.style.display = 'none';
    dark.style.display = 'block';
    console.log(body);
    titles.forEach(item => {
        item.style.backgroundColor = "rgb(24, 26, 27)";
        item.style.color = 'rgb(194, 189, 181)';
    });
    body.style.backgroundColor = 'rgb(30, 32, 33)';
    text.forEach(item=>{
        item.style.color = 'azure';
    })
    // document.getElementsByClassName('toggler-button').style.boxShadow=''
}

function lightMode(){
    light.style.display = 'block';
    dark.style.display = 'none';
    console.log(body);
    titles.forEach(item => {
        item.style.backgroundColor = "azure";
        item.style.color = 'rgb(24, 26, 27)';
    });
    body.style.backgroundColor = 'azure';
    text.forEach(item=>{
        item.style.color = 'rgb(24, 26, 27)';
    })
}
async function getworld_news() {
    dark = document.querySelector('.dark');
    light = document.querySelector('.light');
    dark.style.display = 'none';
    let response2 = await fetch(
        "https://gnews.io/api/v4/top-headlines?token=eda17c6b4e1661b23d3253bcd5156d2f&lang=en"
    //     "https://gnews.io/api/v4/top-headlines?token=a175ac9bf19a19e7e95f50136ebffcbb&country=" +
    //   'india' +
    //   "&lang=" +
    //   'english'
    );
    let data2 = await response2.json();
    // console.log(data2);
    for (var i = 0; i < data2.articles.length; i++) {
        document.getElementById(
            "world_news"
        ).innerHTML += `<a href='${data2.articles[i].url}'>
                            <div class='img darker'>
                                <img src=${data2.articles[i].image}>
                                <p class='title'>${data2.articles[i].title}</p>
                            </div>
                        </a>`;
    }
    body = document.querySelector('body');
    titles = document.querySelectorAll(".darker");
    text = document.querySelectorAll('.text');
    
}

getworld_news();
