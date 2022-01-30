import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ProductsProvider } from "./contexts/ProductsContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import store from "./store/index";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <CategoryProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ProductsProvider>
      </CategoryProvider>
    </Provider>
  );
}

export default App;
