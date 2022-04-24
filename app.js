require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { readDB, saveDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

const main = async() => {
    let opt='';
    const tasks = new Tasks();
    const tasksDB = readDB();

    if(tasksDB){
      tasks.loadTaskFromArray(tasksDB);
    }

    do{ 
      opt= await inquirerMenu();//imprime el menu

      switch (opt) {
        case '1'://crear tarea
          const desc = await readInput('Descripciòn:')
          tasks.createtask(desc);
        break;

        case '2':
          tasks.fullList();
        break;

        case '3':
          tasks.listCompletedPending(true);
        break;
        
        case '4':
          tasks.listCompletedPending(false);
        break;
      }
      saveDB(tasks.listArr);
      await pause();
    }while(opt !== '7');
}

main();