// const { argv } = require('yargs');

const {argv} = require('./config/yargs')
const colors = require('colors');
const { crear, getListado, actualizar, eliminar } = require('./por-hacer/por-hacer')
let comando = argv._[0]


console.log(argv)

switch (comando ){

    case 'crear':
        crear(argv.d)
        console.log('Crear tarea')
        break;
    
    case 'actualizar':
        let resultado = actualizar(argv.d, argv.c)
        console.log(resultado)
        break;

    case 'borrar':
        let borrado = eliminar(argv.d)
        console.log(borrado)

    case 'listar':
        const listadoPorHacer = getListado(argv.c)
        for (let tarea of listadoPorHacer) {
            console.log('=========================')
            console.log(colors.blue(tarea.descripcion));
            console.log(`Estado: ${colors.green(tarea.completado)}`);
            console.log('==========================')    
        }
        break;

    default:
        console.log('Comando no Reconocido')
        break;
}


