


let images = [['image/10.jpg','Leonardo Vandal','De profundis, Variation I - Solo Exhibition'],['image/9.jpg','Form of Memory','The life and work of Mitch Iburg'],
				  ['image/6.jpg','Black Sun','A series by Danish photographer Soren solkaer'],
				  ['image/4.jpg','Valeria Nascimento','Art inspired by the natural world'],
				  ['image/7.jpg','Domingos Totora','Sustainable art & design from Brazil'],
				  ['image/8.jpg','Los Angeles Pop Up Exhibition','by Ulysses De santi & Sage culture']
			 ];
let imm = document.getElementById("image");
let text = document.querySelector("#image h1");
let icon = document.getElementById("mov");
let p = document.querySelectorAll('p')[2];

let x = 0;
let y = 1;
let z = 1;
function move(){
	x += 1;
	
	//this next line i cant use " " i have to use string literals reason i know now
	imm.style.backgroundImage = `url(${images[x][0]})`;
	imm.classList.add("loop");
	text.innerHTML = images[x][1];
	text.nextElementSibling.innerHTML = images[x][2];
	if(x > 0){
		p.innerHTML = `${x + 1}/6`;
		icon.style.display = "block";
		

	}
}
function movv(n){
	x =x - 1;
	 imm.style.backgroundImage = `url(${images[x][0]})`;
	imm.classList.add("loop");
	text.innerHTML = images[x][1];
	text.nextElementSibling.innerHTML = images[x][2];
	p.innerHTML = `${x + 1}/6`;
}
// console.log(x);