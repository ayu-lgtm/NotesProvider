console.log("welcome to comment section");
showNotes();
//if user add a comment into the local storage

let addBtn = document.getElementById('btn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('Txt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

//function to show element from storage

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card" style="width:270px;margin:10px;background-color:white;border-radius:10px">
        <div class="card-body">
            <h4 class="card-title">Feedback ${index+1}</h4>
            <p class="card-text">${element}</p>
            
        </div>
    </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<h5 style='color:white'>Nothing to show in comment section.<h5>`;
    }
}


let search = document.getElementById('searchTxt');
search.addEventListener('input', function (e) {
    let inputVal = search.value.toLowerCase();
    console.log('input event fired', inputVal);
    let noteCard = document.getElementsByClassName('card');
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
})
/*futher featuers
1.Add title
2.search by title search by node
3.mark important
4.seprate note by user
5.sync with server and host */