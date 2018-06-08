$( function() {
    $( ".accordion" ).accordion({
    	collapsible: true,
    	active: false,
    	heightStyle: "content"
	});
} );

function hiddenAll(){
	var ids = ["#edHidden","#lanHidden","#peHidden","#abmeHidden"]
	for (var i=0; i < ids.length; i++){
		$(ids[i]).attr("hidden","hidden");
	}
}

function changeVisibility(idShow){
	console.log(idShow)
	switch (idShow){
	case "#edHidden":
		hiddenAll();
		$("#edHidden").removeAttr('hidden');
		break;
	case "#lanHidden":
		hiddenAll();
		$("#lanHidden").removeAttr("hidden");
		break;
	case "#peHidden":
		hiddenAll();
		$("#peHidden").removeAttr("hidden");
		break;
	case "#abmeHidden":
		hiddenAll();
		$("#abmeHidden").removeAttr("hidden");
		break;
	default:
		hiddenAll();
	}
}

function changeVisibleDiv() {
	$("#edClick").click(function() {
  		changeVisibility("#edHidden")
	});

	$("#lanClick").click(function() {
  		changeVisibility("#lanHidden")
	});	

	$("#peClick").click(function() {
  		changeVisibility("#peHidden")
	});	

	$("#abmeClick").click(function() {
  		changeVisibility("#abmeHidden")
	});

	$("#cvClick").click(function() {
  		changeVisibility("")
	});	
};

window.onload = function(){
	changeVisibleDiv()
};