// console.log('prova');

/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

// -----------------------------------

let app = new Vue (
    {
        el: "#container",
        data: {
            message: "Hi tutor!",
            image: "https://picsum.photos/700/400/"
        }
    }
);