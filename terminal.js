$(window).load(function() {
	//Setting up terminal logic
	//setting up command line with properties

$('#givencommand').css("width", 340);
$('#consolebox').css("width", $(window).width() - 20);
$('#consolebox').css("height", $(window).height() = 20);
$('#consoleoutput').css("width", $('#consolebox').width());
$('#consoleoutput').css("height", $('#consolebox').height());

//Set up cursor blinking. Will be a pain in the ass. haha

var fIn = function() {
	$('#currentcommandcursor').fadeIn(500, fOut);
};

//Hail function declrations!
var fOut = function() {
	$('#currentcommandcursor').fadeOut(500, fIn);
};

//Capture the current command
//
$(document).keypress(function(e) {
	if(e.which == 13) {
		$('#consoleoutput').val($('#consoleoutput').val() + "\n" + "~$" + $('#givencommand').val());

			var commandtobegiven = $('givencommand').va();
			$('#givencommand').val("");
			$('#consoleoutput').scrollTop($('#consoleoutput')[0].scrollHeight);
			if(commandtobegiven != "") {
				bunzKernel(commandtobegiven);
			}
	}
});

//setup kernel function.
//
function bunzKernel(kernelcmd) { //kernelcmd is kernel command
	
	var colorRegex = /color #.{6}/ //regExp for color

	if(kernelcmd = "help") {
		 $("#consoleoutput").val($("#consoleoutput").val() + "\n\n==============================================================\nHello, I'm the TerMight, your friendly neighborhood fake terminal. Here's a list of commands you can run :\n\n-> flush\n\tClears the bash screen\n-> redubs\n-> launch\n-> f+\n\tIncrease bash font-size\n-> f-\n\tDecrease bash font-size\n-> color #HEXCODE\n\tChanges the background of the terminal.");
        bunzKernel("scrollbottom");
    }
 if (kernelcmd == "f+") { //increment font size by 3
        $('#consoleoutput').css('font-size', (parseInt($('#consoleoutput').css('font-size')) + 3)); 
        $('#givencommand').css('font-size', (parseInt($('#consoleoutput').css('font-size')) + 3));
        $('body').css('font-size', (parseInt($('#consoleoutput').css('font-size')) + 3));
       
    }

	 //decrement font size by 
if (kernelcmd == "f-") {
        $('#consoleoutput').css('font-size', (parseInt($('#consoleoutput').css('font-size')) - 3));
        $('#givencommand').css('font-size', (parseInt($('#consoleoutput').css('font-size')) - 3));
        $('body').css('font-size', (parseInt($('#consoleoutput').css('font-size')) - 3));
        
    }
if (kernelcmd == "flush") {
	$('#consoleoutput').val("");
}

if(kernelcmd == "scrollbottom") {
	$('#consoleoutput').scrollTop($('#consoleoutput')[0].scrollHeight);
}

if(colorRegex.test(kernelcmd)) {
	var hexGiven = kernelcmd.split("#");
	 $('body').css("background", hexGiven[1]);
      $('html').css("background", hexGiven[1]);
      $('#consoleoutput').css("background", hexGiven[1]);
    }

}
});



