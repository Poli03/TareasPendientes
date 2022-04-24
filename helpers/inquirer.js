require(`colors`);
const inquirer = require(`inquirer`);
const Tasks = require("../models/tasks");

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
                value: '7',
                name: `${'7.'.red} Salir`
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

const readInput = async(message) =>{
    const question=[
     {
        type: 'input',
        name: 'desc',
        message,
        validate( value ){
            if(value.length === 0){
                return 'Debe ingresar un valor';
            }
            return true;
        }
     }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listDeleteTasks = async( tasks = []) => {
    const choices = tasks.map( (task, i) =>{
        const idx = `${i + 1}`.yellow;
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.yellow + 'Cancelar'
    });

    const asks = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(asks);
    return id;
}

const confirm = async(message) => {
    const question =[
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt(question);
    return ok;
}

const showListChecklist = async( tasks = []) => {
    const choices = tasks.map( (task, i) =>{
        const idx = `${i + 1}`.yellow;
        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: (task.completedin) ? true : false
        }
    });

    const asks = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(asks);
    return ids;
}

module.exports= {
     inquirerMenu,
     pause,
     readInput,
     listDeleteTasks,
     confirm,
     showListChecklist
}
