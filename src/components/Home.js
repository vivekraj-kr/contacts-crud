import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: { id: parseInt(id) } });
    toast.success("Contact deleted successfully");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-right my-5">
          <div className="col-md-6 mx-auto">
            <h1> Welcome to react redux contact book</h1>
          </div>
          <div className="text-end mb-3">
            <Link to="/add" className="btn btn-primary">
              Add contact
            </Link>
          </div>
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-sm btn-primary mx-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="btn btn-sm btn-danger mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
