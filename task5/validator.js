function validateText(id, min, max, msg){
	var txt=document.forms['registration'].elements[id].value;
	if((txt.length <min)||(txt.length>max)){
	var current=document.getElementById("val").value;
    document.getElementById("val").value = current.concat(msg);
	}
}
function validateNum(id, min, max, msg){
    var num = document.forms['registration'].elements[id].value;
    if(num.length<min||num.length>max||num.match||num.match([/[0-9]+$/])){
    var current=document.getElementById("val").value;
    document.getElementById("val").value = current.concat(msg);
    }
}
function validatePass(){
	var pass;
	var re=/^[a-zA-Z0-9]+$/;
	pass=document.forms['registration'].elements['pass'].value;
	if(pass.length<6||pass.length>18||!pass.match(re)){
	var current=document.getElementById("val").value;
	document.getElementById("val").value = current.concat("\nPasword should be between 6 and 18 using numbers and latin charecters only.");
	}
}


