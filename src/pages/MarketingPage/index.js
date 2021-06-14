import React, { useState, useEffect } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./style.css";
import axios from "axios";

function MarketingPage() {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://subsform-buana-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
    )
      .then((res) => res.json())
      .then((res) => {
        const newData = [];

        for (const key in res) {
          const x = {
            id: key,
            ...res[key],
          };

          newData.push(x);
        }

        setisLoading(false);
        setData(newData);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h3>Loading....</h3>
      </div>
    );
  }

  return (
    <div className="container marketing">
      <header>
        <h1>Daftar Subscirption Form</h1>
      </header>
      <div className="row">
        {data.map((x) => (
          <div className="col-4">
            <div class="card card-code bg-dark-custom">
              <div class="card-body">
                <h5 class="card-title">PT. {x.data.client.namaPT}</h5>
                <ul>
                  <li>Jenis Usaha : {x.data.infoPerusahaan.jenisUsaha}</li>
                  <li>Alamat Email : {x.data.infoPerusahaan.alamatEmail}</li>
                  <li>Alamat Situs : {x.data.infoPerusahaan.alamatSitus}</li>
                </ul>
                <Link to={`/preview/${x.id}`} className="btn btn-primary">
                  <VisibilityIcon />
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
