import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkEmail = contacts.find(
    (conatct) => conatct.email === email && email
  );

  const checkNumber = contacts.find(
    (conatct) => conatct.number === parseInt(number) && number
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !number) {
      return toast.warning("Please fill all the fields");
    }

    if (checkEmail) {
      return toast.error("Email already in use");
    }

    if (checkNumber) {
      return toast.error("Number already in use");
    }

    const data = {
      id: contacts.length + 1,
      name,
      email,
      number,
    };

    dispatch({
      type: "ADD_CONTACT",
      payload: data,
    });
    toast.success("Contact added successfully");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="col-md-6 mx-auto">
        <h1 className="m-5"> Add contact</h1>
        <div className="shadow p-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="number"
                placeholder="Phone number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add contact"
                className="btn btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
