const fs = require("fs");

function loadTasks(){
    if(!fs.existsSync(file_name)){
        fs.writeFileSync(file_name, '[]');
        return [];
    }
    let data = fs.readFileSync(file_name);
    try{
        return JSON.parse(data);
    }catch(e){
        console.log(`Error when trying to read file: ${e}`)
    }
    return data;
}

function saveTasks(tasks){
    fs.writeFileSync(file_name, JSON.stringify(tasks, null, 2))//Null is the replacer and 2 is the indent spacer for cleaner output
}

module.exports = { loadTasks, saveTasks };