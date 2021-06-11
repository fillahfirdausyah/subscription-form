import React from "react";

function SubscriptionFee() {
  return (
    <>
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
    </>
  );
}

export default SubscriptionFee;
