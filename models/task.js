const { v4: uudiv4} = require('uuid');

class Task {
    id = '';
    desc=''; 
    completedin= null;
    
    constructor(desc){
        this.id=uudiv4();
        this.desc=desc;
        this.completedin=null;
    }
}

module.exports= Task;