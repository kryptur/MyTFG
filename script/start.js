$(".start_link").click
	(
		function ()
			{
				var link = $(this).attr("name");
				mytfg_goto('index.html?site='+link);
			}
	);