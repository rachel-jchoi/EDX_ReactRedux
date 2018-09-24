import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import SetUp from "./set-up-react-redux";
import ConnectReact from "./connecting-react";

const rootElement = document.getElementById("root");
ReactDOM.render(<ConnectReact />, rootElement);
