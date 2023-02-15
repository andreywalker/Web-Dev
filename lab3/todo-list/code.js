taskViewsList=document.getElementsByTagName("LI");
for(let i=0;i<taskViewsList.length; i++){
    let cl= document.createElement("SPAN");
    cl.className = "close";
    cl.appendChild(document.createTextNode("X"));
    cl.onclick=function(){
        let parent=cl.parentElement;
        parent.remove();
    }
    taskViewsList[i].appendChild(cl);
}

function addTask(){
    let newTask=document.createElement("LI");
    let textS=document.getElementById("intext").value;
    let text=document.createTextNode(textS);
    newTask.appendChild(text);
    newTask.onclick=function(){
        newTask.classList.toggle('checked');
    }
    
    document.getElementById("intext").value = "";
    let cl= document.createElement("SPAN");
    cl.className = "close";
    cl.appendChild(document.createTextNode("X"));
    cl.onclick=function(){
        let parent=cl.parentElement;
        parent.remove();
    }
    newTask.appendChild(cl);
    if (textS === '') {
        alert("Oh. It's too nothing!");
    } else {
        document.getElementById("list").appendChild(newTask);
    }
}
