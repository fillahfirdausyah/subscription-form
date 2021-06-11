import { React, useState } from "react";
import Form from "../../component/Form";
import Navbar from "../../component/Navbar";
import "./style.css";

function MainPage() {
  const [data, setData] = useState({})
  console.log(data)

  return (
    <div className="main-page">
      <Form setData={setData}/>
    </div>
  );
}

export default MainPage;
