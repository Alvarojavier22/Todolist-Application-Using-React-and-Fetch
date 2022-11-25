import React, { useState } from "react";


//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([
		"Levantarme",
		"Ir al baño"
	])
	const [newTask, setNewTask] = useState("")
	function addTask(e) {
		if (e.code == "Enter" && newTask != "") {
			setTasks([...tasks, newTask])
			setNewTask("")
		}
	}
	const [deleteTask, setDeleteTask] = useState("")

	function removeTask(index) {
		console.log(index)

		var newTasks = [...tasks]
		newTasks.splice(index, 1)
		setTasks(newTasks)
	}

	return (
		<div className="container">
			<h1>TO DO LIST</h1>
			<div className="container-fluid d-flex mt-5 justify-content-center">

				<ul className="list-group w-90">
					<li className="list-group-item d-flex justify-content-between align-items-center">
						<input
							className="form-control"
							type="text"
							onKeyDown={e => addTask(e)}
							onChange={e => setNewTask(e.target.value)}
							value={newTask}
							name="task" id="task" placeholder="What we have to do?" />
					</li>
					{tasks.map((task, index) => (
						<li key={index}
							className="list-group-item d-flex justify-content-between  align-items-center">
							{task}
							<button onClick={() => removeTask(index)} className="badge bg-danger rounded-pill">X</button>
						</li>
					))}
					<li className="list-group-item text-center disabled text-muted d-flex justify-content-center align-items-center">
						<small>
							{tasks.length} items.
						</small>
					</li>
				</ul>

			</div>
		</div>
	);
};

export default Home;