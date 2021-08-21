




setInterval(function(){
  var prevTime = new Date(2021,8,9,0,0); // time that I started the grow 
  var thisTime = new Date();              // now you sunova bitch
  var diff = (thisTime.getTime() - prevTime.getTime());
  diff = Math.round(diff / (1000*60*60*24)+32); //positive number of days.  no idea why the fuck I have to add 32???

   
  $(function(){
    //this is to get the data from the text file and process into a variable
    $.get("data4.txt", function( data ) {
      var payload = data; // can be a global variable too...
      var payloadArr = payload.split(','); //now I have all of the values in an array!
      console.log(payload);  // log to the console so I can monitor the incoming data
       //put the sun_javascript text here
  
       console.log("thisisworking");
       //now try and modify the DOM based on the payload values
      if ((payloadArr[2] > 0) && (payloadArr[2] <31) && (payloadArr[5][1]=="0")){

       }
	else {

	}
      
      if (payloadArr[5][1]=="1"){

	}
		else {
		} 
       if (payloadArr[5][1]=="1"){
	   console.log("light on");
       }
        
       if (payloadArr[5][1]=="0"){
	   console.log("light off");
       }
  
    });
});
}, 1000);
