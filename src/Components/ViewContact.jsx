import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosBaseURL from "../Api/contact";

const ViewContact = () => {
  const [viewContactList, setViewContactList] = useState({});
  const { id } = useParams();

  const retriveContact = async () => {
    const response = await axiosBaseURL.get(`/Contact/${id}`);
    return response.data;
  };

  useEffect(() => {
    const getContact = async () => {
      const viewSingleContact = await retriveContact();
      setViewContactList(viewSingleContact);
    };
    getContact();
  }, []);

  console.log(viewContactList);

  return (
    <div className="container mt-5">
      <div className="row align-item-center">
        <div className="col-sm-4">
          <img
            src={viewContactList.img}
            alt=""
            style={{ width: "200px", borderRadius: "50%" }}
          />
        </div>
        <div className="col-sm-6">
          <ul className="list-group">
            <li className="list-group-item my-1">
              Name: <span className="fw-bold">{viewContactList.name}</span>
            </li>
            <li className="list-group-item my-1">
              Email: <span className="fw-bold">{viewContactList.email}</span>
            </li>
            <li className="list-group-item  my-1">
              Mobile: <span className="fw-bold">{viewContactList.mobile}</span>
            </li>
            <li className="list-group-item my-1">
              Company:{" "}
              <span className="fw-bold">{viewContactList.company}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Link className="btn btn-dark ms-2" to={"/"}>
            <i className="fa fa-arrow-alt-circle-left"></i> Close
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewContact;
