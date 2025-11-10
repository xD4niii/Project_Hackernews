import axios from "axios";
import _ from "lodash";

let listaId = [];
let idInfo = [];
let idDaCaricare = [];
const nuoveNews = [];
let totaleNotizie = 0;
const colSinistra = document.getElementById("col-sinistra");
const colDestra = document.getElementById("col-destra");
const load = document.getElementById("load");
let btnLoad = document.getElementById("btnLoadMore");


    function createDomElement(news){

        news.forEach((n) => {
        let titolo = n.title || "Titolo non disponibile";
        let url = n.url || "#";
        let date = new Date(n.time * 1000);
        const colonna = totaleNotizie % 2 === 0 ? colSinistra : colDestra;

        createCard(titolo, url, date, colonna);
        totaleNotizie ++;
        
    });
    }


        function createElement(tag, {className, text, href, parent} = {}){
            const e = document.createElement(tag);

            if(className) e.className = className;
            if(text) e.appendChild(document.createTextNode(text));
            if(href) e.href = href;
            if(parent) parent.appendChild(e);

            return e;
        }

        
        function createCard(titolo, url, date, column){
            const card = createElement("div", {className: "card text-center mb-3", parent: column});
            card.style.width = "18rem";

            const description = createElement("a", {className:"card-link", href: url, parent: card});
            const innerDiv = createElement("div", {className:"card-body", parent: description});

            createElement("h5", {className:"card-title", text: titolo, parent: innerDiv});
            createElement("p", {className:"card-text", text: date.toLocaleDateString(), parent: innerDiv});
        }



        function loaderOn() {

            btnLoad.classList.replace("d-block", "d-none");

            load.classList.replace("d-none", "d-block");

    }

        function loaderOff() {

            load.classList.replace("d-block", "d-none");

            btnLoad.classList.replace("d-none", "d-block");

        }
        
async function caricaDati() {
    try {
        if (listaId.length === 0) {
            const initResponse = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");
            listaId = initResponse.data;
            }
                
            console.log(listaId)        

        idDaCaricare = _.take(listaId, 10);
        listaId = _.drop(listaId,10);

        for (let id of idDaCaricare) {
            
                let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                    const dataNews = response.data;

                    console.log(dataNews);
                    nuoveNews.push(dataNews);
                    idInfo.push(dataNews);

                    console.log(id);
                
            } 
            createDomElement(nuoveNews);
            console.log("Caricamento completato!🫡");
        }catch(error){
            console.warn("Errore durante il caricamento della lista:", error);
        }finally{
            loaderOff();
        }
            

    }


    // console.log(listaId);
    // console.log(idInfo);
   

   


btnLoad.addEventListener("click", () => {
    
    caricaDati();
    loaderOn();
});

caricaDati();