import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./App.css";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import ProductListing from "./components/productListing";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      // refetchOnWindowFocus: false,
      // retry: false,
    },
  },
});

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="container">
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      </div>
      <ProductListing />
      <Footer />
    </QueryClientProvider>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
