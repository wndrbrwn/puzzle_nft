import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<MintNft />} />
          <Route path="/" element={<SaleNft />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
