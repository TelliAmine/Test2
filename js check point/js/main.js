

function fun3()
{
document.getElementById("par").style.textDecoration='underline';
}

function fun2(){
document.getElementById("par").style.fontStyle='italic';
}

function fun1(){
	document.getElementById("par").style.fontWeight='bold';
}

function fun4(){

var x=document.getElementById("family").value;

	document.getElementById("par").style.fontFamily=x;
	
}

function fun5(){
	var y=document.getElementById("size").value;
	
	document.getElementById("par").style.fontSize=y+"px";
}