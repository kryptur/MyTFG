function mytfg_menu()
	{
		$(".main_menu").toggle();
	}
	
function mytfg_back()
	{
		history.back();
	}	
	
function mytfg_goto(url)
	{
		location.href=url;
	}
	
$(".top_bar_back").click
	( 
		function()
			{
				mytfg_back();
			}
	);
	
$(".top_bar_menu").click
	( 
		function()
			{
				mytfg_menu();
			}
	);
	
$(".menu_item").click
	(
		function ()
			{
				var link = $(this).attr("name");
				mytfg_goto('index.html?site='+link);
			}
	);