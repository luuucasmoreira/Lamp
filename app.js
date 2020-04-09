const { Board, Led, Relay } = require("johnny-five"); //Chamando biblioteca para rodar os componentes do arduino
var firebase = require("firebase"); //conexão com o banco de dados.

const board = new Board(); 

board.on("ready", () => {
  
  const rele = new Relay(8); 
  const led = new Led(13);

  board.repl.inject({
    led,
    rele
  });

 
 //------Lendo a mudança do banco------
  
  var config = {
    apiKey: "AIzaSyDaltCU5hPZFEXNZreIQkQbKBS_-0Vqadg",
    authDomain: "iot-lamp-cd664.firebaseapp.com",
    databaseURL: "https://iot-lamp-cd664.firebaseio.com",
    storageBucket: "iot-lamp-cd664.appspot.com",
    
  };

  firebase.initializeApp(config);

  // vareaveu para buscar no banco a referencia do campo lampada o valor atribuido
  //e entao demontra o estado de on ou off

  var starCountRef = firebase.database().ref('lampada').on('value', function(snapshot) {
  
    let lampada = snapshot.val();

    if (lampada == 'on') {
        rele.on()
        
    } else {
        rele.off()
        
    }
    
});

});


