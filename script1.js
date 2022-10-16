async function getworld_news() {
    let response2 = await fetch(
        "https://gnews.io/api/v4/top-headlines?token=eda17c6b4e1661b23d3253bcd5156d2f&lang=en"
    );
    let data2 = await response2.json();
    for (var i = 0; i < data2.articles.length; i++) {
        document.getElementById(
            "world_news"
        ).innerHTML += `<a href='${data2.articles[i].url}'>
                            <div class='img'>
                                <img src=${data2.articles[i].image}>
                                <p class='title'>${data2.articles[i].title}</p>
                            </div>
                        </a>`;
    }
}

getworld_news();
