import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosBaseURL from "../Api/contact";

const ContactManager = () => {
  const [contactList, setContactList] = useState([]);

  const retriveContact = async () => {
    const response = await axiosBaseURL.get("/Contact");
    return response.data;
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axiosBaseURL.delete(`/Contact/${id}`);
    const filterList = contactList.filter((list) => list.id !== id);
    setContactList(filterList);
  };

  const handleSearch = async (e) => {
    const { name, value } = e.target;
    const response = await axiosBaseURL.get(`/Contact?q=${value}`);
    console.log("Search", response.data);
    const data = response.data;
    setContactList(data);
  };

  useEffect(() => {
    const getContact = async () => {
      const allContact = await retriveContact();
      setContactList(allContact);
    };
    getContact();
  }, []);

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <Link to={"/add"} className="btn btn-primary mb-3">
          <i className="bi bi-person-plus-fill"></i> ADD
        </Link>
        <div className="col-sm-4">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Search....."
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>

      <div className="row">
        {contactList.length > 0 ? (
          contactList.map((item) => {
            return (
              <div className="col-md-6" key={item.id}>
                <div className="card list-group-item-dark mb-2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          alt="user-img"
                          className="contact-img"
                          src={item.img}
                        />
                      </div>
                      <div className="col-sm-7">
                        <ul className="list-group">
                          <li className="list-group-item">
                            Name: <span className="fw-bold">{item.name}</span>
                          </li>
                          <li className="list-group-item">
                            Email: <span className="fw-bold">{item.email}</span>
                          </li>
                          <li className="list-group-item ">
                            Mobile:
                            <span className="fw-bold">{item.mobile}</span>
                          </li>
                          <li className="list-group-item">
                            Company:
                            <span className="fw-bold">{item.company}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-1 d-flex flex-column justify-content-cneter align-items-center">
                        <Link
                          to={`view/${item.id}`}
                          className="btn btn-warning my-1"
                        >
                          <i className="bi bi-eye"></i>
                        </Link>

                        <Link
                          to={`edit/${item.id}`}
                          className="btn btn-primary my-1"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Link>

                        <button
                          className="btn btn-danger my-1"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-center">Not Contact Found </h2>
        )}
      </div>
    </div>
  );
};

export default ContactManager;
