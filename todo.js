const command = process.argv[2];
const args = process.argv.slice(3); // Removes first 3 inputs
file_name = 'tasks.json';
const { listTasks, addTask, markTaskAsDone, markTaskAsIncomplete, deleteTask, sortTasksByCompletion } = require("./tasks.js");

switch(command){
    case "add":
        const taskText = args.join(" ");
        if (taskText){
            addTask(taskText);
        } else{
            console.log("Please provide a task.");
        }
        break;
    case "list":
        listTasks();
        break;
    case "done":
        markTaskAsDone(parseInt(args[0]));
        break;
    case "undone":
        markTaskAsIncomplete(parseInt(args[0]));
        break;  
    case "sort":
        sortTasksByCompletion();
        break;
    case "delete":
        deleteTask(parseInt(args[0]));
        break;
    default:
        console.log("Unknown command");
}
