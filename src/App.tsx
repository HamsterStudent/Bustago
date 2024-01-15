import React from "react";
import styled from "styled-components";
import Header from "./shared/components/header";
import Router from "./router/router";
import Footer from "./shared/components/footer";

const Layout = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Router />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
