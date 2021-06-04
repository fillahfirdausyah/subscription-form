import React from "react";
import "./style.css";

// Image
import Logo from "../../assets/BuanaLintas.png";

function Template() {
  return (
    <div className="pdf">
      <header>
        <img src={Logo} alt="Logo_Buana_Lintas_Media" />
        <p>
          PT. BUANA LINTAS MEDIA
          <br />
          Bamboo Estate Kav 10 RT 009/ RW 033 Tapanrejo Tajem Maguwoharjo Depok,
          <br />
          Sleman, D.I, Yogyakarta 55282, Indonesia.
          <br />
          Telp. : +62-274-4361352
          <br />
          Email : Info@buanalintas.co.id, Web : http://www.buanalintas.co.id
        </p>
      </header>
      <section>
        <div className="section1">
          <p>
            FORMULIR PENDAFTARAN BERLANGGANAN (Subscription Form)
            <br />
            SOFTWARE & INTERNET SERVICE PROVIDER
          </p>
        </div>
        <div className="content">
          <span className="font-bold">Isi dengan huruf cetak</span>{" "}
          <span className="font-italic">/ Fill In with capital letter</span>
          <br />
          <span className="font-bold">
            Beri tanda ✓ pada kotak pilihan
          </span>{" "}
          <span className="font-italic">/ Please tick in appropriate box</span>
          <div className="information">
            <div className="date">
              <input type="date" className="input-date" />
              <input type="text" className="input-date" />
              <input type="text" className="input-date" />
            </div>
            <div className="fpb-info">
              <table>
                <tr>
                  <td>No. FPB :</td>
                  <td>
                    <input type="text" className="input-no" />
                  </td>
                </tr>
                <tr>
                  <td>No. CID :</td>
                  <td>
                    <input type="text" className="input-no" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="field">
            <div className="type-of-order">
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">JENIS PERMINTAAN</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Jenis permintaan / Type of Order</p>
                    </td>
                    <td>
                      <input type="checkbox" id="NewInstalation" />
                      <label htmlFor="NewInstalation">New Instalation</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">Upgrade</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">Down grade</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">Renewal</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="customer-information">
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">
                      INFORMASI PERUSAHAAN PELANGGAN
                    </span>{" "}
                    <span className="font-italic">/ Customer Information</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Nama Perusahaan /</p>{" "}
                      <p className="font-italic">Company Name</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Group Perusahaan /</p>{" "}
                      <p className="font-italic">Company Group</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jenis Usaha /</p>{" "}
                      <p className="font-italic">Type of Business</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Alamat /</p> <p className="font-italic">Address</p>
                    </td>
                    <td>
                      <textarea name="" id="" cols="60" rows="5"></textarea>
                      <tr>
                        <td>
                          <input type="text" className="input-city" />
                          <br />
                          <p>Kota /</p> <p className="font-italic">City</p>
                        </td>
                        <td>
                          <input type="text" />
                          <br />
                          <p>Kode Pos /</p>{" "}
                          <p className="font-italic">Zip Code</p>
                        </td>
                      </tr>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Provinsi /</p> <p className="font-italic">Province</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Alamat Situs /</p>{" "}
                      <p className="font-italic">Situs Address</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Alamat Email /</p>{" "}
                      <p className="font-italic">Email Address</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>NPWP /</p>{" "}
                      <p className="font-italic">Tax Registered Number</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Telepone /</p> <p className="font-italic">Phone</p>
                    </td>
                    <td>
                      <input type="text" />
                      <br />
                      <p>Kode Area / </p>{" "}
                      <p className="font-italic">Area Code</p>
                      {" | "}
                      <p>Nomor / </p> <p className="font-italic">Number</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Fax /</p> <p className="font-italic">Phone</p>
                    </td>
                    <td>
                      <input type="text" />
                      <br />
                      <p>Kode Area / </p>{" "}
                      <p className="font-italic">Area Code</p>
                      {" | "}
                      <p>Nomor / </p> <p className="font-italic">Number</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="authorized-person">
              <div className="section1">
                <p>
                  FORMULIR PENDAFTARAN BERLANGGANAN (Subscription Form)
                  <br />
                  SOFTWARE & INTERNET SERVICE PROVIDER
                </p>
              </div>
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">
                      PENANGGUNG JAWAB PERUSAHAAN
                    </span>{" "}
                    <span className="font-italic">/ Authorized Person</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Nama /</p> <p className="font-italic"> Name</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Tempat, Tanggal Lahir /</p>{" "}
                      <p className="font-italic">Place, Date of Birth</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jabatan /</p> <p className="font-italic">Position</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Telepone /</p> <p className="font-italic">Phone</p>
                    </td>
                    <td>
                      <input type="text" />
                      <br />
                      <p>Kode Area / </p>{" "}
                      <p className="font-italic">Area Code</p>
                      {" | "}
                      <p>Nomor / </p> <p className="font-italic">Number</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Kartu Identitas /</p>{" "}
                      <p className="font-italic">ID Card</p>
                    </td>
                    <td className="id-card">
                      <input type="checkbox" />
                      <label htmlFor="NewInstalation">KTP</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">KIM_S</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">SIM</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">PASPOR</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Masa Berlaku /</p>{" "}
                      <p className="font-italic">Valid Until</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Alamat Email /</p>{" "}
                      <p className="font-italic">Email Address</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="billing-address">
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">ALAMAT PENAGIHAN</span>{" "}
                    <span className="font-italic">/ Billing Address</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <textarea
                        name=""
                        id=""
                        style={{ width: "90%", height: "100px" }}
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="financial-authorized-person">
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">
                      PENANGGUNG JAWAB KEUANGAN
                    </span>{" "}
                    <span className="font-italic">/ Financial Authorized Person</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Nama /</p> <p className="font-italic"> Name</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Bagian /</p> <p className="font-italic">Departement</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jabatan /</p> <p className="font-italic">Position</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Telepone /</p> <p className="font-italic">Phone</p>
                    </td>
                    <td>
                      <input type="text" />
                      <br />
                      <p>Kode Area / </p>{" "}
                      <p className="font-italic">Area Code</p>
                      {" | "}
                      <p>Nomor / </p> <p className="font-italic">Number</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Fax /</p> <p className="font-italic">Phone</p>
                    </td>
                    <td>
                      <input type="text" />
                      <br />
                      <p>Kode Area / </p>{" "}
                      <p className="font-italic">Area Code</p>
                      {" | "}
                      <p>Nomor / </p> <p className="font-italic">Number</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Handphone</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Alamat Email /</p>{" "}
                      <p className="font-italic">Email Address</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="billing-address">
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">ALAMAT PENAGIHAN</span>{" "}
                    <span className="font-italic">/ Billing Address</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <textarea
                        name=""
                        id=""
                        style={{ width: "90%", height: "90px" }}
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Template;
