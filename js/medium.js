;(function(){
	
	//put libraries in here 
	
	//who cares if they have been loaded before
	
	console.log("medium javascript file loaded");

	PubSub.subscribe("Enquire.MEDIUM_MATCH", function(){
		console.log("Match Medium");
	});

	PubSub.subscribe("Enquire.MEDIUM_UNMATCH", function(){
		console.log("Unmatch Medium");
	});
})();
