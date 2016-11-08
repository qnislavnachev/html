function addNumber(number){
	var value = document.getElementById("output").value;
	if(value == 0){
	document.getElementById("output").value = number;
	}
	else{
	value=value+number;
	document.getElementById("output").value = value;
	}
}

function addOperator(operator){
	var value = document.getElementById("output").value;
	var op=/^[0-9]+$/;
	if(value==0){
	return;
	}
	else if(!value.match(op)){
	return;
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