import React, { useState } from "react";
import AdvancedForm from "./AdvancedForm";
import BasicForm from "./BasicForm";
import "./Parent.css";

function Parent() {
  const [view, setView] = useState("basic");
  //   console.log("view::", view);
  return (
    <>
      <div className="parent">
        <nav>
          <h3 onClick={() => setView("basic")}>Basic</h3>
          <h3 onClick={() => setView("Advanced")}>Advanced</h3>
        </nav>
        {view === "basic" ? <BasicForm /> : <AdvancedForm />}
      </div>
    </>
  );
}

export default Parent;
