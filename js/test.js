
    function connect() {
        console.log('Requesting Bluetooth Device...');
        let options = {

    optionalServices: ['c48e6067-5295-48d3-8d5c-0395f61792b1'],
    acceptAllDevices:true
  }

  navigator.bluetooth.requestDevice(options)
            .then(device => {
                console.log('> Found ' + device.name);
                console.log('Connecting to GATT Server...');
                device.addEventListener('gattserverdisconnected', onDisconnected)
                return device.gatt.connect();
            })
            .then(server => {
                console.log('Getting Service 0xffe5 - Light control...');
                return server.getPrimaryService(0xffe5);
            })
            .then(service => {
                console.log('Getting Characteristic 0xffe9 - Light control...');
                return service.getCharacteristic(0xffe9);
            })
            .then(characteristic => {
                console.log('All ready!');
                ledCharacteristic = characteristic;
                onConnected();
            })
            .catch(error => {
                console.log('Argh! ' + error);
            });
    }
