import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CreateIcon from "@material-ui/icons/Create";
import { useAuth } from "../../Context/AuthContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";

function ClientPage() {
  const { currentUser, logout } = useAuth();

  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        "https://subsform-buana-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
      )
      .then((res) => console.log(res.data));
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      history.push("/login");
    } catch {}
  };

  return (
    <Container>
      <header className="d-flex align-items-center justify-content-between">
        <div className="user-info">
          <h1>List Form</h1>
          <li>Login as : {currentUser.email}</li>
          <li>Nama : {currentUser.displayName}</li>
        </div>
        <button className="btn btn-danger" onClick={handleLogout}>
          <ExitToAppIcon />
          Log Out
        </button>
      </header>
      <Link className="btn btn-primary mt-4" to="/form">
        <AddCircleOutlineIcon />
        Buat Baru
      </Link>
      <div className="row">
        <div className="col-4" data-aos="fade-up" data-aos-duration="900">
          <div class="card card-code bg-dark-custom">
            <div class="card-body">
              <h5 class="card-title">PT.</h5>
              <ul>
                <li>Jenis Usaha :</li>
                <li>Alamat Email :</li>
                <li>Alamat Situs :</li>
              </ul>
              <Link to={`/preview/`} className="btn btn-primary preview-btn">
                <VisibilityIcon /> Preview
              </Link>
              <Link to={`/lengkapi/`} className="btn btn-primary">
                <CreateIcon />
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ClientPage;
