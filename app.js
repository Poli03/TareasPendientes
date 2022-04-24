require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async() => {
    let opt='';
    const tasks = new Tasks();

    do{ //imprime el menu
      opt= await inquirerMenu();

      switch (opt) {
        case '1':
          const desc = await readInput('Descripciòn:')
          tasks.createtask(desc);
        break;

        case '2':
          console.log(tasks._listado)
        break;
      }

      await pause();
    }while(opt !== '0');
}
main();




