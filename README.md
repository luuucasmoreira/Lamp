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

Run
no terminal, execute o comando 
$ node app.js
se der tudo certo ele vai ficar rodando o node, para teste, pode ir no banco do firebase e trocar o resultado para on
a lampadava vai mudar seu status para ligado
para sair do programa é ctrl+c (x2)
