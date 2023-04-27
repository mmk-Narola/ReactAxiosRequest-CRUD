import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const contactDetails = {
  name: "",
  email: "",
  mobile: "",
  company: "",
  img: "",
};

const AddContact = () => {
  const [contact, setContact] = useState(contactDetails);
  const [flag, setFlag] = useState(false);
  const nagivate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadUserData();
    }
  }, [id]);

  const loadUserData = async () => {
    const response = await axios.get(`http://localhost:3000/Contact/${id}`);
    setContact({
      name: response.data.name,
      email: response.data.email,
      mobile: response.data.mobile,
      company: response.data.company,
      img: response.data.img,
    });
    setFlag(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let contactObj = {
      [name]: value,
    };
    setContact({
      ...contact,
      ...contactObj,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = {
      ...contact,
    };
    const response = await axios.post("http://localhost:3000/Contact", request);
    nagivate("/");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(contact);
    const response = await axios.put(
      `http://localhost:3000/Contact/${id}`,
      contact
    );
    console.log(response.data);
    nagivate("/");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-4">
          <form>
            <div className="mb-2">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Name....."
                value={contact.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email....."
                value={contact.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                name="mobile"
                id="number"
                className="form-control"
                placeholder="Mobile....."
                value={contact.mobile}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="company"
                id="company"
                className="form-control"
                placeholder="Company....."
                value={contact.company}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="img"
                id="photo"
                className="form-control"
                placeholder="Photo Url....."
                value={contact.img}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="mb-2">
              <button
                className="btn btn-success ms-2"
                type="submit"
                onClick={flag ? handleUpdate : handleSubmit}
              >
                {flag ? "Update" : "Create"}
              </button>{" "}
              <Link to={"/"}>
                <button className="btn btn-dark">Back</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
