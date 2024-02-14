import React from "react";
import styled from "styled-components";
import Header from "./shared/components/header";
import Router from "./router/router";
import Footer from "./shared/components/footer";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
