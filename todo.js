const command = process.argv[2];
const args = process.argv.slice(3); // Removes first 3 inputs
const { loadTasks, saveTasks } = require("./storage");
file_name = 'tasks.json';

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

if(command == 'list'){
    listTasks();
}
else if(command == 'add'){
    taskText = args.join(" ");// Adds a space between each argument before joining it all into one
    if(taskText){
        addTask(taskText);
    }else{
        console.log("Please provide a task description")
    }
}else if(command == 'done'){
    taskNumber = parseInt(args[0]);
    if(isNaN(taskNumber) || taskNumber < 1){
        console.log('Please enter a valid task number');
    }else{
        markTaskAsDone(taskNumber);
    }
}
else if(command == 'undone'){
    taskNumber = parseInt(args[0]);
    if(isNaN(taskNumber) || taskNumber < 1){
        console.log('Please enter a valid task number');
    }else{
        markTaskAsIncomplete(taskNumber);
    }
}else if(command == 'delete'){
    taskNumber = parseInt(args[0]);
    if(isNaN(taskNumber) || taskNumber < 1){
        console.log('Please enter a valid task number');
    }else{
        deleteTask(taskNumber);
    }
}else if(command == 'sort'){
    const sortedTasks = sortTasksByCompletion();
    console.log("Sorted Tasks: ");
    sortedTasks.forEach((task,index) => {
        const status = task.done ? "[Done]" : "[Not Completed]";
        console.log(`${index + 1}. ${task.text} ${status}`);
    });
}

else{
    console.log("Unknown command");
}
