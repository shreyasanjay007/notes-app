const btn = document.querySelector('.create')
const container = document.querySelector('.container')

function loadNotes(){
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(text => createNote(text));
}

function createNote(text = ''){

    const noteBox = document.createElement('div')
    noteBox.className= 'note-box'
    container.appendChild(noteBox)

    noteBox.innerHTML = `<textarea rows='4' cols='50' placeholder='Enter a note' class='note-input'></textarea>
                         <button class='delete' ><img src='./images/delete.png' /></button>`

    const textarea = noteBox.querySelector('.note-input')
    textarea.value = text
    textarea.addEventListener('input',()=>{
        updateStorage();
    })

    const del = noteBox.querySelector('.delete')
    del.addEventListener('click',()=>{
            noteBox.remove()            
            updateStorage() ;
     })
}

function updateStorage(){
    const notes = Array.from(document.querySelectorAll('.note-input')).map(nt => nt.value)
    localStorage.setItem('notes',JSON.stringify(notes))
}

btn.addEventListener('click',() => createNote())

loadNotes();




