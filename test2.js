$(function(){
    $("#test").click(function() {

        let options = {

      optionalServices: ['c48e6067-5295-48d3-8d5c-0395f61792b1'],
      acceptAllDevices:true
                      }
          navigator.bluetooth.requestDevice(options)
                  .then(function(device){
                                    device.gatt.connect().then(function(gattserveur){
                                    gattserveur.getPrimaryService("c48e6067-5295-48d3-8d5c-0395f61792b1").then(function(gattservice){
                                      gattservice.getCharacteristic("332f990e-8f0c-4ab8-8713-f51d63dd5910").then(function(gattcharacteristic)
                                        {
                                          gattcharacteristic.startNotifications().then(function(gattcharacteristic){
                                            gattcharacteristic.addEventListener("characteristicvaluechanged", function(event){
                                              var value= event.target.value.getUint8(0);
                                              $("notifiedValue").text("", +value);
                                              .catch(function(error){
                                                  console.log('Argh! ' + error);
                                              });
                                         });
                                });
                              });
                            });
                          });
                        });


        //var dev=JSON.stringify(options, null, 2)
      //  alert('Name: ' + dev.filters);
        // Do something with the device.
    });
});
