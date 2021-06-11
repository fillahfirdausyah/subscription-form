import React from "react";

function Authorized() {
  return (
    <>
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
                />
              </div>
              <div className="col-7">
                <input
                  required
                  type="date"
                  class="form-control"
                  id="group-perusahaan"
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
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Authorized;
