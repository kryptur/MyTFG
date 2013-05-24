
HTTP_GET_VARS=new Array();
strGET=document.location.search.substr(1,document.location.search.length);
if(strGET!='')
    {
    gArr=strGET.split('&');
    for(i=0;i<gArr.length;++i)
        {
        v='';vArr=gArr[i].split('=');
        if(vArr.length>1){v=vArr[1];}
        HTTP_GET_VARS[unescape(vArr[0])]=unescape(v);
        }
    }
 
function GET(v)
{
if(!HTTP_GET_VARS[v]){return 'undefined';}
return HTTP_GET_VARS[v];
}
 
 
function LoadContent(site)
{
	if (site=='undefined')
		{mytfg_goto('?site=start');}
		
	var file=('content/'+toLowerCase(site)+'.html');
	$(".content").load(file);
	//$(".content").html(file);
}
 
var s=GET('site');
LoadContent(s);

