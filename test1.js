$(function(){
    $("#test").click(function(){
        //var dev=JSON.stringify(options, null, 2)
      //  alert('Name: ' + dev.filters);
        // Do something with the device.
        let options = {

    optionalServices: ['c48e6067-5295-48d3-8d5c-0395f61792b1'],
    acceptAllDevices:true
  }

  navigator.bluetooth.requestDevice(options).then(function(device) {
    console.log('Name: ' + device.name);
    // Do something with the device.
  })
  .catch(function(error) {
    console.log("Something went wrong. " + error);
  });
  });
    });
