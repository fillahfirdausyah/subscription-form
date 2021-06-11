import React from "react";

function InstallationAddres() {
  return (
    <>
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
    </>
  );
}

export default InstallationAddres;
