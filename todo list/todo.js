let alltask = localStorage.getItem("alltask") ? JSON.parse(localStorage.getItem("alltask")) : [];
const addtask = () => {
    let task = document.getElementById("adtask").value;

    taskobj = {
        id: Math.floor(Math.random() * 1000),
        task: task,
        st: "pending"
    }

    if (task == "") {
        alert("😒please enter task😒");
        return false;
    }
    if (alltask.find((val) => val.task == task)) {
        alert("😥task is already exists😥");
        return false;
    }

    alltask.push(taskobj);
    localStorage.setItem("alltask", JSON.stringify(alltask));
    document.getElementById("adtask").value = "";
    showtask();

}

const showtask = () => {
    let data = localStorage.getItem("alltask") ? JSON.parse(localStorage.getItem("alltask")) : [];
    let tbl = "";

    data.map((val, index) => {
        tbl += `
        <tr class=" align-items-center">
        <td>${val?.id}</td>
        <td>${val?.task}</td>
        <td><button class="btn btn-warning"  onclick="deletetask(${index})">delet <img src="/new js/todo list/delete.gif"></button>
        <button class="btn btn-primary" onclick="edittask(${index})">edit <img src="/new js/todo list/edit.gif"></button></td>
        <td><select "class="btn btn-transparent" id="status" onchange="upstatus('${val.id}')">
        <option value="pending" >pending</option>
        <option value="success">success</option>
        <option value="cancel">cancel</option>
        </select></td>
        </tr>
        `
    })
    document.getElementById("data").innerHTML = tbl;

}
showtask();

const deletetask = (id) => {
    alltask.splice(id, 1);
    localStorage.setItem("alltask", JSON.stringify(alltask));
    showtask();
}

const deleteall = () => {
    localStorage.removeItem("alltask");
    showtask();
}

const upstatus = (id, st) => {
    let upst=localStorage.getItem("alltask")?JSON.parse(localStorage.getItem("alltask")):[]
    upst.map((val) => {
        if (val.id == id) {
            val.st = st
        }
        return val
    })

    localStorage.setItem("alltask", JSON.stringify(upst));
    // showtask();

}
upstatus();



const edittask = (index) => {


    if (alltask[index]) {
        document.getElementById("label").innerHTML = "Edit Task";
        document.getElementById("submit").innerHTML = "edit";
        document.getElementById("adtask").value = alltask[index].task;
        document.getElementById("submit").onclick = () => {
            document.getElementById("submit").innerHTML = "submit";
            document.getElementById("label").innerHTML = "Add Task";
            addtask();
        };
        alltask.splice(index, 1);

    } else {
        document.getElementById("label").innerHTML = "Add Task";
        document.getElementById("adtask").value = "";
    }


}
localStorage.setItem("alltask", JSON.stringify(alltask));
showtask();

