import axios from "axios";
import _ from "lodash";

let listaId = [];
let idInfo = [];
let dataNews = [];
let idDaCaricare = [];
const nuoveNews = [];
let totaleNotizie = 0;
const colSinistra = document.getElementById("col-sinistra");
const colDestra = document.getElementById("col-destra");
const load = document.getElementById("load");
let btnLoad = document.getElementById("btnLoadMore");


function createCard(titolo, url, date, column){

        const card = document.createElement("div")
        card.className = "card text-center mb-3"
        card.style.width = "18rem"
        
        const description = document.createElement("a")
        description.className = "card-link"
        description.href = url;
        card.appendChild(description)

        const innerDiv = document.createElement("div")
        innerDiv.className = "card-body"
        description.appendChild(innerDiv)

        const title = document.createElement("h5")
        title.className = "card-title"
        title.appendChild(document.createTextNode(titolo))
        innerDiv.appendChild(title)

        const time = document.createElement("p")
        time.className = "card-text"
        time.appendChild(document.createTextNode(date.toLocaleDateString()))
        innerDiv.appendChild(time)

        column.appendChild(card);
        
    }


    function createDomElement(news){

        news.forEach((n, index) => {
        let titolo = n.title || "Titolo non disponibile";
        let url = n.url || "#";
        let date = new Date(n.time * 1000);
        const colonna = totaleNotizie % 2 === 0 ? colSinistra : colDestra;

        if (index < 5) {
        createCard(titolo, url, date, colonna);
        } else {
        createCard(titolo, url, date, colonna);
        }
        totaleNotizie ++;

        btnLoad.classList.replace("d-none", "d-block");
        load.classList.replace("d-block", "d-none");

        // console.log(totaleNotizie.value)
    });
    }


        function loader(load) {
        
        if(!load){
            console.log("Loader non disponibile");
        }

        btnLoad.classList.replace("d-block", "d-none");
        // console.warn("btnload off");

        load.classList.replace("d-none", "d-block");
        // console.warn("load on");
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
                    dataNews = response.data;

                    console.log(dataNews);
                    nuoveNews.push(dataNews);
                    idInfo.push(dataNews);

                    console.log(id);
                
            } 
        }catch{
            console.warn("Errore durante il caricamento della lista:", error);
        }
            createDomElement(nuoveNews);

    }


    // console.log(listaId);
    // console.log(idInfo);
   

   


btnLoad.addEventListener("click", () => {
    
    caricaDati();
    loader(load);
});

caricaDati();