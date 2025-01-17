var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class booksController {
    constructor(domain) {
        this.domain = domain;
    }
    //petiion get para pedir los libros 
    allBooks(token, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                "accept": "*/*",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const requestOptions = {
                method: "GET",
                headers: headers,
            };
            const response = yield fetch(`${this.domain}/api/v1/books?limit= ${limit}&page= ${page}`, requestOptions);
            console.log(response);
            if (!response.ok) {
                throw new Error(`Error al obtener libros:${response.status}:${response.statusText}`);
            }
            const responseBodyGetAllBooks = yield response.json();
            return responseBodyGetAllBooks;
        });
    }
    create(title, author, description, summary, publicationDate, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = {
                title: title.value,
                author: author.value,
                description: description.value,
                summary: summary.value,
                publicationDate: publicationDate.value
            };
            const headers = {
                "accept": "*/*",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const requestOpcion = {
                method: "POST",
                headers: headers,
                body: JSON.stringify(newBook)
            };
            const response = yield fetch(`${this.domain}/api/v1/books`, requestOpcion);
            if (!response.ok) {
                // console.log(`responde body error: ${(await response.json()).message}`);
                throw new Error(`error de captura de libros : ${response.status}:${response.statusText}`);
            }
            const responseBodyCreateBook = yield response.json();
            return responseBodyCreateBook;
        });
    }
    GetById(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                "accept": "*/*",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const requestOptions = {
                method: "GET",
                headers: headers,
            };
            const response = yield fetch(`${this.domain}/api/v1/books/${id}`, requestOptions);
            if (!response.ok) {
                throw new Error(`Error al obtener libros :${response.status}:${response.statusText}`);
            }
            const responseBodyGetById = yield response.json();
            return responseBodyGetById;
        });
    }
    update(idcatche, title, author, description, summary, publicationDate, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedBook = {
                title: title.value,
                author: author.value,
                description: description.value,
                summary: summary.value,
                publicationDate: publicationDate.value
            };
            const headers = {
                "accept": "*/*",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const requestOptions = {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify(updatedBook)
            };
            const response = yield fetch(`${this.domain}/api/v1/books/${idcatche}`, requestOptions);
            if (!response.ok) {
                throw new Error(`Error al obtener libros : ${response.status}:${response.statusText}`);
            }
            const responseBodyUpdateBooks = yield response.json();
            return responseBodyUpdateBooks;
        });
    }
    //borrando libros 
    delete(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                "accept": "*/*",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const requestOptions = {
                method: "DELETE",
                headers: headers,
            };
            const response = yield fetch(`${this.domain}/api/v1/books/${id}`, requestOptions);
            if (!response.ok) {
                throw new Error(`Error al obtener libros : ${response.status}:${response.statusText}`);
            }
            const responseBodyDeleteBooks = yield response.json();
            return responseBodyDeleteBooks;
        });
    }
}
