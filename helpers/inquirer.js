const inquirer = require(`inquirer`);
require(`colors`);

const ask = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.bgRed} Crear una tarea`
            },
            {
                value: '2',
                name: `${'2.'.bgRed} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.bgRed} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.bgRed} Listar tareas pendientes`   
            },
            {
                value: '5',
                name: `${'5.'.bgRed} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'7.'.bgRed} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.bgRed} Salir`
            },
        ]
    }
]