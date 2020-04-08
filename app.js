const { Board, Led, Relay } = require("johnny-five");
var firebase = require("firebase");

const board = new Board();

board.on("ready", () => {
  
  const rele = new Relay(8); 

  board.repl.inject({
    
    rele
  });

 
  var config = {
    apiKey: "AIzaSyDaltCU5hPZFEXNZreIQkQbKBS_-0Vqadg",
    authDomain: "iot-lamp-cd664.firebaseapp.com",
    databaseURL: "https://iot-lamp-cd664.firebaseio.com",
    storageBucket: "iot-lamp-cd664.appspot.com",
    
  };

  firebase.initializeApp(config);

  

  var starCountRef = firebase.database().ref('lampada').on('value', function(snapshot) {
  
    let lampada = snapshot.val();

    if (lampada == 'on') {
        rele.on()
    } else {
        rele.off()
    }
    
});

});


