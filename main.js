

let all = document.querySelectorAll("#allis");

let click = document.getElementById("denn");



	

function showIt(para){
	// console.log(para);
	if(para >= 0){
		for(let i = 0; i < all.length;i++){
			all[i].children[0].children[1].style.display = "none";
		}
		let image = all[para].children[0].children[1];
		image.style.display = "block";
		image.classList.add("index");
		// image.style.opacity = 0;
	}
}

document.getElementById("denn").addEventListener("mouseleave",clearAll);

function clearAll(){
	// console.log("yes");
	for(let i = 0; i < all.length;i++){
			all[i].children[0].children[1].style.display = "none";
		};
}
// console.log(den);

