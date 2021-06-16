import React from "react";

function Filledby() {
  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Diisi Oleh Buana Lintas Media</div>
        <div className="card-body">
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Nama Marketing
            </label>
            <input
              type="number"
              class="form-control"
              id="nama-perusahaan"
              name="biayaSetUp"
            />
          </div>
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Tanggal
            </label>
            <input
              type="date"
              class="form-control"
              id="nama-perusahaan"
              name="biayaLayanan"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Filledby;
