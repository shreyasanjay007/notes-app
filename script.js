const btn = document.querySelector('.create')
const container = document.querySelector('.container')
const noteInput = document.querySelector('.note-input')

btn.addEventListener('click',()=>{
    const noteBox = document.createElement('div')
    noteBox.className= 'note-box'
    container.appendChild(noteBox)

    noteBox.innerHTML = `<textarea rows='4' cols='50' placeholder='Enter a note' class='note-input'></textarea>
                         <button class='delete' ><img src='./images/delete.png' /></button>`

    const del = noteBox.querySelector('.delete')
    del.addEventListener('click',(e)=>{
            noteBox.remove()            
            updateStorage() ;
     })

     localStorage.setItem('name','noteBox')
})

function updateStorage(){
    localStorage.setItem('notes',noteInput.innerHTML);
}




