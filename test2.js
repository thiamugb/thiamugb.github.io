$(function(){
    $("#test").click(function() {

        let options = {

      optionalServices: ['c48e6067-5295-48d3-8d5c-0395f61792b1'],
      acceptAllDevices:true
                      }
                      navigator.bluetooth.requestDevice(options)
                                .then(function(device){
                                    console.log('> Found ' + device.name);

        //var dev=JSON.stringify(options, null, 2)
      //  alert('Name: ' + dev.filters);
        // Do something with the device.
    });
  });
});
