import React, { useEffect, useState } from "react";

// Component
import SubscriptionFee from "../parts/SubscriptionFee";
import Filledby from "../parts/FilledBy";
import DocumentReq from "../parts/DocumentReq";

function FormMarketing({ id }) {
  const [subscriptionFee, setSubscriptionFee] = useState({});

  const getSubscriptionFee = (data) => {
    setSubscriptionFee(data);
  };

  return (
    <div className="main mt-5">
      <div className="container">
        <form>
          {/* Biaya Berlanggana */}
          <SubscriptionFee getSubscriptionFee={getSubscriptionFee} />

          {/* Diisi Oleh */}
          <Filledby />

          {/* Kelengkapan Dokumens */}
          <DocumentReq />
        </form>
      </div>
    </div>
  );
}

export default FormMarketing;
