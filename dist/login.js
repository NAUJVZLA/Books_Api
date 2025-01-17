var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserController } from "./controllers/controller.users.js";
//declarando consts
const URL_USERS = "http://190.147.64.47:5155";
const form = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");
// const btnLogin = document.getElementById("btnLogin") as HTMLElement;
// //escuchando boton entrar para tirar alerta
// btnLogin.addEventListener("click", (e: Event) => {
//   Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Ingresa Datos!",
//     footer: '<a href="index.html">Why do I have this issue?</a>'
//   });
// })
//escucnando eventos del form
form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const crudusers = new UserController(URL_USERS);
    const respuesta = yield crudusers.login(email, password);
    const token = respuesta.data.token;
    if (token) {
        console.log(`REGISTRO EXITOSO USER: ${token}`),
            localStorage.setItem('token', token);
        window.location.href = "books.html";
    }
    else {
        console.log("error al ingresar");
    }
    form.reset();
}));
