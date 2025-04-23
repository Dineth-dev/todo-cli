const command = process.argv[2];
const args = process.argv.slice(3); // Removes first 3 inputs
file_name = 'tasks.json';
const { listTasks, addTask, markTaskAsDone, markTaskAsIncomplete, deleteTask, sortTasksByCompletion } = require("./tasks.js");

// if(command == 'list'){
//     listTasks();
// }
// else if(command == 'add'){
//     taskText = args.join(" ");// Adds a space between each argument before joining it all into one
//     if(taskText){
//         addTask(taskText);
//     }else{
//         console.log("Please provide a task description")
//     }
// }else if(command == 'done'){
//     taskNumber = parseInt(args[0]);
//     if(isNaN(taskNumber) || taskNumber < 1){
//         console.log('Please enter a valid task number');
//     }else{
//         markTaskAsDone(taskNumber);
//     }
// }
// else if(command == 'undone'){
//     taskNumber = parseInt(args[0]);
//     if(isNaN(taskNumber) || taskNumber < 1){
//         console.log('Please enter a valid task number');
//     }else{
//         markTaskAsIncomplete(taskNumber);
//     }
// }else if(command == 'delete'){
//     taskNumber = parseInt(args[0]);
//     if(isNaN(taskNumber) || taskNumber < 1){
//         console.log('Please enter a valid task number');
//     }else{
//         deleteTask(taskNumber);
//     }
// }else if(command == 'sort'){
//     const sortedTasks = sortTasksByCompletion();
//     console.log("Sorted Tasks: ");
//     sortedTasks.forEach((task,index) => {
//         const status = task.done ? "[Done]" : "[Not Completed]";
//         console.log(`${index + 1}. ${task.text} ${status}`);
//     });
// }

// else{
//     console.log("Unknown command");
// }

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
    default:
        console.log("Unknown command");
}
