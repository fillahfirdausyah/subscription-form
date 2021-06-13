import { React, useEffect, useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import Logo from "../../assets/BuanaLintas.png";
import "./style.css";
// Parts Component
import TypeofOrder from "./parts/TypeofOrder";
import InformasiPerusahaan from "./parts/InformasiPerusahaan";
import Authorized from "./parts/Authorized";
import AuthorizedFinance from "./parts/AuthorizedFinance";
import BillingAddress from "./parts/BillingAddress";
import AuthorizedTechnical from './parts/AuthorizedTechnical'
import ServiceOrder from './parts/ServicesOrder'
import InstallationAddres from './parts/InstallationAddress'

function Form(props) {
  const [data, setData] = useState("");
  const [ptName, setPtName] = useState("");

  //
  const [typeofOrder, setTypeofOrder] = useState({});
  const [infoPerusahaan, setInfoPerusahaan] = useState({});
  const [authorized, setAuthorized] = useState({});
  const [authorizedFinance, setAuthorizedFinance] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [authorizedTechnical, setAuthorizedTechnical] = useState({})
  const [serviceOrder, setServiceOrder] = useState({})
  const [installationAddress, setInstallationAddress] = useState({})

  const getTypeofOrder = (data) => {
    // console.log(data)
    setTypeofOrder(data);
  };

  const getInfoPerushaan = (data) => {
    // console.log(data);
    setInfoPerusahaan(data);
  };

  const getAuthorized = (data) => {
    // console.log(data);
    setAuthorized(data);
  };

  const getAuthorizedFinance = (data) => {
    // console.log(data)
    setAuthorizedFinance(data);
  };

  const getBillingAddress = (data) => {
    console.log(data);
    setBillingAddress(data);
  };

  const getAuthorizedTechnical = (data) => {
    setAuthorizedTechnical(data)
  }

  const getServiceOrder = (data) => {
    setServiceOrder(data)
  }

  const getInstallationAddress = (data) => {
    setInstallationAddress(data)
  }

  const ptNamehandler = (e) => {
    setPtName(e.target.value);
  };

  const prosesHandler = (e) => {
    e.preventDefault();

    // setData(infoPerusahaan)
    const data = {
      // typeofOrder,
      // infoPerusahaan,
      // authorized,
      // authorizedFinance,
      // billingAddress,
      // authorizedTechnical,
      // serviceOrder,
    };
    // console.log(authorized)
    props.setData();
  };

  return (
    <div className="main mt-5">
      <div className="container">
        <form onSubmit={prosesHandler}>
          {/* Informasi */}
          {/* <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Informasi</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="date" class="form-label">
                  Tanggal
                </label>
                <input
                  required
                  type="date"
                  class="form-control"
                  id="date"
                />
              </div>
              <div class="mb-3">
                <label for="no-fpb" class="form-label">
                  No. FPB
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="no-fpb"
                />
              </div>
              <div class="mb-3">
                <label for="no-cid" class="form-label">
                  No. CID
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="no-cid"
                />
              </div>
            </div>
          </div> */}

          {/* Jenis Permintaan */}
          {/* <TypeofOrder getTypeofOrder={getTypeofOrder}/> */}

          {/* Informasi Perusahaan Pelanggan */}
          {/* <InformasiPerusahaan getInfoPerushaan={getInfoPerushaan} /> */}

          {/* Penanggung Jawab Perusahaan */}
          {/* <Authorized getAuthorized={getAuthorized}/> */}

          {/* Penanggung Jawab Keuangan */}
          {/* <AuthorizedFinance getAuthorizedFinance={getAuthorizedFinance}/> */}

          {/* Alamat Penagihan */}
          {/* <BillingAddress getBillingAddress={getBillingAddress} /> */}

          {/* Penanggung Jawab Teknis */}
          {/* <AuthorizedTechnical getAuthorizedTechnical={getAuthorizedTechnical}/> */}

          {/* Layanan yang diminta */}
          {/* <ServiceOrder getServiceOrder={getServiceOrder}/> */}

          {/* Alamat Instalasi */}
          <InstallationAddres getInstallationAddress={getInstallationAddress}/>

          {/* Biaya Berlanggana */}

          {/* Tanda Tangan */}
          {/* <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Tanda Tangan</div>
            <div className="card-body">
              <div class="mb-3">
                <div className="row">
                  <div className="col-6">
                    <label for="nama-perusahaan" class="form-label">
                      PT. Buana Lintas Media
                    </label>
                    <img src={Logo} alt="" />
                  </div>
                  <div className="col-6">
                    <div class="mb-3">
                      <label for="nama-perusahaan" class="form-label">
                        PT.
                      </label>
                      <input
                        required
                        placeholder="PT. ...."
                        type="text"
                        class="form-control"
                        id="nama-perusahaan"
                        value={ptName}
                        onChange={ptNamehandler}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="nama-perusahaan" class="form-label">
                        Tanda Tangan PT. {ptName}
                      </label>
                      <input
                        required
                        type="file"
                        class="form-control"
                        id="nama-perusahaan"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <button type="submit" className="btn-proses">
            <DoneIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
