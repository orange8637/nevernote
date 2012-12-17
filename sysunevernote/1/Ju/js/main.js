var p_mnu_pMode,p_mnu_tMode;
var t_mnu_pMode,t_mnu_tMode;

var p_mnu_newNote;
var t_mnu_newNote;

var pageList,pageFrames;

var btn_vMode,btn_eMode,btn_comments,btn_favorites,btn_permissions,btn_versions;

var mini_save,mini_abandon,mini_reload,mini_delete;

var txt_comment,list_comment,isFavor;
var btn_sendComment;
var v_title,v_tags,v_time,v_content;
var e_title,e_tags,e_content;
var e_title_e,e_tags_e,e_content_e;

var nav_pMode,nav_tMode;

window.onload=function()
{
	//Primary Menus
	p_mnu_pMode=document.getElementById('p_mnu_pMode');
	p_mnu_tMode=document.getElementById('p_mnu_tMode');
	t_mnu_pMode=document.getElementById('t_mnu_pMode');
	t_mnu_tMode=document.getElementById('t_mnu_tMode');

	//Navs
	nav_pMode=document.getElementById('nav_pMode');
	nav_tMode=document.getElementById('nav_tMode');
	nav_tMode.style.display='none'; //initialization, PersonalMode displayed first

	//Menu Items
	p_mnu_newNote=document.getElementById('p_mnu_newNote');
	t_mnu_newNote=document.getElementById('t_mnu_newNote');

	//Frames
	pageList=document.getElementById('pageList');
	pageFrames=document.getElementById('pageFrames');

	//Big Buttons
	btn_vMode=document.getElementById('btn_vMode');
	btn_eMode=document.getElementById('btn_eMode');
	btn_comments=document.getElementById('btn_comments');
		btn_comments.onclick=function(){txt_comment.focus();}
	btn_favorites=document.getElementById('btn_favorites');
		isFavor=document.getElementById('isFavor');
		btn_favorites.onclick=function(){favorChange(false);}
	btn_permissions=document.getElementById('btn_permissions');
	btn_versions=document.getElementById('btn_versions');
	btn_eMode.style.display='none';

	//Mini Buttons
	mini_save=document.getElementById('mini_save');
	mini_abandon=document.getElementById('mini_abandon');
	mini_reload=document.getElementById('mini_reload');
	mini_delete=document.getElementById('mini_delete');

	//CommentArea
	txt_comment=document.getElementById('txt_comment');
	list_comment=document.getElementById('list_comment');
	btn_sendComment=document.getElementById('btn_sendComment');
		btn_sendComment.onclick=function(){sendComment();}

	//ViewMode
	v_title=document.getElementById('v_title');
	v_tags=document.getElementById('v_tags');
	v_time=document.getElementById('v_time');
	v_content=document.getElementById('v_content');
	// alert(v_title.innerHTML);
	// getNote(9);

	//EditMode
	e_title=document.getElementById('e_title');
		e_title_e=document.getElementById('e_title_e');
	e_tags=document.getElementById('e_tags');
		e_tags_e=document.getElementById('e_tags_e');
	e_content=document.getElementById('e_content');
		e_content_e=document.getElementById('e_content_e');
		//init Mode
		modeChange_1('e');

	p_mnu_pMode.onclick=function(){modeChange_0('p');}
	p_mnu_tMode.onclick=function(){modeChange_0('t');}
	t_mnu_pMode.onclick=function(){modeChange_0('p');}
	t_mnu_tMode.onclick=function(){modeChange_0('t');}

	btn_vMode.onclick=function(){modeChange_1('v');}
	btn_eMode.onclick=function(){modeChange_1('e');}

	// p_mnu_newNote.onclick=function(){newNote('*Untitled','p')}
	// t_mnu_newNote.onclick=function(){newNote('*Untitled','t')}
}

function modeChange_0(mode)
{
	if(mode=='p')
	{
		nav_pMode.style.display='inherit';
		nav_tMode.style.display='none';
	}
	else if(mode=='t')
	{
		nav_pMode.style.display='none';
		nav_tMode.style.display='inherit';
	}
}

function modeChange_1(mode)
{
	if(mode=='v')
	{
		//button style
		btn_vMode.style.display='none';
		btn_eMode.style.display='inherit';
		//item style
		v_title.style.display='none';
		v_tags.style.display='none';
		v_content.style.display='none';
		//Load Note
		e_title_e.value=v_title.innerHTML;
		e_tags_e.value=v_tags.innerHTML;
		e_content_e.value=v_content.innerHTML;
		//Display Edit
		e_title.style.display='inherit';
		e_tags.style.display='inherit';
		e_content.style.display='inherit';
		//Display mini buttons
		mini_save.style.display='inline';
		mini_abandon.style.display='inline';
		mini_reload.style.display='inline';
		mini_delete.style.display='inline';
	}
	else if(mode=='e')
	{
		btn_vMode.style.display='inherit';
		btn_eMode.style.display='none';
		//item style
		v_title.style.display='inherit';
		v_tags.style.display='inherit';
		v_content.style.display='inherit';
		//Display Edit
		e_title.style.display='none';
		e_tags.style.display='none';
		e_content.style.display='none';
		//Display mini buttons
		mini_save.style.display='none';
		mini_abandon.style.display='none';
		mini_reload.style.display='none';
		mini_delete.style.display='none';
	}
}

function favorChange(status)
{
	if(status==true)
	{
		isFavor.className='icon-heart';
	}
	else
	{
		isFavor.className='icon-heart-2';
	}
}

var xmlHttp;
function getNote(id)
{
	xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange=displayNote;
	xmlHttp.open("GET",'/viewNote/'+id,true);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.send(null);
}
function displayNote()
{
	if(xmlHttp.readyState==4)
	{
		if(xmlHttp.status==200)
		{
			var data=eval('('+xmlHttp.responseText+')');
			if(data.rc==0)
			{
				//Normal,Display
				v_title.innerHTML=data.title;
				v_content.innerHTML=data.content;
				v_tags.innerHTML=data.tag;
				v_time.innerHTML=data.date;
			}
		}
		else
		{
			alert('Fail to Retrieve Data!');
		}
	}	
}


function setHeight(obj) 
{
     obj.style.height = obj.scrollHeight + 'px';
}

function sendComment()
{
	list_comment.insertAdjacentHTML("beforeEnd","<blockquote>"+txt_comment.value+"<small>David,11:27 12-15 2012</small></blockquote>");
}