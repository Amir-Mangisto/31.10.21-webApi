const myUrl = "https://api.jikan.moe/v3/search/anime?q=";
let myDiv = document.getElementById("myDiv");


function loadingGif() {
    myDiv.innerHTML += `<img id="load" src="https://i.gifer.com/ZZ5H.gif">`;
}
function stopGif() {
    load.style.display = "none";
}

async function getFirstApi(api) {
  try {
    loadingGif()
    return await fetch(api).then((response) => response.json());
  } catch (error) {
    return error;
  }
  finally{
    stopGif()
  }
}
searchBtn.onclick = () => {
  getFirstApi(myUrl + searchInput.value).then((res) => {
    for (let item of res.results) {
      myDiv.innerHTML += `<div class="moviesCards">
      <img src="${item.image_url}"/>
      <h1>${item.title}</h1>
      <h3>${item.synopsis}</h3>
      <p>${item.type}</p>
      </div>`;
    }
  });
};

