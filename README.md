# Project-Pilot
## Para executar o projeto com  o docker 
Dentro da pasta do projeto, pelo terminal rode o comando:
> docker-compose up

Em seguida no seu navegador adicionde a seguinte URL
>http://0.0.0.0:19002

Mude a opção `LAN` para `Tunnel` 
![Captura de tela de 2022-05-12 15-35-07](https://user-images.githubusercontent.com/59034787/168146073-43e4d808-46ed-43d0-97d7-a8937cbf2f88.png)

## Quase pronto...
Agora se você preferir rodar o seu app no seu dispositivo real, basta ler o QRCode. 
Mas se você prefere utilizar o emulador copie o link `exp://fp-36h.anonymous.app.exp.direct:X` da sua dev tools e cole na URL do expo no seu emulador

## Para rodar o backend
Primeiro na pasta do projeto mude para a branch `develop` ,em seguida entre na pasta `backend`. Com terminal aberto, (lembrado que para usuarios do Windows é necessario abir o terminal do WLS), digite o seguinte comando:
> sudo docker-compose run --rm app django-admin startproject core .

Após esse comando, adicione:
>sudo docker-compose build

Em seguida:
>sudo docker-compose up

Depois acesse a seguinte URL:<br>
Essa url é para trazer todas a noticias
>http:0.0.0.0:8000/news/ 
    
Busca uma notcia de acordo com o titulo,país entre outros, para mais detalhes acessar:https://newsapi.org/docs/endpoints/everything
>http:0.0.0.0:8000/news/search/<tipo_de_notcia_a_ser_buscada>/  

Busca um noticia de acordo com o editor, para mais detalhes: https://newsapi.org/docs/endpoints/sources 
>http:0.0.0.0:8000/news/search/editors/<tipo_de_categoria>/< language >/<país>/  
