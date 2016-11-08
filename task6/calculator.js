function concatNumber(number){
	var value = document.getElementById("output").value;
	if(value == 0){
	document.getElementById("output").value = number;
	}
	else{
	value=value+number;
	document.getElementById("output").value = value;
	}
}

function concatOperator(operator){
	var value = document.getElementById("output").value;
	var op=/^[0-9]+$/;
	if(value==0){
	document.getElementById("output").value=value;
	}
	else if(!value.match(op)){
	document.getElementById("output").value=value;
	}
	else{
	value=value.concat(operator);
	document.getElementById("output").value = value;
	}
	theOperator=operator;
}

function evaluat(){
	var operands=document.getElementById("output").value;
	var result=eval(operands);
	document.getElementById("output").value=result;
}


function clearAll(){
	document.getElementById("output").value=0;
}

function clearLast(){
	var current=document.getElementById("output").value;
	if(current.length==1){
	document.getElementById("output").value=0;
	}
	else{
	current=current.substring(0, current.length-1);
	document.getElementById("output").value=current;
	}
}