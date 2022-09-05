let btn = document.getElementById("btn");

let url="https://pokeapi.co/api/v2/pokemon/";

let getid = function(){
    let id=Math.floor(Math.random()*100) 

    let urlId=url+id;
    console.log(urlId)

    fetch(urlId)
    .then(response => response.json())
    .then(data => getDataApi(data))
}

btn.addEventListener("click",getid);

window.addEventListener("load",getid);


function getDataApi(data){
    const imgSrc = data.sprites.other.home.front_default;
    console.log(data.sprites)
    const id =data.id;
    const height=data.height;
    const weight=data.weight;
    const hp=data.stats[0].base_stat;
    const attack=data.stats[1].base_stat;
    const defence=data.stats[2].base_stat;
    let name=data.name;
    const names= name.toUpperCase();

document.getElementById("img").src=imgSrc;
document.getElementById("id").innerHTML=id;
document.getElementById("name").innerHTML=names;

let x=document.getElementsByClassName("right");
x[0].innerHTML=`   <h1 id="hp">Hp : ${hp}</h1>
<h1 id="attack">attacks :${attack}</h1>
<h1 id="defence">defence :${defence}</h1>
<h1 id="weight">weight :${weight}</h1>
<h1 id="height">height:${height}</h1>`

}



























