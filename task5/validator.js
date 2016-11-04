function nameCheck(formName){
	var name=document.forms['registration'].elements[formName].value;
		if((name.length <1)||(name.length>15)){
	    var current=document.getElementById("val").value;
		document.getElementById("val").value = current.concat("\nNames should be between 1 and 15 charecters");
		}
}

function egnCheck(){
	var egn;
	egn=document.forms['registration'].elements['egn'].value;
	if(egn.length<10||egn.length>10||!egn.match([/^[0-9]+$/])){
	var current=document.getElementById("val").value;
	document.getElementById("val").value = current.concat("\nEGN should be 10 digits long.");
	}
}
function ageCheck(){
	var age;
	age=document.forms['registration'].elements['age'].value;
	if(age<18||age>118||!age.match([/^[0-9]+$/])){
	var current=document.getElementById("val").value;
	document.getElementById("val").value = current.concat("\nAge should be between 18 and 118.");
	}
}
function addressCheck(){
	var address;
	address=document.forms['registration'].elements['address'].value;
	if(address.length<1||address.length>100){
	var current=document.getElementById("val").value;
	document.getElementById("val").value = current.concat("\nAddress should be between 1 and 100 charecters.");
	}	
}
function passCheck(){
	var pass;
	var re=/^[a-zA-Z0-9]+$/;
	pass=document.forms['registration'].elements['pass'].value;
	if(pass.length<6||pass.length>18||!pass.match(re)){
	var current=document.getElementById("val").value;
	document.getElementById("val").value = current.concat("\nPasword should be between 6 and 18 using numbers and latin charecters only.");
	}
}
function validatePassConent(pass){
	var re=new RegExp("^[a-zA-Z0-9]+$", "g");
	if(re.test(pass)){
		false;
	}
	else 
		true;
} 
