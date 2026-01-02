// scripts/dashboard.js
// Notes dashboard with add/edit/delete using localStorage
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("note-form");
    const titleInput = document.getElementById("note-title");
    const topicInput = document.getElementById("note-topic");
    const contentInput = document.getElementById("note-content");
    const notesList = document.getElementById("notes-list");
    const noteCount = document.getElementById("note-count");
    const emptyState = document.getElementById("notes-empty");
    const cancelEditBtn = document.getElementById("cancel-edit-btn");
    const saveBtn = document.getElementById("save-note-btn");

    let editingId = null;

    function getNotes() {
        return JSON.parse(localStorage.getItem("notes") || "[]");
    }

    function setNotes(notes) {
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function renderNotes() {
        const notes = getNotes();
        notesList.innerHTML = "";
        noteCount.textContent = notes.length ? `${notes.length} note${notes.length > 1 ? "s" : ""}` : "";
        emptyState.style.display = notes.length ? "none" : "block";

        notes.forEach((note) => {
            const li = document.createElement("li");
            li.className = "note-card";
            li.innerHTML = `
                <div class="topic">${note.topic ? note.topic : "General"}</div>
                <h3>${note.title || "Untitled"}</h3>
                <p>${note.content || ""}</p>
                <div class="meta">${new Date(note.createdAt).toLocaleString()}</div>
                <div class="note-actions">
                    <button data-id="${note.id}" class="edit">Edit</button>
                    <button data-id="${note.id}" class="danger delete">Delete</button>
                </div>
            `;
            notesList.appendChild(li);
        });
    }

    function resetForm() {
        form.reset();
        editingId = null;
        cancelEditBtn.hidden = true;
        saveBtn.textContent = "Save note";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = titleInput.value.trim();
        const topic = topicInput.value.trim();
        const content = contentInput.value.trim();
        if (!content) return;

        const notes = getNotes();

        if (editingId) {
            const idx = notes.findIndex((n) => n.id === editingId);
            if (idx !== -1) {
                notes[idx] = { ...notes[idx], title, topic, content, updatedAt: Date.now() };
            }
        } else {
            notes.unshift({
                id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
                title,
                topic,
                content,
                createdAt: Date.now(),
            });
        }

        setNotes(notes);
        renderNotes();
        resetForm();
    });

    cancelEditBtn.addEventListener("click", () => {
        resetForm();
    });

    notesList.addEventListener("click", (e) => {
        const target = e.target;
        if (target.matches("button.edit")) {
            const id = target.getAttribute("data-id");
            const note = getNotes().find((n) => n.id === id);
            if (note) {
                titleInput.value = note.title || "";
                topicInput.value = note.topic || "";
                contentInput.value = note.content || "";
                editingId = id;
                cancelEditBtn.hidden = false;
                saveBtn.textContent = "Update note";
            }
        }

        if (target.matches("button.delete")) {
            const id = target.getAttribute("data-id");
            const filtered = getNotes().filter((n) => n.id !== id);
            setNotes(filtered);
            renderNotes();
        }
    });

    renderNotes();
});
