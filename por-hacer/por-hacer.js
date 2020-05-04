const fs = require('fs');

let listadoPorHcer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHcer);
    fs.writeFile('database/data.json', data, (err) => {
        if (err) throw new Error("No se pudo guardar", err)
        else console.log("Se guardo la lista en archivo")
    });
    // fs.close()
}

const actualizar = (descripcion, completado) => {
    console.log(`${descripcion}, ${completado}`)
    cargarDB();
    const tarea = listadoPorHcer.find(data => data.descripcion === descripcion);
    console.log(tarea)
    if (tarea) {
        tarea.completado = completado;
        guardarDB()
        return true;
    }
    return false;

}

const eliminar = (descripcion) => {
    cargarDB();
    // let nuevo_listado = listadoPorHcer.filter( tarea => {
    //     return tarea.descripcion != descripcion;
    // })
    // if (nuevo_listado.length === listadoPorHcer.length){
    //     return false;
    // }
    const index = listadoPorHcer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index > 0) {
        listadoPorHcer.splice(index, 1);
        guardarDB();
        return true;
    }
    return false;

}
const cargarDB = () => {
    try { //En caso que el json este vacio, evitamos el error
        listadoPorHcer = require('../database/data.json');
        console.log(listadoPorHcer)
    } catch (err) {
        listadoPorHcer = []
    }
}

const getListado = (completado) => {
    cargarDB();
    if (completado === true) {
        let nuevo_listado = listadoPorHcer.filter(tarea => tarea.completado)
        return nuevo_listado;
    }
    else{
        return listadoPorHcer;
    }
}
const crear = (descripcion) => {
    let porHacer = {
        descripcion, //descripcion: descripcion
        completado: false
    }
    cargarDB();
    listadoPorHcer.push(porHacer);
    console.log(listadoPorHcer);
    guardarDB()
    return porHacer;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}