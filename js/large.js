var libsdir = 'libs/large';

loadScript(libsdir + 'renderfarm.js', 'large');


console.log("large javascript file loaded");

PubSub.subscribe("Enquire.LARGE_MATCH", function(){
	console.log("Match large");
});

PubSub.subscribe("Enquire.LARGE_UNMATCH", function(){
	console.log("Unmatch large");
});
