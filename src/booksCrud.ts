import { CardTemplateController } from "./controllers/cardTemplate.controller.js";
import { booksController } from "./controllers/books.controllers.js";

const URL_BOOKS: string = "http://190.147.64.47:5155/api/v1";
const BtnLogout = document.getElementById("btnLogout") as HTMLBodyElement;

const PrePage = document.getElementById("prev-page") as HTMLButtonElement;


const NextPage = document.getElementById("next-page") as HTMLButtonElement;

const token = localStorage.getItem("token");

let currentPage: number = 1;

const Limit: number = 10;

BtnLogout.addEventListener("click", (ev: Event) => {
    localStorage.removeItem("token");
    window.location.href = "index.html";
})
if (!token) {
    alert("authentication token is required")
    window.location.href = "index.html";
} else {
    const containerBooks = document.querySelector(".container-books") as HTMLDivElement;

    const form = document.querySelector("form") as HTMLFormElement;
    const title = document.getElementById("title") as HTMLInputElement;
    const author = document.getElementById("author") as HTMLInputElement;
    const description = document.getElementById("description") as HTMLInputElement;
    const summary = document.getElementById("summary") as HTMLInputElement;
    const publicationDate = document.getElementById("publication-Date") as HTMLInputElement;

    let idcatche: undefined | string;
    const cardTemplate = new CardTemplateController(containerBooks)



    async function allbooks (limit: number,currentPage: number){

        const crudBooks = new booksController(URL_BOOKS);
        try{
                const response = await crudBooks.allBooks(token as string , limit, currentPage);
                console.log(`respuesta de allbooks: ${response}`)
            const books = response.data;
            containerBooks.innerHTML = '';


            for(const book of books){
                cardTemplate.render(book.id,book.title,book.author,book.description,book.summary,book.publicationDate);
            

            }




                    }catch(error){
            console.error("Error PIDIENDO LIBROS",error);

        }
}


allbooks(Limit,currentPage);

}