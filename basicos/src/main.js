// selección de elementos del DOM
const appDiv = document.getElementById('app'); //se puede poner dolar delante, se refiere a elementos del DOM, es opcional

// appDiv.innerText = "Hola mundo" //Texto plano
// appDiv.innerHTML= "<h1>Hola Mundo</h1>" //Interpreta codigo HTML, susceptible a inyectar código

//Añadir y eliminar clases a un elemento del DOM
appDiv.classList.add('container','clase2');
appDiv.classList.remove('clase2');

//Seleccionar de ClassName
const items = document.getElementsByClassName('items');
//items.length // 5

let n = 0;

for(const i of items){
    //i.textContent=`Hola amigo ${++n}`;
    i.innerText = `Hola amigo ${++n}`;
}

//seleccion por clase
const saludoP = document.querySelector(".saludo");

const saludos = document.querySelectorAll(".saludo");

saludos.forEach((saludo,index)=>{
    saludo.innerText = `Hola mundo ${index}`;
})

//añadimos atributos a una etiqueta
//<img src="imagen.jpg" alt="imagen">

const miGit = document.getElementById("GitHub");
miGit.setAttribute("target","_blank");
miGit.innerText="Ir a mi GitHub"
miGit.textContent="Ir a mi GitHub"