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
                name: `${'1.'.red} Crear una tarea`
            },
            {
                value: '2',
                name: `${'2.'.red} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.red} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.red} Listar tareas pendientes`   
            },
            {
                value: '5',
                name: `${'5.'.red} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.red} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.red} Salir`
            },
        ]
    }
];


const inquirerMenu= async() => {
    console.clear();
    console.log('~~~~~~~~~~~~~~~~~~~~~~'.brightRed);
    console.log(' Selecione una opcion'.blue);
    console.log('~~~~~~~~~~~~~~~~~~~~~~\n'.brightRed);

    const {option}= await inquirer.prompt(ask);

    return option;
}

const pause= async() =>{
    const question= [
        {
            type: 'input',
            name: 'enter',
            message:`Precione ${'Enter'.bgGreen} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

module.exports= {
     inquirerMenu,
     pause,
}
