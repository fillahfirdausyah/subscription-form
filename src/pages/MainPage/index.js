import axios from "axios";
import { React } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../component/Form";
import { database } from "../../firebase";
import "./style.css";

function MainPage() {
  const history = useHistory();

  const postHandler = async (data) => {
    const hasil = await database.ref("data/" + data.id).push({
      data,
    });

    console.log(hasil.key);
  };

  return (
    <div className="main-page">
      <Form postData={postHandler} />
    </div>
  );
}

export default MainPage;
