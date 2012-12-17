var btn_generate;
var btn_ajaxGET;
var btn_ajaxPOST;
var txt_name;
var xmlHttp;

window.onload=function()
{
	btn_generate=document.getElementById('btn_generate');
	btn_ajaxGET=document.getElementById('btn_ajaxGET');
	btn_ajaxPOST=document.getElementById('btn_ajaxPOST');
	txt_name=document.getElementById('txt_name');
	btn_ajaxGET.onclick=doAJAX_GET;
	btn_ajaxPOST.onclick=doAJAX_POST;
	btn_generate.onclick=domControl;
}

function domControl()
{
	// alert(document.body.innerHTML);
	// document.write('Eric: Screw you guys. I am going home');
	// var tmp="<p>Eric: Screw you guys. I am going home</p>";
	// document.body.innerHTML+=tmp;
	document.body.insertAdjacentHTML("beforeEnd","<p>Eric: Screw you guys. I am going home</p>");
	// alert(document.body.innerHTML);
}




function doAJAX_GET()
{	
	// alert("AJAX_GET_START");
	xmlHttp = new XMLHttpRequest();
	// window.location.href="../../function/ajaxResponse/"+txt_name.value+"/";
	// alert(document.location+"../../function/ajaxResponse/"+txt_name.value+"/");
	// var params = "paraA="+form_paraA.value+"&paraB="+form_paraB.value;
	xmlHttp.onreadystatechange = showTEXT;
	
	xmlHttp.open("GET","/Ju/function/ajaxResponse/?type=GET&txt_name="+encodeURIComponent(txt_name.value)+"&r="+Math.random(),true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// xmlHttp.open("GET","http://192.168.154.100/Mission01/doADD.php?paraA=4&paraB=5",true);	
	xmlHttp.send(null);
	// if(xmlHttp.readyState==4)
	// {
	// 	if(xmlHttp.status==200)
	// 	{
	// 		showTEXT();
	// 	}
	// }
	// else
	// {
	// 	ifFailed();
	// }
	// return false;
	// alert("AJAX_GET_DONE");
}

function doAJAX_POST()
{	
		// alert("AJAX_GET_START");
	xmlHttp = new XMLHttpRequest();
	// window.location.href="../../function/ajaxResponse/"+txt_name.value+"/";
	// alert(document.location+"../../function/ajaxResponse/"+txt_name.value+"/");
	var params = "type=POST&txt_name="+encodeURIComponent(txt_name.value)+"&r="+Math.random();
	xmlHttp.onreadystatechange = showTEXT;	
	xmlHttp.open("POST","/Ju/function/ajaxResponse/",true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// xmlHttp.open("GET","http://192.168.154.100/Mission01/doADD.php?paraA=4&paraB=5",true);	
	xmlHttp.send(params);
	// if(xmlHttp.readyState==4)
	// {
	// 	if(xmlHttp.status==200)
	// 	{
	// 		showTEXT();
	// 	}
	// }
	// else
	// {
	// 	ifFailed();
	// }
	// return false;
	// alert("AJAX_GET_DONE");
}

function showTEXT()
{
	// alert(xmlHttp.readyState);
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			document.body.insertAdjacentHTML("beforeEnd","<p>"+xmlHttp.responseText+": Screw you guys. I am going home.</p>");
		}
		else
		{
			document.body.insertAdjacentHTML("beforeEnd","<p>Failed to Retrieve data.</p>");
		}
	}	
}