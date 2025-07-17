import React, { useState } from "react";
import "./css/contactform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import Contactdetails from "./contactdetails";
import AddContact from "./addcontact";

function Contactform() {
  const [sValue, setValue] = useState("");
  const [icon, setIcon] = useState(faPlus);
  var [cont, setCont] = useState([]);
  const [active, setActive] = useState(false);
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

  const handleAddContact = (newContact) => {
    setCont((prev) => [...prev, newContact]);
    setActive(false);
    setIcon(faPlus);
  };

  const filteredCont = cont.filter((contact) =>
    contact.name.toLowerCase().includes(sValue.toLowerCase())
  );

  function deleteContact(index){
    setCont(cont.filter((_,i) => i!==index));

  }

  function handleEdit(index, updatedContact) {
  const newContacts = [...cont];
  newContacts[index] = updatedContact;
  setCont(newContacts);
}


  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search By Name"
          value={sValue}
          onChange={(e) => setValue(e.target.value)}
          className="search"
        />
        <FontAwesomeIcon
          className="icon"
          icon={icon}
          onClick={() => {
            setActive(!active);
            setIcon(icon === faPlus ? faXmark : faPlus);
          }}
        />
      </div>
      <Contactdetails details={filteredCont} onDelete = {deleteContact} onEdit={handleEdit} />
      <AddContact
        className={active ? "addcontact active" : "addcontact"}
        onAddContact={handleAddContact}
      />
    </div>
  );
}

export default Contactform;
