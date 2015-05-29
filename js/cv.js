$(document).ready(function(){
	
	function showProgress(b, a) {
		var line = new ProgressBar.Line(b, {color: 'rgba(0,0,0,0.5)'});
		line.animate(a);
	}//end function

	showProgress("#php", 0.5);
	showProgress("#asp", 0.8);
	showProgress("#vb", 0.6);
	showProgress("#ff", 0.6);
	showProgress("#vba", 0.8);
	showProgress("#csharp", 0.7);
	showProgress("#rwd", 0.9);
	showProgress("#cplusplus", 0.7);
	showProgress("#pdo", 0.5);
	showProgress("#xhtml", 1.0);
	showProgress("#xml", 1.0);
	showProgress("#ado", 0.5);
	showProgress("#java", 0.7);
	showProgress("#js", 0.7);
	showProgress("#css", 0.9);
	showProgress("#sql", 0.8);
	showProgress("#mysql", 0.8);
	showProgress("#objc", 0.5);
	showProgress("#mvc", 0.5);
	showProgress("#tb", 0.8);
	showProgress("#json", 0.7);
});