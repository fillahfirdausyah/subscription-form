import React from "react";
import PreviewPage from "./pages/PreviewPage";

const ref = React.createRef();

function App() {
  return (
    // <PDFViewer width="100%" height="1000">
    /* <Quixote /> */
    // </PDFViewer>

    <div ref={ref}>
      <PreviewPage />
    </div>
  );
}

export default App;
