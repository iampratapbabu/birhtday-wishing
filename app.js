//alert("Hello from the app.js file");
console.log("app loaded");

const clickme = () =>{
	alert("ja be chutiye");
	let gencontent = document.getElementById('div-text');
	gencontent.style.color='#333';
	gencontent.innerText="Ka bhai ka haal chaal";

}

let form = document.getElementById('form');
form.addEventListener('submit',function(event){
	event.preventDefault();
	let name = document.getElementById('name').value;
	let name1 = document.getElementById('name1').value;
	console.log(name,name1);
});


let x = document.getElementById("myAudio");


function playAudio() { 
  x.play(); 
} 
function pauseAudio() { 
  x.pause(); 
} 