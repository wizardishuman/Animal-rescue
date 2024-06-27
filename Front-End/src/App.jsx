import React from "react";
import Nav from "./custom/Nav";
import Main from "./custom/Main";
import Card from "./custom/Card";
import About from "./custom/About";
import Form from "./custom/Form";
import Incident from "./custom/Incident";
const App = () => {
  return (
    <div className=" h-full bg-purple-50">
      <Nav />
      <Main />
      <Card />
      <About />
      <div className=" flex items-center justify-center flex-col m-10 w-ful">
        <h1 className=" font-bold text-3xl text-indigo-600" id="report">
          Report A Incident
        </h1>

        <Form />
      </div>
      <Incident />
    </div>
  );
};

export default App;
