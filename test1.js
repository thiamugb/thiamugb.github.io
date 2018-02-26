$(document).ready(function(){
  var options = {

optionalServices: ['c48e6067-5295-48d3-8d5c-0395f61792b1'],
acceptAllDevices:true
                }
    $("#test").click(() => {
        //var dev=JSON.stringify(options, null, 2)
      //  alert('Name: ' + dev.filters);
        // Do something with the device.
        alert("Bonjour thiam");
  navigator.bluetooth.requestDevice(options).then(device => {
    device.gatt.connect().then(gattserveur =>{
    gattserveur.getPrimaryService("c48e6067-5295-48d3-8d5c-0395f61792b1").then(gattservice =>{
      gattservice.getCharacteristic("332f990e-8f0c-4ab8-8713-f51d63dd5910").then(gattcharacteristic =>
        {
          gattcharacteristic.startNotifications().then(gattcharacteristic =>{
            gattcharacteristic.addEventListener("characteristicvaluechanged", event =>{
              var value= event.target.value.getUint8(0);
              $("notifiedValue").text("", +value);
         });
    });
    });
    });
    });
    });
  });
  });
  
