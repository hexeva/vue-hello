Vue.config.devtools = true;

// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({

    el: '#root',
    data:{
        titleText:'Ciao io sono un corvo',
        documentImg:'https://th.bing.com/th/id/R.7dede6593e6f550e34cfcd6814235d9d?rik=yCoDl1Por74a4Q&pid=ImgRaw&r=0',
        titleClass:'violet'
    },
    method:{}


});