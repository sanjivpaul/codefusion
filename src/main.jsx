import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/Store.jsx";
import { Provider } from "react-redux";

// import { persistStore } from "redux-persist";
import App from "./App.jsx";

// let persistor = persistStore(store);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);  
