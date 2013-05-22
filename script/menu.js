function mytfg_menu()
	{
		$("#main_menu").toggle();
	}
	
function mytfg_back()
	{
		history.back();
	}
	
	
$("#menu_back").click
	( 
		function()
			{
				mytfg_back();
			}
	)
	
$("#menu_toggle").click
	( 
		function()
			{
				mytfg_menu();
			}
	)