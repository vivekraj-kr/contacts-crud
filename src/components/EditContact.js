import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

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
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({
      type: "UPDATE_CONTACT",
      payload: data,
    });
    toast.success("Contact updated successfully");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="col-md-6 mx-auto">
        <h1 className="m-5"> Edit contact {id}</h1>
        <div className="shadow p-4">
          <form onSubmit={handleSubmit}>
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
                value="Update contact"
                className="btn btn-dark mx-1"
              />
              <Link to="/" className="btn btn-danger mx-1">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
