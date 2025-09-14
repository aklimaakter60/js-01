//example-01
function changeContant() {
	document.getElementById('cc').innerHTML=
	"Hello";
}
//example-02
function showDate() {
	document.getElementById('cd').innerHTML=
	Date();
}
//example-03
function showDateTime() {
	document.getElementById('cdt').innerHTML=
	Date();
}
//example-04
function bulbOn() {
	document.getElementById('img').src =
	"images/bon.gif" ;
}
function bulbOff() {
	document.getElementById('img').src =
	"images/boff.gif" ;
}
//example-05
function textShow() {
	document.getElementById('sh').style.display=
	"block" ;
}
function textHide() {
	document.getElementById('sh').style.display=
	"none" ;
}
//example-06
let number1 = 5;
let number2 = 8;

let result = number1+number2;

function showResult(){
	document.getElementById('sr').innerHTML=result
}
//example-07
let first_name,last_name;

first_name="Aklima";
last_name="Akter";
result=first_name+ " " +last_name
function showResult(){
	document.getElementById('sr1').innerHTML=result
}
//example-08
	function showHS(s_form){

	const selectorId= document.getElementById('s_form');

	if( selectorId.style.display == "block" ){
		selectorId.style.display = "none";
	}else{
		selectorId.style.display = "block";
	}
}
//example-09
function toggleV(text) {
  const element = document.getElementById('text');
  if (element.style.display == "block") {
  element.style.display = "none"; 
  }else {
  element.style.display = "block";
  }
}
//example-10
let x,y;
x=5;
y=7;
z=x+y
function showAmount(){
	document.getElementById('su').innerHTML=z
}
//example-------
//javascript variable
/*
const dateOfBirth=30;
const familyMamber= 4;
const student=40;
const marks=75;
const room=3;
const studyHour=5;
const number=11;
const Total=100;
const age=30;
const booksToRead=1;
const weakUpTime=8.00;
const wastedTime=2;
const borrow=0;
const goals=3;
const pillow=6;
console.log(room);
console.log(dateOfBirth);
console.log(weakUpTime);
*/
/*
const favFood="Biryani";
const hiddenPlace="Ber er Niche";
const name="Aklima";
const address="Gazipur, Tongi";
console.log(address);
*/
const isRich= true;
const passed=false;
const isHeppy=true;
const hasMoney=false;
const isHungry=true;
const isStudyDone=true;
const isDinnerDone=false;
const eggPrice=10;
const onionPrice=20;

console.log(isRich);