let listaDeContactos = [];

function agregarContacto(nombre, apellido, telefono, ciudad, direccion ){
    const newContact = {
        id: listaDeContactos.length + 1,
        nombre,
        apellido,
        telefono,
        ubicaciones:{
            ciudad,
            direccion
        }
    }
    return listaDeContactos.push(newContact);
}

//Agregando contactos//
agregarContacto("Andres", "Sarmiento", 123456789, "San Gil", "Cr 9 # 20-20");
agregarContacto("Yulieth", "Blanco", 202014879, "Bucaramanga", "Calle 61 # 05-10")
agregarContacto("Jaiyelith", "Gonzalez", 105435681, "Bogota", "Tv 20 # 14-03")

//console.log(listaDeContactos);//


function borrarContacto(contacto){
    const datos = contacto.split("");
    const nombre = datos[0];
    const apellido = datos [1];
    for(let i = 0; i < listaDeContactos.length; i++){
        if(listaDeContactos[i].nombre === nombre && listaDeContactos[1].apellido === apellido){
            return listaDeContactos.splice(i, 1);
        }
    }
}
/*Para Eliminar un contacto
borrarContacto("Andres Sarmiento");
console.log(listaDeContactos);*/

function imprimirContactos(){
    console.log("Lista de Contactos:"); 
     for (let i = 0; i < listaDeContactos.length; i++)
        console.log(listaDeContactos[i]);
}

//Imprimir la lista de contactos
//imprimirContactos(listaDeContactos);//