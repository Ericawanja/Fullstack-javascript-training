import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import counterReducer from "./redux/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
