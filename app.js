import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1 id="heading">This is from Jsx</h1>
//React Component
        const headingComponent = (
                <h1>This is React Element</h1>
        );
      const root = ReactDOM.createRoot(document.getElementById("root"));
       console.log("hi");
       const Title = () => <h1>This is React Component</h1>;
       const HeadingComponent2 = () => (
        <div><p>This is React Component</p>
        {headingComponent}
        {Title()}
        </div>
        );
      root.render(<HeadingComponent2/>);
     
     