import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

/*해당 파일은, App.js 파일에서 만든 구성 요소와 웹 브라우저 (index.html 파일)사이의 브리지 역할*/
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);