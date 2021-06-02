import React from "react";
import PreviewPage from "./pages/PreviewPage";

const ref = React.createRef();

function App() {
  return (
    // <PDFViewer width="100%">
    /* <PreviewPage /> */
    // </PDFViewer>

    <div ref={ref}>
      <PreviewPage />
    </div>
  );
}

export default App;
