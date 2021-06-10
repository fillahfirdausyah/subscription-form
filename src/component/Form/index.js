import { React, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import Template from "../Template";
import { DataContext } from "../../Context/DataContext";
import "./style.css";

function Form(props) {
  const [data, setData] = useState({});
  const [notify, setNotify] = useState(false)

  const history = useHistory();

  // Info Ref
  const tgglRef = useRef();
  const noFpbRef = useRef();
  const noCidRef = useRef();
  // Jenis Permintaan Ref
  const typeOfRef = useRef()
  // Informasi Perusahaan Pelanggan
  const namaPerusahaanRef = useRef()
  const groupPerusahaanRef = useRef()
  const jenisUsahaRef = useRef()
  const alamatRef = useRef()
  const kotaRef = useRef()
  const kodePosRef = useRef() 

  const prosesHandler = (e) => {
    e.preventDefault();

    // Info
    const tggl = tgglRef.current.value;
    const noFpb = noFpbRef.current.value;
    const noCid = noCidRef.current.value;
    // Jenis Permintaan
    const typeOf = typeOfRef.current.value
    // Informasi Perusahaan
    const namaPerusahaan = namaPerusahaanRef.current.value
    const groupPerusahaan = groupPerusahaanRef.current.value
    const jenisUsaha = jenisUsahaRef.current.value
    const alamat = alamatRef.current.value
    const kota = kotaRef.current.value
    const kodePos = kodePosRef.current.value

    const newData = {
      info: {
        tggl,
        noFpb,
        noCid
      },
      company: {
        namaPerusahaan,
        groupPerusahaan,
        jenisUsaha,
        alamat,
        kota,
        kodePos
      }
    };
    console.log(data);
    setData(newData);

  };
  
  const nextProses = () => {
    history.push("/preview");
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    if(localStorage.getItem('data') !== null) {
      setNotify(true)
    }
  }, [data]);

  return (
    <div className="main mt-5">
      <div className="container">
        {notify ? <h1>Berhasil</h1> : <h1>GAGAl</h1>}
        <form>
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Informasi</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="date" class="form-label">
                  Tanggal
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  ref={tgglRef}
                />
              </div>
              <div class="mb-3">
                <label for="no-fpb" class="form-label">
                  No. FPB
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="no-fpb"
                  ref={noFpbRef}
                />
              </div>
              <div class="mb-3">
                <label for="no-cid" class="form-label">
                  No. CID
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="no-cid"
                  ref={noCidRef}
                />
              </div>
            </div>
          </div>

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
                        value=""
                        id="new-instalation"
                        ref={typeOfRef}
                      />
                      <label class="form-check-label" for="new-instalation">
                        New Installation
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="upgrade"
                        ref={typeOfRef}
                      />
                      <label class="form-check-label" for="upgrade">
                        Upgrade
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="down-grade"
                        ref={typeOfRef}
                      />
                      <label class="form-check-label" for="down-grade">
                        Down Grade
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="renewal"
                        ref={typeOfRef}
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
                        ref={typeOfRef}
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Informasi Perusahaan Pelanggan</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Nama Perusahaan
                </label>
                <input type="text" class="form-control" id="nama-perusahaan" ref={namaPerusahaanRef}/>
              </div>
              <div class="mb-3">
                <label for="group-perusahaan" class="form-label">
                  Group Perusahaan
                </label>
                <input type="text" class="form-control" id="group-perusahaan" ref={groupPerusahaanRef}/>
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Jenis Usaha
                </label>
                <input type="text" class="form-control" id="jenis-usaha" ref={jenisUsahaRef}/>
              </div>
              <div class="mb-3">
                <label for="alamat" class="form-label">
                  Alamat
                </label>
                <textarea class="form-control" id="alamat" rows="3" ref={alamatRef}></textarea>
              </div>
              <div class="mb-3">
                <div className="row">
                  <div className="col-6">
                    <label for="kota" class="form-label">
                      Kota
                    </label>
                    <input type="text" class="form-control" id="kota" ref={kotaRef}/>
                  </div>
                  <div className="col-6">
                    <label for="kota" class="form-label">
                      Kode Pos
                    </label>
                    <input type="number" class="form-control" id="kota" ref={kodePosRef}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" value="/preview" onClick={prosesHandler}>
            Proses
          </button>
          <button onClick={nextProses}>Preview</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
