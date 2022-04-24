require('colors');

const Task = require("./task");

class Tasks{
    _list={};//pude ir o no solo se usa para ver clases

    constructor(){
        this._list={};
    }
     
    get listArr(){
        const list =[];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }

    loadTaskFromArray( tasks = [] ){
        tasks.forEach( task => {
            this._list[task.id] = task;
        });
    }

    createtask( desc = ''){
        const task = new Task(desc);
        this._list[task.id] = task
    }

    fullList(){
        console.log();
        this.listArr.forEach( (task,id) => {
            const idx = `${id +1}`
            const {desc, completedin} = task;
            const state = ( completedin )
                            ? 'Completado'.green
                            : 'Pendiente'.red;
            console.log(`${(idx + '.').yellow} ${desc} :: ${state}`);
        });
    }

    listCompletedPending(completed = true){
        console.log();
        let contador=0;
        this.listArr.forEach( task => {
            const {desc, completedin} = task;
            const state = ( completedin )
                            ? 'Completado'.green
                            : 'Pendiente'.red;
        if(completed){
            if(completedin){
                contador += 1;
                console.log(`${(contador+ '.').yellow} ${desc} :: ${completedin}`);
            }
        }
        else{
            if(!completedin){
                contador += 1;
                console.log(`${(contador + '.').yellow} ${desc} :: ${state}`);
            }
        }      
        });
    }

    deleteTask( id = ''){
        if(this._list[id])
        delete this._list[id];
    }
}

module.exports= Tasks;