function clicked(e){
    e.preventDefault();
    let input = document.getElementById("new-item").value;
    let list = document.getElementById("note-list");
    let note = document.createElement("li")
    note.addEventListener('click', strikeThrough)
    note.innerText = input
    note.className = "red"
    list.appendChild(note)
}
function strikeThrough(e){
    if(e.target.className === "red"){
        e.target.className = "strike"
    }else{
        e.target.className = "red"
    }
}