import { useState, useEffect } from "react";
import { POST, GET, DELETE } from "../Utils/Utils";
import "./Note.css";

export const Note = () => {
  const [message, setMessage] = useState([]);
  const [note, setNote] = useState("");

    useEffect(() => {
        GET().then((data) => setMessage(data));
        }, []);

    function createNote() {
        POST({note});
        setNote("");
      //window.location.reload();   
    };

    function deleteNote(id) {
        DELETE(id);
        window.location.reload();
    }

    function checkForEnterKey(e) {
      if (e.keyCode === 13) {
        createNote();
      }
    };

  return (
    <div className="NoteMainWrapper">
      <div className="NoteWrapper">
        <textarea
          //key={note}
          rows={1}
          cols={80}
          required
          autoFocus={true}
          maxLength={300}
          onChange={(event) => {
            setNote(event.target.value);
          }}
          onKeyDown={checkForEnterKey}
          className="NoteMessage"
          type="text"
          value={note}
          placeholder="Write down your message and press enter to send..."
        />
      </div>
      <div className="NotePrinted">
        {message.map((singlenote, index) => (
          <p key={index}>
            <button onClick={() => deleteNote(singlenote.id)} className="NoteX">X</button>
            {singlenote.note}
          </p>
        ))}
      </div>
    </div>
  );
};
