onload = () => {
  document.getElementById("toDoInput").focus();

  // Making sure the page isn't reloaded:
  document
    .getElementById("submitButton")
    .addEventListener("click", function(event) {
      event.preventDefault();
    });

  // For part 3:
  var tasks = [];

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
    console.log(tasks);
  };
};
