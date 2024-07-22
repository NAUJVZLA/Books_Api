import { UserController } from "./controllers/controller.users.js";
//declarando consts
const URL_USERS: string = "http://190.147.64.47:5155";
const form = document.getElementById("formLogin") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
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
form.addEventListener("submit", async (e: Event) => {
  e.preventDefault();
  const crudusers = new UserController(URL_USERS);
  const respuesta = await crudusers.login(email, password);

  const token: string | null = respuesta.data.token;


  if (token) {
    console.log(`REGISTRO EXITOSO USER: ${token}`),
      localStorage.setItem('token', token);
    window.location.href = "books.html";

  } else {
    console.log("error al ingresar");
  }
  form.reset();

});

