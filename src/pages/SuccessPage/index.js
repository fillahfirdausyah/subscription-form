import React from "react";

function SuccessPage() {
  return (
    <div className="container">
      <div class="card text-white bg-dark-custom mb-3 card-custom phone-card text-center">
        <div class="card-header">Berhasil</div>
        <div class="card-body">
          <p className="card-text">
           Anda Sudah Mengisi Form, tunggu sampai diproses. <br />
           Anda bisa melihat preview pada tombol dibawah ini
          </p>
          <button className="btn btn-primary">Preview</button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
