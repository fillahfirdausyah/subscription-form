import React from "react";

function BillingAddress() {
  return (
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
  );
}

export default BillingAddress;
