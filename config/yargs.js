const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'El nombre de la tarea'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada una tarea'
}
const opts_crear = {
    descripcion
}
const opts_actualizar = {
    descripcion,
    completado
}
const  argv  = require('yargs')
                .command('crear', 'Crea una tarea', opts_crear)
                .command('listar', 'Lista todas las tareas',{completado} )
                .command('actualizar', 'Actualiza una tarea',opts_actualizar)
                .command('borrar', 'Borrar una tarea', opts_crear)
                .help()
                .argv

module.exports = {
    argv,
}
