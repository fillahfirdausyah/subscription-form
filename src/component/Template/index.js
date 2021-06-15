import { React, useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/DataContext";
import "./style.css";

// Image
import Logo from "../../assets/BuanaLintas.png";

function Template(props) {

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
              <input type="text" disabled/>
            </div>
            <div className="fpb-info">
              <table>
                <tr>
                  <td>No. FPB :</td>
                  <td>
                    <input type="text" className="input-no" disabled/>
                  </td>
                </tr>
                <tr>
                  <td>No. CID :</td>
                  <td>
                    <input type="text" className="input-no" disabled/>
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

            <div className="authorized-person new-page">
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
                      <label htmlFor="Upgrade">KIM-S</label>
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
                    <span className="font-bold">PENANGGUNG JAWAB KEUANGAN</span>{" "}
                    <span className="font-italic">
                      / Financial Authorized Person
                    </span>
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

            <div className="techinal-authorized-person new-page">
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
                    <span className="font-bold">PENANGGUNG JAWAB TEKNIS</span>{" "}
                    <span className="font-italic">
                      / Technical Authorized Person
                    </span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Nama /</p> <p className="font-italic">Name</p>
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
                      <p>Handphone</p>
                    </td>
                    <td>
                      <input type="text" />
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

            <div className="services-order">
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">LAYANAN YANG DIMINTA</span>{" "}
                    <span className="font-italic">/ Services Order</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Jenis Layanan /</p>{" "}
                      <p className="font-italic">Kind of Services</p>
                    </td>
                    <td className="services" colSpan="2">
                      <input type="checkbox" id="internet" />
                      <label htmlFor="internet">Internet</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">VOIP</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade">VPS</label>
                      <input type="checkbox" />
                      <label htmlFor="Upgrade" className="label-upgrade">
                        <p>SOFTWARE AS SERVICE</p>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Spesifikasi Layanan /</p>{" "}
                      <p className="font-italic">Spesification of Services</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Informasi Tambahan /</p>{" "}
                      <p className="font-italic">Additional Info</p>
                    </td>
                    <td>
                      <input type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="instalation-address">
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">ALAMAT INSTALASI</span>{" "}
                    <span className="font-italic">/ Instalastion Address</span>
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

            <div className="subscription-fee">
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">BIAYA BERLANGGANAN</span>{" "}
                    <span className="font-italic">/ Subscription Fee</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Biaya Set Up/</p>{" "}
                      <p className="font-italic">Set Up Cost</p>
                      <br />
                      <span>(One Time Charge)</span>
                    </td>
                    <td>
                      <input type="text" placeholder="Rp" />
                    </td>
                  </tr>
                  <br />
                  <br />
                  <tr>
                    <td>
                      <p>Biaya Layanan /</p>{" "}
                      <p className="font-italic">Cost of Services</p>
                      <br />
                      <span>(Monthly Charge)</span>
                    </td>
                    <td>
                      <input type="text" placeholder="Rp" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="terms-and-conditions new-page">
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
                    <span className="font-bold">SYARAT DAN KETENTUAN</span>{" "}
                    <span className="font-italic">/ Terms And Conditions</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>1.</p>
                    </td>
                    <td>
                      <p>
                        Biaya berlangganan belum termasuk pajak / Subscription
                        fee does not include taxesx
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2.</p>
                    </td>
                    <td>
                      <p>
                        Biaya relokasi, biaya perijinan gedung dan biaya-biaya
                        lain yang dikenakan oleh pihak ketiga dalam proses
                        kegiatan instalasi, ditanggung oleh PELANGGAN. /
                        Relocation costs, building permit fees and other costs
                        charged by third parties in the process of installation,
                        paid by the CUSTOMER.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>3.</p>
                    </td>
                    <td>
                      <p>
                        PELANGGAN wajib membayar Biaya Berlangganan sebagaimana
                        tercantum dalam Formulir Berlangganan ini, paling lambat
                        7 (tujuh) hari kalender setelah menerima berkas tagihan
                        Buanalintas dengan cara ditransfer oleh PELANGGAN dalam
                        bentuk mata uang Rupiah ke rekening PT. Buana Lintas
                        Media dengan Nomor Rekening : 137-0005141748, Bank
                        Mandiri Cabang Katamso Yogyakarta, biaya transfer
                        ditanggung oleh PELANGGAN. / CUSTOMER shall pay the
                        Subscription Fee as set forth in this Subscription Form,
                        no later than 7 (seven) calendar days after receiving
                        the invoice file with transferred to Buanalintas by
                        CUSTOMER in the Rupiah currency to the account of PT.
                        Buana Lintas Media with Account Number: 137-0005141748,
                        Bank Mandiri Cabang Katamso Yogyakarta, transfer costs
                        paid by the CUSTOMER.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>4.</p>
                    </td>
                    <td>
                      <p>
                        Jangka waktu/kontrak berlangganan minimal selama 12
                        bulan, berlaku sejak diterbitkannya Berita Acara
                        Aktivasi (BAA). / Minimum subscription period for 12
                        months, effective from the the date of issuance Minutes
                        Activation (BAA).
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>5.</p>
                    </td>
                    <td>
                      <p>
                        Apabila PELANGGAN melakukan pemutusan layanan sebelum 12
                        bulan setelah menandatangani Formulir Berlangganan ini,
                        maka dikenakan sanksi pembatalan sebesar 50% dari total
                        sisa biaya berlangganan dalam 12 bulan. / If CUSTOMER
                        terminate the service before 12 months after signing the
                        Subscription Form, it shall be liable to cancellation of
                        50% of the total remaining cost of the subscription
                        within 12 months
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="undertaking">
              <table>
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">UNDERTAKING</span>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        Dengan ini kami menyatakan bahwa data-data dan informasi
                        yang kami berikan di atas adalah benar adanya. Kami
                        telah memahami ketentuan dan syarat-syarat berlangganan
                        Jasa Buanalintas beserta lampiran-lampirannya yang
                        merupakan satu kesatuan yang tak terpisahkan dengan
                        Formulir Berlangganan ini. Dengan menandatangani
                        Formulir Berlangganan ini maka dengan ini pula kami
                        menyatakan menerima dan menyetujui pemberlakukan
                        Ketentuan Berlangganan Jasa Buanalintas yang dimaksudkan
                        ini tanpa kecuali.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        We hereby acknowledge that the information given herein
                        is true and correct. We have read and accept the Terms
                        and Conditions of Buanalintas Services, including all
                        attachment, which is an inseperable part of this
                        Subscription Form. By signing this Subscription Form, we
                        hereby acknowledge that we accept and agree to be bound
                        to the Buanalintas Services Terms and Conditions without
                        exception.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="sign">
              <div className="pt-buana">
                <h4>*) PT. Buana Lintas Media</h4>
              </div>
              <div className="pt">
                <h4>*) PT. </h4>
              </div>
              <div className="line-pt-buana">
                <input type="text" />
              </div>
              <div className="line-pt">
                <input type="text" />
              </div>
            </div>

            <div className="filled-by">
              <table className="filled-table">
                <thead>
                  <th colSpan="2">
                    <span className="font-bold">Diisi oleh Buanalintas</span>{" "}
                    <span className="font-italic">/ Filled by Buanalintas</span>
                  </th>
                </thead>
                <tbody>
                  <table style={{ width: "300px" }}>
                    <tr>
                      <td>Marketing</td>
                      <td>: Bowo</td>
                    </tr>
                    <tr>
                      <td>Tanggal / Date</td>
                      <td>: 02/20/2021</td>
                    </tr>
                  </table>
                </tbody>
                <div className="dokumen">
                  <span className="font-bold">
                    Kelengkapan dokumen pelanggan baru
                  </span>{" "}
                  <span className="font-italic">
                    / Documents Requirements for New Customer
                  </span>
                  <div className="input-document">
                    <div className="inp">
                      <input type="checkbox" id="internet" />
                      <label htmlFor="internet">
                        Fotokopi KTP / Paspor / Copy of ID / Passport
                      </label>
                    </div>
                    <div className="inp">
                      <input type="checkbox" id="internet" />
                      <label htmlFor="internet">
                        Surat Kuasa (apabila dikuasakan)
                      </label>
                    </div>
                    <div className="inp">
                      <input type="checkbox" id="internet" />
                      <label htmlFor="internet">
                        Fotokopi NPWP / Copy of Tax Registered Number
                      </label>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Template;
