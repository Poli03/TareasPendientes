require('colors');

const { inquirerMenu, pause, readInput, listDeleteTasks, confirm, showListChecklist } = require('./helpers/inquirer');
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

        case '5'://completado/pendiente
          const ids = await showListChecklist(tasks.listArr);
          tasks.toggleCompleted(ids);
        break;

        case '6'://borrar
          const id = await listDeleteTasks(tasks.listArr);
          if( id !== '0' ){
            const ok = await confirm('Esta seguro?');
          if(ok){
            tasks.deleteTask(id);
            console.log('Tarea Borrada');
          }
          }
        break;
      }
      saveDB(tasks.listArr);
      await pause();
    }while(opt !== '7');
}

main();