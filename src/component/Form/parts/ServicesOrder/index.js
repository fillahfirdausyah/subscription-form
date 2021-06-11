import React from "react";

function ServiceOrder() {
  return (
    <>
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
    </>
  );
}

export default ServiceOrder;
