import React, { useState } from "react";
import Radio from "../../../Radio";

function Authorized({ getAuthorized }) {
  const [data, setData] = useState({
    nama: "",
    ttlTempat: "",
    ttlTggl: "",
    jabatan: "",
    telephone: "",
    kartuID: "",
    noKartuId: "",
    masaBerlaku: "",
    email: "",
  });

  const kartuData = [
    {
      name: "kartuID",
      id: "ktp",
      val: "KTP",
      label: "KTP",
    },
    {
      name: "kartuID",
      id: "kim-s",
      val: "KIM-S",
      label: "KIM-S",
    },
    {
      name: "kartuID",
      id: "sim",
      val: "SIM",
      label: "SIM",
    },
    {
      name: "kartuID",
      id: "paspor",
      val: "PASPOR",
      label: "PASPOR",
    },
  ];

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
    getAuthorized(newData)
  };

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
              onChange={changeHandler}
              class="form-control"
              id="nama-perusahaan"
              name="nama"
              value={data.nama}
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
                  onChange={changeHandler}
                  placeholder="Tempat.."
                  class="form-control"
                  id="group-perusahaan"
                  name="ttlTempat"
                  value={data.ttlTempat}
                />
              </div>
              <div className="col-7">
                <input
                  required
                  type="date"
                  class="form-control"
                  id="group-perusahaan"
                  name="ttlTggl"
                  onChange={changeHandler}
                  value={data.ttlTggl}
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
              onChange={changeHandler}
              class="form-control"
              id="jenis-usaha"
              name="jabatan"
              value={data.jabatan}
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Telephone
            </label>
            <input
              required
              type="number"
              onChange={changeHandler}
              placeholder="Kode Area / Nomor"
              class="form-control"
              id="jenis-usaha"
              name="telephone"
              value={data.telephone}
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Kartu Identitas
            </label>
            <div className="row">
              {kartuData.map((x) => (
                <div className="col">
                  <Radio
                    label={x.label}
                    id={x.id}
                    value={x.val}
                    name={x.name}
                    onChange={changeHandler}
                  />
                </div>
              ))}
            </div>
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              No. Kartu Identitas
            </label>
            <input
              required
              type="number"
              onChange={changeHandler}
              class="form-control"
              id="jenis-usaha"
              name="noKartuId"
              value={data.noKartuId}
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Masa Berlaku
            </label>
            <input
              required
              type="text"
              onChange={changeHandler}
              class="form-control"
              id="jenis-usaha"
              name="masaBerlaku"
              value={data.masaBerlaku}
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Alamat Email
            </label>
            <input
              required
              type="email"
              onChange={changeHandler}
              class="form-control"
              id="jenis-usaha"
              name="email"
              value={data.email}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Authorized;
