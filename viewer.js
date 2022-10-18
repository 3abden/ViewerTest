const e = ["#ffcba5", "#fc8181", "#8db0ea", "#90ebf4", "#b5eca6", "#d3e187", "#83e1af", "#a798ff", "#e3ffbf", "#8ed3ce", "#ffebb6", "#e7aef3"]
  , o = window.location.hash ? window.location.hash.replace("#", "") : "4"
  , t = parseInt(o);
document.querySelector("body").style.backgroundColor = e[t % e.length],

//https://ipfs.io/ipfs/QmVmcbthgud6T4yUJ6QTiK9FTFz7CprjKEGEjE5eGrNnBy/${o}
//ape wing.gltf

//const e = ["#FDFFB6", "#FFD6A5", "#FFADAD", "#FFC6FF", "#BDB2FF", "#A0C4FF", "#9BF6FF", "#99E1DC", "#8EEDD6", "#A6ECA8", "#CAFFBF", "#D9ED92"]
//const e = [, ]
//const e = ["#ffcba5", "#fc8181", "#8db0ea", "#90ebf4", "#b5eca6", "#d3e187", "#83e1af", "#a798ff", "#e3ffbf", "#8ed3ce", "#ffebb6", "#e7aef3"]
// const o = window.location.hash ? window.location.hash.replace("#","") : "4"
// function changeColor() {
//   var x = document.getElementById("colorPicker").value;
  // document.getElementById("body").setAttribute('style.backgroundColor', '')
  // document.getElementById("body").classList.add(x);
  



document.querySelector("#viewer").innerHTML = `\n

<head\n
  <meta charset="UTF-8" />\n

  <link href="tailwind.min.css" rel="stylesheet" />\n
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n



<model-viewer\n
id="myModel"\n
style="width: 100vw; height: 100vh"\n
class=""\n
animation-name=""\n
src="GLTF/${o}"\n
camera-orbit="340deg 90deg"\n
camera-controls\n
autoplay\n
orientation="0deg 0deg 150deg"\n
shadow-intensity="3"\n
/>
<select id="colorPicker" onchange="changeColor()">
        <option id="one" value="bg-white-400">Default Color</option>
        <option id="two" value="bg-yellow-400">Yellow</option>
        <option id="three"value="bg-purple-400">Purple</option>
        <option id="four"value="bg-red-400">Red</option>
        <option id="five"value="bg-blue-400">Blue</option>
        <option id="six"value="bg-green-400">Green</option>
</select>
<select id="animationPicker" onchange="changeAnimation()">
      <option id="animation one" value="Idle 01">Idle</option>
      <option id="animation two" value="Swim Idle 01">Swim</option>
      <option id="animation three"value="Run 01">Run</option>
</select>      
      
`

,



  
document.querySelector("#viewer model-viewer").addEventListener("load", (()=>{
    document.querySelector("#loader").style.display = "none"
}

));





