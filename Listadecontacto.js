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


function buscarContacto(contacto) {
    const [nombre, apellido] = contacto.split(" ");
    
    const indiceContacto = listaDeContactos.findIndex(contactFilter => {
      return contactFilter.nombre === nombre && contactFilter.apellido === apellido;
    });
    
    return indiceContacto !== -1 ? indiceContacto : -1;
  }


  function borrarContacto(contacto) {
    const indice = buscarContacto(contacto);
    if (indice == -1){
        return listaDeContactos;
    }
    return listaDeContactos.splice(indice, 1);
}
/*Para Eliminar un contacto
borrarContacto("Andres Sarmiento");
console.log(listaDeContactos);*/



function actualizarContacto(contacto, datos) {
    const indice = buscarContacto(contacto);
    if (indice == -1){
        return listaDeContactos;
    }
    listaDeContactos[indice] = { ...listaDeContactos[indice], ...datos };
}


function imprimirContactos(){
    console.log("Lista de Contactos:"); 
     for (let i = 0; i < listaDeContactos.length; i++)
        console.log(listaDeContactos[i]);
}

//Imprimir la lista de contactos
//imprimirContactos(listaDeContactos);//