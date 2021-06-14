import { React, useEffect, useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import Logo from "../../assets/BuanaLintas.png";
import "./style.css";
// Parts Component
import Information from "./parts/Information";
import TypeofOrder from "./parts/TypeofOrder";
import InformasiPerusahaan from "./parts/InformasiPerusahaan";
import Authorized from "./parts/Authorized";
import AuthorizedFinance from "./parts/AuthorizedFinance";
import BillingAddress from "./parts/BillingAddress";
import AuthorizedTechnical from "./parts/AuthorizedTechnical";
import ServiceOrder from "./parts/ServicesOrder";
import InstallationAddres from "./parts/InstallationAddress";
import SubscriptionFee from './parts/SubscriptionFee'
import Signs from './parts/Signs'

function Form(props) {
  // const [data, setData] = useState("");

  //
  const [typeofOrder, setTypeofOrder] = useState({});
  const [infoPerusahaan, setInfoPerusahaan] = useState({});
  const [authorized, setAuthorized] = useState({});
  const [authorizedFinance, setAuthorizedFinance] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [authorizedTechnical, setAuthorizedTechnical] = useState({});
  const [serviceOrder, setServiceOrder] = useState({});
  const [installationAddress, setInstallationAddress] = useState({});
  const [subscriptionFee, setSubscriptionFee] = useState({})
  const [client, setClient] = useState({})

  const getTypeofOrder = (data) => {
    // console.log(data)
    setTypeofOrder(data);
  };

  const getInfoPerushaan = (data) => {
    // console.log(data);
    setInfoPerusahaan(data);
  };

  const getAuthorized = (data) => {
    // console.log(data);
    setAuthorized(data);
  };

  const getAuthorizedFinance = (data) => {
    // console.log(data)
    setAuthorizedFinance(data);
  };

  const getBillingAddress = (data) => {
    setBillingAddress(data);
  };

  const getAuthorizedTechnical = (data) => {
    setAuthorizedTechnical(data);
  };

  const getServiceOrder = (data) => {
    setServiceOrder(data);
  };

  const getInstallationAddress = (data) => {
    setInstallationAddress(data);
  };

  const getSubscriptionFee = (data) => {
    setSubscriptionFee(data)
  }

  const getPtClient = (data) => {
    setClient(data)
  }

  const prosesHandler = (e) => {
    e.preventDefault();

    // setData(infoPerusahaan)
    const data = {
      typeofOrder,
      infoPerusahaan,
      authorized,
      authorizedFinance,
      billingAddress,
      authorizedTechnical,
      serviceOrder,
      subscriptionFee,
      client
    };

    props.setData(data);
  };

  return (
    <div className="main mt-5">
      <div className="container">
        <form onSubmit={prosesHandler}>
          {/* Informasi */}
          <Information />

          {/* Jenis Permintaan */}
          <TypeofOrder getTypeofOrder={getTypeofOrder}/>

          {/* Informasi Perusahaan Pelanggan */}
          <InformasiPerusahaan getInfoPerushaan={getInfoPerushaan} />

          {/* Penanggung Jawab Perusahaan */}
          <Authorized getAuthorized={getAuthorized}/>

          {/* Penanggung Jawab Keuangan */}
          <AuthorizedFinance getAuthorizedFinance={getAuthorizedFinance}/>

          {/* Alamat Penagihan */}
          <BillingAddress getBillingAddress={getBillingAddress} />

          {/* Penanggung Jawab Teknis */}
          <AuthorizedTechnical getAuthorizedTechnical={getAuthorizedTechnical}/>

          {/* Layanan yang diminta */}
          <ServiceOrder getServiceOrder={getServiceOrder}/>

          {/* Alamat Instalasi */}
          <InstallationAddres getInstallationAddress={getInstallationAddress}/>

          {/* Biaya Berlanggana */}
          <SubscriptionFee getSubscriptionFee={getSubscriptionFee}/>

          {/* Tanda Tangan */}
          <Signs getPtClient={getPtClient}/>

          <button type="submit" className="btn-proses">
            <DoneIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
