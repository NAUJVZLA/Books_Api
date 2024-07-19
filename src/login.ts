import {UserController} from "./controllers/controller.users.js";
    const URL_USERS : string = "http://190.147.64.47:5155"

    const form = document.querySelector('form') as HTMLFormElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;


    form.addEventListener("submit",async (e:Event) =>{
        e.preventDefault();
        const crudusers = new UserController(URL_USERS);
        const respuesta = await crudusers.login(email,password);

        const token : string | null = respuesta.data.token;

        if (token){
            localStorage.setItem('token',token);
            window.location.href="books.html";
        }else{
            console.log('error al ingresar');
        }
        form.reset();

    })