var initialState = {
    usuarioActivo:"mati",
    usuarios:[ {email:"mati", pass:"mati", name:"mati", lastname:"mati", compras:[{id:"producto-12", name:"doce", description:"lorem", price:100, imgUrl: "32021-O.webp"}, {id:"producto-12", name:"doce", description:"lorem", price:100, imgUrl: "32021-O.webp"} ] },
    {email:"aux", pass:"aux", name:"aux", lastname:"aux", compras:[{id:"producto-12", name:"doce", description:"lorem", price:100, imgUrl: "32021-O.webp"}] }]
};
//Estructura producto {name:"", description:"", price:0, imgUrl: ""}
const dataProductos = [{id:"producto-1", name:"uno", description:"lorem", price:100, imgUrl: "https://http2.mlstatic.com/D_NQ_NP_764246-MLA45232947570_032021-O.webp"},
                    {id:"producto-2", name:"dos", description:"lorem", price:100, imgUrl: "https://http2.mlstatic.com/D_NQ_NP_764246-MLA45232947570_032021-O.webp"},
                    {id:"producto-3", name:"dos", description:"lorem", price:100, imgUrl: "https://http2.mlstatic.com/D_NQ_NP_764246-MLA45232947570_032021-O.webp"},
                    {id:"producto-4", name:"dos", description:"lorem", price:100, imgUrl: "https://http2.mlstatic.com/D_NQ_NP_764246-MLA45232947570_032021-O.webp"},
                    {id:"producto-5", name:"dos", description:"lorem", price:100, imgUrl: "https://http2.mlstatic.com/D_NQ_NP_764246-MLA45232947570_032021-O.webp"}

]
//Falta agregar por cantidad, solo se esta agregando el objeto Producto a la lista de Compras. Y faltan validaciones para que no se puedan agregar los mismos usuarios.

//Funcion que maneja la bolsa global
function reducer(state = initialState, action){

    switch(action.type){

        case "CREAR_USUARIO":
            return crearUsuario(state, action);

        case "LOGIN":
            return login(state,action);    
                
        case "AGREGAR_CARRITO":
            return agregarCarrito(state,action);
        default:
            return state;
    }


}
//Crear el store
let store = Redux.createStore(reducer);

//Response Crear Usuario
function componentUsuarios() {

    let users = store.getState().usuarios;
    let userVista = users.map(user => { return {usuario:user.name, password:user.pass};});
    document.getElementById("response").innerHTML = JSON.stringify(userVista);
}

//Response Login
function componentLogin() {
 
    document.getElementById("userActivo").innerHTML = store.getState().usuarioActivo;
    document.getElementById("userCarrito").innerHTML = store.getState().usuarioActivo.toString();

    let userInfo = store.getState().usuarios.filter(user => user.email === store.getState().usuarioActivo)[0];
    document.getElementById("cantProductos").innerHTML = userInfo.compras.length;
}

//Response Agregar Producto

function componentProductos(){

    let listaCarrito = document.getElementById("listaCarrito");

    let user = store.getState().usuarios.filter(user => user.email === store.getState().usuarioActivo)[0]; 
    let carrito = user.compras;
    let lengthCompras = carrito.length;
    let ul = document.createElement('ul');
    for(let i = 0; i < lengthCompras; i++){
        let li = document.createElement('li');
        li.innerHTML = carrito[i].id;
        ul.appendChild(li);
    }
    listaCarrito.innerHTML = ul.outerHTML;

    //Falta hacer que la lista se actualice 

}

//Se conecta con los componentes que va a escuchar el estado
store.subscribe(componentUsuarios);
store.subscribe(componentLogin);
store.subscribe(componentProductos);

//Accion del Reducer

function crearUsuario(state, action){
    
    let{email, pass, name, lastname} = action.payload;
    return{
        ...state,
        usuarios:[...state.usuarios, {email:email, pass:pass, name:name, lastname:lastname, compras:[]}]
    }

}

function login(state,action){

    let{email, pass} = action.payload;

    return (state.usuarios.filter(elm => elm.email === email && elm.pass === pass).length > 0)
    ?{...state,usuarioActivo:email}
    :{...state};
    
}

function agregarCarrito(state, action){

    return{
        ...state,
        usuarios:[...state.usuarios.map(user => {
            if(user.email === state.usuarioActivo){

                console.log(user.compras);
                user.compras.push(action.payload.producto[0]);//Si no funciona, desestructurar
    
            }

            return {...user};
        })]
    }

}

//Agrego Acciones al Html

    //Crear Usuario
document.getElementById("crear").addEventListener("click", () => {
    store.dispatch(accionCrearUsuario());
});

    //Login
document.getElementById("login").addEventListener("click",() => {
    store.dispatch(accionLogin());
});

    //Agregar Producto
let cartasHtml = document.getElementsByClassName("card");
let lengthCards = cartasHtml.length;
for(let i = 0; i < lengthCards; i++){

    cartasHtml[i].addEventListener("click", () => {
        console.log("Toque una card");
        console.log(cartasHtml[i].id);
        store.dispatch(accionAgregarCarrito(dataProductos.filter(elm => elm.id === cartasHtml[i].id)));
    });

}
/* document.getElementsByClassName("card").addEventListener("click", ()=> {
    console.log("Toque una card");
});  */




//

//Accion del Componente---------


//Crear Usuario ---------------------------------------------------------------------//

//Obtengo los inputs del DOM

let inputEmail = document.getElementById("email");
let inputPass = document.getElementById("pass")
let inputName = document.getElementById("name");
let inputLasName = document.getElementById("lastname");


function accionCrearUsuario() {
    return {
    type: "CREAR_USUARIO",
    payload:{
        email: inputEmail.value, 
        pass: inputPass.value,
        name: inputName.value,
        lastname: inputLasName.value
    }
    };
}

// --------------------------------------------------------------------- //

//Login ---------------------------------------------------------------------//

let inputLoginEmail = document.getElementById("emailLogin");
let inputLoginPass = document.getElementById("passLogin");

function accionLogin(){
    return{
        type: "LOGIN",
        payload:{
            email: inputLoginEmail.value,
            pass: inputLoginPass.value
        }
    }
}

//--------------------------------------------------------------------- //

//Agregar al Carrito ---------------------------------------------------------------------//

function accionAgregarCarrito(producto){
    return{
        type: "AGREGAR_CARRITO",
        payload:{
            producto:producto
        }
    }
}