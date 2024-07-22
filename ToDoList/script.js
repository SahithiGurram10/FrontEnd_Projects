const inputBox= document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");

function addtask(){
    const task = inputBox.value.trim();
    let notExists = true;
    if(task===''){
        alert("you must write something!");
        
    }

    const tasks = listcontainer.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].childNodes[0].nodeValue.trim() === task) {
            alert("Already exists!");
            notExists = false;
            break;
        }
    }

    if(notExists){
        console.log("Entered not Exists condition");

        let li=document.createElement("li");
        li.innerHTML= " ☐  " + inputBox.value;
        let span =document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span);
        listcontainer.appendChild(li);
        saveData();
    }

    inputBox.value="";
    
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();
