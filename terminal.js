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

