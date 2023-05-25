let listaDeContactos = ["Andres Sarmiento","Yulieth Blanco","Jaiyelith Gonzalez","Pedro Perez","Julian Casablanca"];

function agregarContacto(nombre){
return listaDeContactos.push(nombre);
}
//Para agregar un contacto//
/*agregarContacto("Victor Leon");
console.log(listaDeContactos);*/

function borrarContacto(nombre){
    for(let i = 0; i < listaDeContactos.length; i++){
        if(listaDeContactos[i] == nombre){
            return listaDeContactos.splice(i, 1);
        }
    }
}
//Para Eliminar un contacto//
/*borrarContacto("Julian Casablanca");
console.log(listaDeContactos);*/

function imprimirContactos(){
    console.log("Lista de Contactos:"); 
     for (let i = 0; i < listaDeContactos.length; i++)
        console.log(listaDeContactos[i]);
}

//Imprimir la lista de contactos//
imprimirContactos(listaDeContactos);