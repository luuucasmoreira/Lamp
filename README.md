# Lamp
Interruptor IoT - 

Primeiros passos 
Conectar o Arduino e carregar no programa official do arduino o :
Arquivo - Exemplos - Firmata - StandardFirmata

Necessarios para executar no pc
*Node.js instalado e atualizado
*Vscode = algumas dependencias do vscode é necessario
*Python = necessario declarar a variavel de ambiante do python no painel de controle - sistema - configuração avancaçadas do sistema -
variaveis de ambiente - no campo variaveis de ambiente, clica duas vezes na PATH, adiciona no final o caminho do python depois de 
ter instalado Parecido com "C:\Users\lucas\AppData\Local\Programs\Python\Python38-32" 

Dentro do VSCODE
assim que abrir a pasta aonde quer rodar (ou clone do gitrub) instale as dependencias
npm init
npm install johnny-five 
npm install firebase --save

Run
no terminal, execute o comando 
$ node app.js
se der tudo certo ele vai ficar rodando o node, para teste, pode ir no banco do firebase e trocar o resultado para on
a lampadava vai mudar seu status para ligado
para sair do programa é ctrl+c (x2)

Frontend
Instalando o http-server com
$npm install http-server -g
selecione a pasta web no terminal e rode
$npx http-server

sempre que for rodar o projeto
Run terminal
pasta rais rode
$node app.js 
para rodar o backend
selecione em outro terminal a pasta web
$http-server
para rodar o frontend
no browser entre como 
localhost:8080