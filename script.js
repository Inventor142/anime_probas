function AddTask() {
    let task = document.getElementById ("task")
    let taskText = task.value
    debugger
   
    
    if (taskText != "") {
        let p = document.createElement("p")
        p.innerText = taskText
        p.classList.add("review_two")
        let rew = document.getElementById("rew")
        rew.append(p)
        task.value = ""
    }
    else {
      
    }
}