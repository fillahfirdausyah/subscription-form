import React from "react";

function AuthorizedTechnical() {
  return (
    <>
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
    </>
  );
}

export default AuthorizedTechnical;
