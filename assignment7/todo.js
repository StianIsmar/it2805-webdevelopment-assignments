onload = () => {
  document.getElementById("toDoInput").focus();

  class Output {
    constructor(tasks) {
      this.numberOfTasks = tasks;
    }
    get getNumberOfTasks() {
      return this.numberOfTasks;
    }
    incrementTask(newTask) {
      this.numberOfTasks += 1;
      this.updateOutput();
    }
    completeTask(task) {
      this.numberOfTasks -= 1;
      this.updateOutput();
    }
    updateOutput() {
      document.getElementById("output").innerHTML = this.numberOfTasks;
    }
  }
  output = new Output(0);

  // Making sure the page isn't reloaded:
  document
    .getElementById("submitButton")
    .addEventListener("click", function(event) {
      event.preventDefault();
    });

  // For part 3:
  var tasks = [];

  // Function for having a line through the checked tasks:
  checkBox = elem => {
    if (elem.parentElement.style.textDecoration == "line-through") {
      elem.parentElement.style.textDecoration = "none";
    } else {
      elem.parentElement.style.textDecoration = "line-through";
      output.completeTask();
    }
  };

  addTask = () => {
    // The list element:
    var li = document.createElement("li");

    // The input from the user:
    var input = document.getElementById("toDoInput").value;
    var text = document.createTextNode(input);

    // The checkbox element
    var checkbox = document.createElement("input");
    var att = document.createAttribute("type");
    att.value = "checkbox";

    // Now, set the attribute to the input element:
    checkbox.setAttributeNode(att);

    // Create the attribute for the checked box-onclick

    var click = document.createAttribute("onClick");
    click.value = "checkBox(this)";
    checkbox.setAttributeNode(click);

    // Append input and text element to the list element
    li.appendChild(checkbox);
    li.appendChild(text);

    if (input == "") {
      alert("Write a new task!");
    } else {
      // Add the input to the to-do list
      document.getElementById("list").prepend(li);
    }
    // Clear the input now
    document.getElementById("toDoInput").value = "";

    // Part 3:
    // Date for timestamping:
    var dt = new Date();
    var utcDate = dt.toUTCString();
    // Task object:
    var task = { text: text, date: utcDate };
    tasks.push(task);
    // Prints the list of objects:
    console.log(tasks);

    output.incrementTask();
  };

  // 1 as an argument means one more task is added.
};
