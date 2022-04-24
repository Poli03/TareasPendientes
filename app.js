require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async() => {
    let opt='';
    const tasks = new Tasks();

    do{ 
      opt= await inquirerMenu();//imprime el menu

      switch (opt) {
        case '1':
          const desc = await readInput('Descripciòn:')
          tasks.createtask(desc);
        break;

        case '2':
          console.log(tasks.listArr)
        break;
      }

      await pause();
    }while(opt !== '7');
}

main();