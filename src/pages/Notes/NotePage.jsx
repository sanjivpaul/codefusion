import React, { useState } from "react";
import "./NotePage.css";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiSave } from "react-icons/fi";
import { FaAnglesLeft } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

function NotePage() {
  const [notes, setNotes] = useState([]); // State to hold notes
  const [currentNote, setCurrentNote] = useState(""); // State for the currently selected note
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null); // State for the index of the selected note
  const [isActive, setIsActive] = useState(false); // State to toggle sidebar

  const addNote = () => {
    setCurrentNote("");
    setSelectedNoteIndex(null);
    setIsActive(true); // Ensure sidebar is active
  };

  const saveNote = () => {
    if (selectedNoteIndex !== null) {
      const updateNotes = [...notes];
      updateNotes[selectedNoteIndex] = currentNote;
      setNotes(updateNotes);
    } else {
      setNotes([...notes, currentNote]);
    }
    setCurrentNote("");
    setSelectedNoteIndex(null);
  };

  const removeNote = () => {
    if (selectedNoteIndex !== null) {
      const updateNotes = notes.filter(
        (_, index) => index !== selectedNoteIndex
      );
      setNotes(updateNotes);
      setCurrentNote("");
      setSelectedNoteIndex(null);
    }
  };

  const selectNote = (index) => {
    setCurrentNote(notes[index]);
    setSelectedNoteIndex(index);
  };

  return (
    <div className="note-container">
      <div className={`container ${isActive ? "active" : ""}`}>
        <header>
          <button title="Add new notes" onClick={addNote}>
            {/* add */}
            <IoMdAdd color="#212121" size={20} />
          </button>
          <h3>Notes</h3>
          <div className="buttons">
            <button title="remove" onClick={removeNote}>
              {/* remove */}
              <RiDeleteBin6Line color="tomato" size={20} />
            </button>
            <button title="save" onClick={saveNote}>
              {/* save */}
              <FiSave color="#212121" size={20} />
            </button>
          </div>
        </header>
        <aside>
          <span id="toggle" onClick={() => setIsActive(!isActive)}>
            {/* toggle */}
            <FaAnglesLeft color="#212121" size={20} />
          </span>
          <div className="search-box">
            <span>
            <IoSearchOutline color="#212121" size={20}/>
            </span>
            <input type="text" placeholder="search" id="search"/>
          </div>
          <ul>
            {notes.length > 0 &&
              notes.map((note, index) => (
                <li
                  key={index}
                  className={selectedNoteIndex === index ? "selected" : ""}
                  onClick={() => selectNote(index)}
                >
                  {note.slice(0, 20)}
                </li>
              ))}
          </ul>
        </aside>

        <main>
          <textarea
            name="noteinput"
            cols={50}
            rows={50}
            id="noteinput"
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
          ></textarea>
        </main>
      </div>
    </div>
  );
}

export default NotePage;
