$(function(){
	$("#user").blur(xzuser);
	$("#pwd").blur(xzpwd);
	$("#mobile").blur(xzmobile);
	$("#birth").blur(xzbirth);
	
	$("#myform").submit(function(){
		var flag=true;
		if(!xzuser()) flag=false;
		if(!xzpwd()) flag=false;
		if(!xzmobile()) flag=false;
		if(!xzbirth()) flag=false;
		return flag;
	})
})

function xzuser(){
	var user=$("#user").val();
	var zzbds=/^[A-Za-z]\w{5,15}$/;
	if(user==""){
		$("#user_prompt").html("不能为空");
		return false;
	}else if(zzbds.test(user)==false){
		$("#user_prompt").html("请按照格式写");
		return false;
	}
	$("#user_prompt").html("");
	return true;
} 


function xzpwd(){
	var pwd=$("#pwd").val();
	var zzbds=/^[A-Za-z0-9]{4,10}$/;
	if(pwd==""){
		$("#pwd_prompt").html("密码不能为空");
		return false;
	}else if(zzbds.test(pwd)==false){
		$("#pwd_prompt").html("请按照格式填写");
		return false;
	}
	$("#pwd_prompt").html("");
	return true;
}

function xzmobile(){
	var mobile=$("#mobile").val();
	var zzbds=/^[1]\d{10}$/;
	if(mobile==""){
		$("#mobile_prompt").html("手机号不能为空");
		return false;
	}else if(zzbds.test(mobile)==false){
		$("#mobile_prompt").html("请输入以1开头的11位手机号码");
		return false;
	}
	$("#mobile_prompt").html("");
	return true;
}

function xzbirth(){
	var birth=$("#birth").val();
	var zzbds= /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
	if(birth==""){
		$("#birth_prompt").html("不能为空");
		return false;
	}else if(zzbds.test(birth)==false){
		$("#birth_prompt").html("请按照1900-01-01格式填写");
		return false;
	}
	$("#birth_prompt").html("");
	return true;
}