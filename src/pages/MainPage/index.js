import axios from "axios";
import { React } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../component/Form";
import Navbar from "../../component/Navbar";
import "./style.css";

function MainPage() {
  const history = useHistory();

  const postHandler = (newData) => {
    axios
      .post(
        "https://subsform-buana-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",
        {
          newData,
        }
      )
      .then(() => {
        history.replace("/berhasil");
      });
  };

  return (
    <div className="main-page">
      <Form postData={postHandler} />
    </div>
  );
}

export default MainPage;
