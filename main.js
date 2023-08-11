const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (3 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 680 /*300 original*/
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", ()=> {
    items.forEach(item => {
      item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})


var type = "serie";
var imdb = "tt13056754";
var season = "1";
var episode = "1";
var ref = document.referrer;
embedderPlugin(type, imdb, season, episode);
function embedderPlugin(type, imdb, season, episode){
if (type == "filme") { season="";episode="";}else{if (season !== "") { season = "/"+season; }if (episode !== "") { episode = "/"+episode; }}
    var frame = document.getElementById('EmbedderIframe');
    frame.innerHTML += '<iframe src="https://embedder.net/e/'+imdb+season+episode+'?ref='+ref+'" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>';
}