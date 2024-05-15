const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Adds an entered task to the list
const addTask = () => {
	if (inputBox.value === "") {
		alert("Without a task I am taskless :(");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
};

// Adds an X icon to a task that when clicked deletes that task from the list
listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);

const saveData = () => {
	localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
	listContainer.innerHTML = localStorage.getItem("data");
};

showTask();
