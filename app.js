// Selectors
const noteInp = document.querySelector('.input-text');
const notesContainer = document.querySelector('.notes-container');
const completeNotesContainer = document.querySelector('.complete-notes-container');

// Functions
noteInp.addEventListener('keyup', (e) => {
    if (!noteInp.value == "") {
        if (e.keyCode == 13) {
            addNode(noteInp.value);
        }
    }
})

function addNode(noteText) {
    const date = new Date();
    notesContainer.innerHTML += `
    <div class="note-container">
    <p class="time">${date.toLocaleTimeString()}</p>
        <p class="text">${noteText}</p>
        <div class="operations">
            <button class="complete-btn"><span class="material-icons">check_circle_outline</span></button>
            <button class="trash-btn"><span class="material-icons">delete_outline</span></button>
        </div>
    </div>`;
    noteInp.value = "";
    const completeBtn = document.querySelectorAll('.complete-btn');
    const trashBtn = document.querySelectorAll('.trash-btn');
    const noteContainers = document.querySelectorAll('.note-container');
    for (let i = 0; i < completeBtn.length; i++) {
        completeBtn[i].addEventListener('click', () => {
            completeNote(i, noteContainers);
        });
        trashBtn[i].addEventListener('click', () => {
            deleteNote(i, noteContainers);
        });
    }
}

function completeNote(i, element) {
    if (element[i].classList.contains("complete")) {
        element[i].classList.remove("complete");
        notesContainer.appendChild(element[i]);
    } else {
        element[i].classList.add("complete");
        completeNotesContainer.appendChild(element[i]);
    }
}

function deleteNote(i, element) {
    element[i].remove();
    notes.push(element[i].querySelector('p').innerHTML);
    console.log(notes);
}
let notes = [];