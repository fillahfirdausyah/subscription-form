import React from "react";
import './style.css'

function Form() {

    const prosesHandler = () => {
        console.log('berhasil')
    }

  return (
    <div className="main mt-5">
      <div className="container">
        <form onSubmit={prosesHandler}>
          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Informasi</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="date" class="form-label">
                  Tanggal
                </label>
                <input type="date" class="form-control" id="date" />
              </div>
              <div class="mb-3">
                <label for="no-fpb" class="form-label">
                  No. FPB
                </label>
                <input type="text" class="form-control" id="no-fpb" />
              </div>
              <div class="mb-3">
                <label for="no-cid" class="form-label">
                  No. CID
                </label>
                <input type="text" class="form-control" id="no-cid" />
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

          <div class="card text-white bg-dark-custom mb-3 card-custom">
            <div class="card-header">Informasi Perusahaan Pelanggan</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="nama-perusahaan" class="form-label">
                  Nama Perusahaan
                </label>
                <input type="text" class="form-control" id="nama-perusahaan" />
              </div>
              <div class="mb-3">
                <label for="group-perusahaan" class="form-label">
                  Group Perusahaan
                </label>
                <input type="text" class="form-control" id="group-perusahaan" />
              </div>
              <div class="mb-3">
                <label for="jenis-usaha" class="form-label">
                  Jenis Usaha
                </label>
                <input type="text" class="form-control" id="jenis-usaha" />
              </div>
              <div class="mb-3">
                <label for="alamat" class="form-label">
                  Alamat
                </label>
                <textarea class="form-control" id="alamat" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <div className="row">
                  <div className="col-6">
                    <label for="kota" class="form-label">
                      Kota
                    </label>
                    <input type="text" class="form-control" id="kota" />
                  </div>
                  <div className="col-6">
                    <label for="kota" class="form-label">
                      Kode Pos
                    </label>
                    <input type="number" class="form-control" id="kota" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button>Proses</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
