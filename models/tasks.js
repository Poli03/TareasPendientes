const Task = require("./task");


class Tasks{
    _listado={};

    constructor(){
        this._listado={};
    }
     
    get listArr(){
        const list =[];
        Object.keys(this._listado).forEach( key => {
            const task = this._listado[key];
            list.push(task);
        });
        return list;
    }

    createtask( desc = ''){
        const task = new Task(desc);
        this._listado[task.id] = task
    }
}

module.exports= Tasks;