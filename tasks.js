const { loadTasks, saveTasks } = require("./storage");

function listTasks(){
    let tasks = loadTasks();
    if(tasks.length == 0){
        console.log("Tasks Completed!")
    }
    tasks.forEach((task, index) => {
        const status = task.done ? "[Done]": "[Not Completed]"
        console.log(`${index + 1}. ${task.text} ${status}`)
    });

}

function addTask(taskText){
    tasks = loadTasks();
    const newTask = {text: taskText, done: false};
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task Added: ${taskText}`);
}

function markTaskAsDone(taskNumber){
    const tasks = loadTasks();
    if(taskNumber > tasks.length || taskNumber < 1 ){
        console.log("Task number does not exist")
    }else{
        tasks[taskNumber - 1].done = true;
        saveTasks(tasks)
        console.log(`${tasks[taskNumber - 1].text} is marked as done`);
    }
}

function sortTasksByCompletion(){
    const tasks = loadTasks();
    const sortedTasks =  tasks.sort((a,b) =>{// Sort compares a and b values, 1 pushes it after b and -1 pulls b up
        if (a.done == b.done) return 0; // Doesn't change order if they are both the same
        return a.done? 1:-1; // Shift tasks that are completed to the bottom, if it is done 1 would push it down while -1 would put it after b
    })
    console.log("Tasks sorted by completion");
    return sortedTasks;
}

function markTaskAsIncomplete(taskNumber){
    const tasks = loadTasks();
    if(taskNumber > tasks.length || taskNumber < 1 ){
        console.log("Task number does not exist")
    }else{
        tasks[taskNumber - 1].done = false;
        saveTasks(tasks)
        console.log(`${tasks[taskNumber - 1].text} is marked as Not Completed`);
    }
}

function deleteTask(taskNumber){
    const tasks = loadTasks();
    if(taskNumber > tasks.length || taskNumber < 1){
        console.log("Task number does not exist")
    }else{
        tasks.splice(taskNumber-1, 1);
        saveTasks(tasks);
        console.log(`Deleted task ${taskNumber}`);
    }
}

module.exports = { listTasks, addTask, deleteTask, sortTasksByCompletion, markTaskAsDone, markTaskAsIncomplete};