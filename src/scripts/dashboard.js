// scripts/dashboard.js
// Simple notes dashboard logic using localStorage (can be replaced with JSON file backend)
document.addEventListener('DOMContentLoaded', function() {
    const notesList = document.getElementById('notes-list');
    const addNoteForm = document.getElementById('add-note-form');
    const noteInput = document.getElementById('note-input');

    // Load notes from localStorage
    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notesList.innerHTML = '';
        notes.forEach((note, idx) => {
            const li = document.createElement('li');
            li.textContent = note;
            notesList.appendChild(li);
        });
    }

    // Add new note
    addNoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const note = noteInput.value.trim();
        if (note) {
            const notes = JSON.parse(localStorage.getItem('notes') || '[]');
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            loadNotes();
        }
    });

    loadNotes();
});
