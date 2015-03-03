function typenumber(val)
{
document.getElementById("calc_result").value+=val;
}



function runclear(){
	var test = document.getElementById("calc_result");
	test.value ="";
}


function runcancel(){
	var test = document.getElementById("calc_result");
	var testval = test.value;
	if(testval!='') {
	testval=testval.substr(0,testval.length-1); //delete last character
	}
	test.value = testval;

}
function evalue(){
	var test = document.getElementById("calc_result");
	var evalo = eval(test.value);
	test.value = evalo;
	localStorage.setItem("savedresult", evalo);
}

function keypad(evt) {
if(!evt) {evt=window.event;}
var key=evt.keyCode;

keypad_process_key(key);

//cancel bubble
if (evt.stopPropagation) evt.stopPropagation();
if (evt.cancelBubble!=null) evt.cancelBubble = true;
}

//process the keyboard scan code to affect the calculator display
function keypad_process_key(key) {
var buffer=document.getElementById("calc_result").value; //get current console data
if(buffer==0) {buffer='';} //reset buffer if it is empty (0 as value)


switch(key) {
case 8: //backspace is pressed
buffer=buffer.substr(0,buffer.length-1); //delete last character in the buffer
break;



case 46: //delete is pressed
buffer=''; //we empty the buffer
break;

case 106: //* is pressed
buffer+="*";
break;


case 107: //+ is pressed
buffer+="+";
break;

case 109: //- is pressed
buffer+="-";
break;

case 110: //. is pressed
buffer+=".";
break;

case 111: //  / is pressed
buffer+="/";
break;


case 96:
case 97:
case 98:
case 99:
case 100:
case 101:
case 102:
case 103:
case 104:
case 105:
s=String.fromCharCode(key-48);
buffer+=s;
break;


default:
if(key>47 && key <59) {
s=String.fromCharCode(key); //get the correct character from the keycode
buffer+=s;
}

}

if(buffer==0) {buffer=0;}

//update the result
document.getElementById("calc_result").value = buffer;
}

if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
}
else
{
   alert("Geolocation API not supported.");
}

function showCurrentLocation(position)
{
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var coords = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
    zoom: 15,
    center: coords,
    mapTypeControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

//create the map, and place it in the HTML map div
map = new google.maps.Map(
document.getElementById("mapPlaceholder"), mapOptions
);

//place the initial marker
var marker = new google.maps.Marker({
position: coords,
map: map,
title: "Current location!"
});
}

window.onload=function() {
document.getElementById("calculator").onkeyup = keypad;
var test = document.getElementById("calc_result");
test.value = localStorage.getItem("savedresult");
}


