const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

let cardData = [];

//預涉5筆資料
(function init() {
    getData(5);
})()

function getData(num) {
    fetch(`https://api.github.com/orgs/facebook/repos?per_page=${num}&page=1`)
        .then(response =>
            response.json())
        .then(data => {
            cardData = data;
            renderCardData();
        })
        .catch(error => {
            console.log(error);
        });
}

function renderCardData() {
    let str = "";
    cardData.forEach((item) => {
        str += `<div class="card">
      <div class="card-head">
        <h2>${item.name}</h2>
        <p>${item.visibility}</p>
      </div>
      <div class="card-body">
        <p>${item.description}</p>
        <ul>
            ${renderCardTopics(item.topics)}
        </ul>
      </div>
    </div>`
    })
    container.innerHTML = str
}

function renderCardTopics(item){
    let str="";
    item.forEach((item)=>{
        str+=`<li>${item}</li>`
    })
    return str
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    getData(cardData.length + 5)
})
