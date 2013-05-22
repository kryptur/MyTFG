function mytfg_menu()
	{
		$(".main_menu").toggle();
	}
	
function mytfg_back()
	{
		history.back();
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