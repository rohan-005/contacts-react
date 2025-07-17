import { useState } from "react";
import "./css/addcontact.css";

// addcontact.jsx
function AddContact({ className, onAddContact }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name && mobile && email) {
      onAddContact({
        name,
        mobileno: mobile,
        email,
      });
      setName("");
      setEmail("");
      setMobile("");
    } else {
      alert("empty field");
    }
  };

  return (
    <div className={className}>
      <input
        type="text"
        className="addinput"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="addinput"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="email"
        className="addinput"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Contact</button>
    </div>
  );
}

export default AddContact;
