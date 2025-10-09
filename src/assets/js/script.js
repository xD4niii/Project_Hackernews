

let listaId = [];
let idInfo = [];
const colSinistra = document.getElementById("col-sinistra");
const colDestra = document.getElementById("col-destra");
let btnLoad = document.getElementById("btnLoadMore")


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
        
async function caricaDati() {
    try {
        if (listaId.length === 0) {
            const response = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json");
            if (!response.ok) throw new Error("Errore " + response.status);
            listaId = await response.json();
            console.log(listaId)
        }

        const idDaCaricare = listaId.splice(0, 10);
        const nuoveNews = [];

        for (let id of idDaCaricare) {
            try {
                const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                if (!response.ok) throw new Error("Errore " + response.status);
                const data = await response.json();
                nuoveNews.push(data);
                idInfo.push(data);
            } catch (error) {
                console.error("Errore item:", error);
            }
            console.log(id)
        }

        nuoveNews.forEach((n, index) => {
        let titolo = n.title;
        let url = n.url;
        let date = new Date(n.time * 1000);

        if (index < 5) {
        createCard(titolo, url, date, colSinistra);
        } else {
        createCard(titolo, url, date, colDestra);
        }
    });

    } catch (error) {
        console.error("Errore generale:", error);
    }
    
    console.log(idInfo);
    console.log(listaId);
}

   
btnLoad.addEventListener("click", () => {

    caricaDati();

});

caricaDati();