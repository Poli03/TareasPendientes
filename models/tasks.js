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
}

module.exports= Tasks;