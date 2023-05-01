/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Divyanshu Yadav",
  title: "Cloud Developer and Web3 enthusiast",
  email: "divyanshuy2782@gmail.com",
  gitHub: "https://github.com/dky278",
  instagram: "https://instagram.com/divyanshu_278?igshid=ZDdkNTZiNTM=",
  linkedIn: "https://www.linkedin.com/in/divyanshu-yadav-2097b9209",
  medium: "",
  twitter: "https://twitter.com/divyanshu278?t=JS8h5CwrSIMH5QWFQE-BEA&s=09",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
