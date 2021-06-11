import { React, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import Template from "../Template";
import { DataContext } from "../../Context/DataContext";
import DoneIcon from "@material-ui/icons/Done";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Logo from '../../assets/BuanaLintas.png'
import "./style.css";

function Form(props) {
  const [data, setData] = useState({});
  const [ptName, setPtName] = useState('')
  const [notify, setNotify] = useState(false);

  let haha = new Date()
  let date = ("0" + haha.getDate()).slice(-2)
  console.log(date)

  // Data Structure
  // Info Ref
  const tgglRef = useRef();
  const noFpbRef = useRef();
  const noCidRef = useRef();
  // Jenis Permintaan Ref
  const typeOfRef = useRef();
  // Informasi Perusahaan Pelanggan
  const namaPerusahaanRef = useRef();
  const groupPerusahaanRef = useRef();
  const jenisUsahaRef = useRef();
  const alamatRef = useRef();
  const kotaRef = useRef();
  const kodePosRef = useRef();

  const ptNamehandler = (e) => {
    setPtName(e.target.value)
  }

  const prosesHandler = (e) => {
    e.preventDefault();

    // Info
    const tggl = tgglRef.current.value;
    const noFpb = noFpbRef.current.value;
    const noCid = noCidRef.current.value;
    // Jenis Permintaan
    const typeOf = typeOfRef.current.value;
    // Informasi Perusahaan
    const namaPerusahaan = namaPerusahaanRef.current.value;
    const groupPerusahaan = groupPerusahaanRef.current.value;
    const jenisUsaha = jenisUsahaRef.current.value;
    const alamat = alamatRef.current.value;
    const kota = kotaRef.current.value;
    const kodePos = kodePosRef.current.value;

    const newData = {
      info: {
        tggl,
        noFpb,
        noCid,
      },
      company: {
        namaPerusahaan,
        groupPerusahaan,
        jenisUsaha,
        alamat,
        kota,
        kodePos,
      },
    };
    console.log(data);
    setData(newData);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="main mt-5">
      <div className="container">
        <form onSubmit={prosesHandler}>
          {/* Informasi */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
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
                  ref={tgglRef}
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
                  ref={noFpbRef}
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
                  ref={noCidRef}
                />
              </div>
            </div>
          </div>

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

          {/* Informasi Perusahaan Pelanggan */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Informasi Perusahaan Pelanggan</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Nama Perusahaan
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
              <div class="mb-3">
                <label for="group-perusahaan" class="form-label">
                  Group Perusahaan
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="group-perusahaan"
                  ref={groupPerusahaanRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Jenis Usaha
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="alamat" class="form-label">
                  Alamat
                </label>
                <textarea
                  class="form-control"
                  id="alamat"
                  rows="3"
                  ref={alamatRef}
                ></textarea>
              </div>
              <div class="mb-3">
                <div className="row">
                  <div className="col-6">
                    <label for="kota" class="form-label">
                      Kota
                    </label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="kota"
                      ref={kotaRef}
                    />
                  </div>
                  <div className="col-6">
                    <label for="kota" class="form-label">
                      Kode Pos
                    </label>
                    <input
                      required
                      type="number"
                      class="form-control"
                      id="kota"
                      ref={kodePosRef}
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Provinsi
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Alamat Situs
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Alamat Email
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  NPWP
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Telephone
                </label>
                <input
                  required
                  type="text"
                  placeholder="Kode Area / Nomor"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Fax
                </label>
                <input
                  required
                  type="text"
                  placeholder="Kode Area / Nomor"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
            </div>
          </div>

          {/* Penanggung Jawab Perusahaan */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Penanggung Jawab Perusahaan</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Nama
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
              <div class="mb-3">
                <label for="group-perusahaan" class="form-label">
                  Tempat Tanggal Lahir
                </label>
                <div className="row">
                  <div className="col-5">
                    <input
                      required
                      type="text"
                      placeholder="Tempat.."
                      class="form-control"
                      id="group-perusahaan"
                      ref={groupPerusahaanRef}
                    />
                  </div>
                  <div className="col-7">
                    <input
                      required
                      type="date"
                      class="form-control"
                      id="group-perusahaan"
                      ref={groupPerusahaanRef}
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Jabatan
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Telephone
                </label>
                <input
                  required
                  type="text"
                  placeholder="Kode Area / Nomor"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Kartu Identitas
                </label>
                <div className="row">
                  <div className="col">
                    <div class="form-check">
                      <input
                        required
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        KTP
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        required
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        KIM-S
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        required
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        SIM
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        required
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        PASPOR
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Kartu Identitas
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Masa Berlaku
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Alamat Email
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
            </div>
          </div>

          {/* Penanggung Jawab Keuangan */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Penanggung Jawab Keuangan</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Nama
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Bagian
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Jabatan
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Telephone
                </label>
                <input
                  required
                  type="text"
                  placeholder="Kode Area / Nomor"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Fax
                </label>
                <input
                  required
                  type="text"
                  placeholder="Kode Area / Nomor"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Alamat Email
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
            </div>
          </div>

          {/* Alamat Penagihan */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Alamat Penagihan</div>
            <div className="card-body">
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="alamat"
                  rows="3"
                  ref={alamatRef}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Penanggung Jawab Teknis */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Penanggung Jawab Teknis</div>
            <div className="card-body">
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Nama
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Bagian
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Jabatan
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Telephone
                </label>
                <input
                  required
                  type="text"
                  placeholder="Kode Area / Nomor"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Handphone
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Fax
                </label>
                <input
                  required
                  type="text"
                  placeholder="Kode Area / Nomor"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Alamat Email
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="jenis-usaha"
                  ref={jenisUsahaRef}
                />
              </div>
            </div>
          </div>

          {/* Layanan yang diminta */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Layanan Yang Diminta</div>
            <div className="card-body">
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Jenis Layanan
                </label>
                <div className="row">
                  <div className="col">
                    <div class="form-check">
                      <input
                        required
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Internet
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        required
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        VOIP
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        required
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        VPS
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-check">
                      <input
                        required
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Software as Service
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Spesifikasi Layanan
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Informasi Tambahan
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
            </div>
          </div>

          {/* Alamat Instalasi */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Alamat Instalasi</div>
            <div className="card-body">
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="alamat"
                  rows="3"
                  ref={alamatRef}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Biaya Berlanggana */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Biaya Berlangganan</div>
            <div className="card-body">
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Biaya Set Up
                </label>
                <input
                  required
                  type="text"
                  placeholder="Rp...."
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Biaya Layanan
                </label>
                <input
                  required
                  type="text"
                  placeholder="Rp...."
                  class="form-control"
                  id="nama-perusahaan"
                  ref={namaPerusahaanRef}
                />
              </div>
            </div>
          </div>

          {/* Tanda Tangan */}
          <div class="card text-white bg-dark-custom mb-3 card-custom">
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
          </div>

          <button type="submit" className="btn-proses">
            <DoneIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
