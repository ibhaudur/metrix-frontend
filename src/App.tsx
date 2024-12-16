import { BrowserRouter } from "react-router-dom";
import AllRoute from "./route/AllRoute";
import { Suspense } from "react";
import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loding...</div>}>
        <AllRoute />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
