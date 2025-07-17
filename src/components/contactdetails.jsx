import { useState } from "react";
import "./css/contactdetails.css";
import './css/addcontact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen } from "@fortawesome/free-solid-svg-icons";

function Contactdetails({ details, onDelete, onEdit }) {
  // cont = [{
  //     name:"rohan",
  //     mobileno:8279360051,
  //     email:"rohan@gmail.com"
  // },{
  //     name:"ankit",
  //     mobileno:8279360051,
  //     email:"rohan@gmail.com"
  // },{
  //     name:"frost",
  //     mobileno:8279360051,
  //     email:"rohan@gmail.com"
  // },
  // ]

  // var [info , setInfo] = useState([]);
  // setInfo(props.details);

  // function deleteContact(index){
  //   setInfo(info.filter((_,i) => i!==index));

  // }

  const [editingIndex, setEditingIndex] = useState(null); // which contact is being edited
  const [editForm, setEditForm] = useState({
    name: "",
    mobileno: "",
    email: "",
  });

  if (details.length > 0) {
    return (
      <div>
        <ul className="mainlist">
          {details.map((detail, index) => (
            <ul className="innerlist" key={index}>
              <FontAwesomeIcon
                className="delete"
                icon={faTrash}
                onClick={() => onDelete(index)}
              />
              <FontAwesomeIcon
                icon={faFilePen}
                className="edit"
                onClick={() => {
                  setEditingIndex(index);
                  setEditForm({
                    name: detail.name,
                    mobileno: detail.mobileno,
                    email: detail.email,
                  });
                }}
              />
              {editingIndex === index ? (
                <>
                  <li>
                    <input
                    className="editform"
                      type="text"
                      value={editForm.name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, name: e.target.value })
                      }
                    />
                  </li>
                  <li>
                    <input
                    className="editform"
                      type="number"
                      value={editForm.mobileno}
                      onChange={(e) =>
                        setEditForm({ ...editForm, mobileno: e.target.value })
                      }
                    />
                  </li>
                  <li>
                    <input
                    className="editform"
                      type="email"
                      value={editForm.email}
                      onChange={(e) =>
                        setEditForm({ ...editForm, email: e.target.value })
                      }
                    />
                  </li>
                  <li style={{display:"flex", flexDirection:"column" }} >
                    <button className="editbutton" 
                      onClick={() => {
                        onEdit(index, editForm);
                        setEditingIndex(null); // Exit edit mode
                      }}
                    >
                      Save
                    </button>
                    <button  className="editbutton" onClick={() => setEditingIndex(null)}>
                      Cancel
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <span style={{ marginRight: "91px" }}>Name:</span>
                    {detail.name}
                  </li>
                  <li>
                    <span>Mobile Number:</span> {detail.mobileno}
                  </li>
                  <li>
                    <span style={{ marginRight: "12px" }}>Email Address:</span>{" "}
                    {detail.email}
                  </li>
                </>
              )}
            </ul>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="mainlist">
          <p className="empty">No contact details</p>
        </ul>
      </div>
    );
  }
}

export default Contactdetails;
