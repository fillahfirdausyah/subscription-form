import { React, useEffect, useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import Logo from '../../assets/BuanaLintas.png'
import "./style.css";
// Parts Component
import InformasiPerusahaan from "./parts/InformasiPerusahaan";
import Authorized from './parts/Authorized'

function Form(props) {
  // const [data, setData] = useState("")
  const [ptName, setPtName] = useState('')
  const [notify, setNotify] = useState(false);
  const [infoPerusahaan, setInfoPerusahaan] = useState({})

  const getInfoPerushaan = (index) => {
    console.log(index)
    setInfoPerusahaan(index)
  }


  const ptNamehandler = (e) => {
    setPtName(e.target.value)
  }

  const prosesHandler = (e) => {
    e.preventDefault();
    
    // setData(infoPerusahaan)
    const data = {
      infoPerusahaan
    }

    props.setData(data)
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
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Jenis Permintaan</div>
            <div class="card-body">
              <table className="main-page">
                <tr>
                  <td>Jenis Permintaan / Type of Order</td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="New Installation"
                        id="new-instalation"
                      />
                      <label class="form-check-label" for="new-instalation">
                        New Installation
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Upgrade"
                        id="upgrade"
                      />
                      <label class="form-check-label" for="upgrade">
                        Upgrade
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Down Grade"
                        id="down-grade"
                      />
                      <label class="form-check-label" for="down-grade">
                        Down Grade
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Renewal"
                        id="renewal"
                      />
                      <label class="form-check-label" for="renewal">
                        Renewal
                      </label>
                    </div>
                    <div class="mt-1">
                      <label class="form-check-label" for="other">
                        Other :{" "}
                      </label>
                      <input
                        class="form-controll form-other"
                        type="text"
                        value=""
                        id="other"
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          {/* Informasi Perusahaan Pelanggan */}
          <InformasiPerusahaan getInfoPerushaan={getInfoPerushaan}/>

          {/* Penanggung Jawab Perusahaan */}
          <Authorized />

          {/* Penanggung Jawab Keuangan */}
          

          {/* Alamat Penagihan */}
          

          {/* Penanggung Jawab Teknis */}
          

          {/* Layanan yang diminta */}
          

          {/* Alamat Instalasi */}
          

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
