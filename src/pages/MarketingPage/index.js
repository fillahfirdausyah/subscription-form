import React, { useState, useEffect } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link, useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import { useAuth } from "../../Context/AuthContext";
import "./style.css";
import axios from "axios";

function MarketingPage() {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);

  const history = useHistory();

  const { currentUser, logout } = useAuth();

  useEffect(() => {
    setisLoading(true);
    axios
      .get(
        "https://subsform-buana-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
      )
      .then((res) => {
        const newData = [];

        for (const key in res.data) {
          const x = {
            id: key,
            ...res.data[key],
          };

          newData.push(x);
        }

        console.log(res.data);

        setisLoading(false);
        setData(newData);
      });
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      history.push("/loginmarketing");
    } catch {}
  };

  if (isLoading) {
    return (
      <div>
        <h3>Loading....</h3>
      </div>
    );
  }

  return (
    <div className="container marketing">
      <header className="d-flex align-items-start justify-content-between">
        <div className="user-info">
          <h1>Daftar Subscirption Form</h1>
            <li>Login as : {currentUser.email}</li>
            <li>Nama : {currentUser.displayName}</li>
        </div>
        <button className="btn btn-danger" onClick={handleLogout}>
          <ExitToAppIcon />
          Log Out
        </button>
      </header>
      <div className="row">
        {data.map((x, index) => (
          <div className="col-4" data-aos="fade-up" data-aos-duration="900">
            <div class="card card-code bg-dark-custom">
              <div class="card-body">
                <h5 class="card-title">
                  PT. {x.data.infoPerusahaan.namaPerusahaan}
                </h5>
                <ul>
                  <li key={x.id}>
                    Jenis Usaha : {x.data.infoPerusahaan.jenisUsaha}
                  </li>
                  <li key={x.id}>
                    Alamat Email : {x.data.infoPerusahaan.alamatEmail}
                  </li>
                  <li key={x.id}>
                    Alamat Situs : {x.data.infoPerusahaan.alamatSitus}
                  </li>
                </ul>
                <Link
                  to={`/preview/${x.id}`}
                  className="btn btn-primary preview-btn"
                >
                  <VisibilityIcon /> Preview
                </Link>
                <Link to={`/lengkapi/${x.id}`} className="btn btn-primary">
                  <CreateIcon />
                  Lengkapi
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketingPage;
