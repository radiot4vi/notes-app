const noteInput = document.getElementById('note');
const saveButton = document.getElementById('save');
const notesList = document.getElementById('notes');

saveButton.addEventListener('click', function() {
  const note = noteInput.value;
  if (note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
    noteInput.value = '';
  }
});

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notesList.innerHTML = '';
  for (let i = 0; i < notes.length; i++) {
    const li = document.createElement('li');
    li.textContent = notes[i];
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      notes.splice(i, 1);
      localStorage.setItem('notes', JSON.stringify(notes));
      displayNotes();
    });
    li.appendChild(deleteButton);
    notesList.appendChild(li);
  }
}

displayNotes();
