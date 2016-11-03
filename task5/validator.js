function f_nameCheck(){
	var name;
	name=document.forms['registration'].elements['firstname'].value;
		if((name.length <1)||(name.length>15)){
		document.getElementById("f_nameVal").innerHTML = "Invalid name.";
		}
			else
				document.getElementById("f_nameVal").innerHTML = "";
		
}
function l_nameCheck(){
	var name;
	name=document.forms['registration'].elements['lastname'].value;
		if(name.length <1||name.length>15){
		document.getElementById("l_nameVal").innerHTML = "Invalid name.";
		}
	else
		document.getElementById("l_nameVal").innerHTML = "";
}

function egnCheck(){
	var egn;
	egn=document.forms['registration'].elements['egn'].value;
	if(egn.length<10||egn.length>10){
	document.getElementById("egnVal").innerHTML = "Invalid EGN.";
	}
	else
		document.getElementById("egnVal").innerHTML = "";
}
function ageCheck(){
	var age;
	age=document.forms['registration'].elements['age'].value;
	if(age<18||age>118){
	document.getElementById("ageVal").innerHTML = "Invalid age.";
	}
	else
		document.getElementById("ageVal").innerHTML = "";
}
function addressCheck(){
	var address;
	address=document.forms['registration'].elements['address'].value;
	if(address.length<1||address.length>100){
	document.getElementById("addressVal").innerHTML = "Invalid address.";
	}
	else
		document.getElementById("addressVal").innerHTML = "";
		
}
function passCheck(){
	var pass;
	pass=document.forms['registration'].elements['pass'].value;
	if(pass.length<6||pass.length>18){
	document.getElementById("passVal").innerHTML = "Invalid password.";
	}
	else
		document.getElementById("passVal").innerHTML = "";
}

function c_passCheck(){
	var c_pass;
	var pass;
	pass=document.forms['registration'].elements['pass'].value;
	c_pass=document.forms['registration'].elements['c_pass'].value;
	if(pass!=c_pass){
	document.getElementById("c_passVal").innerHTML = "Passwords dont match.";
	}
	else
		document.getElementById("c_passVal").innerHTML = "";
		
}

function validation(){
	f_nameCheck();
	l_nameCheck();
	egnCheck();
	ageCheck();
	addressCheck();
	passCheck();
	c_passCheck();
}