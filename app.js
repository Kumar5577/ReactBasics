


const heading = React.createElement(
        "div",
        {id : "heading"},
        [React.createElement("div",{id:"child-1",key:"child-1"}),[
                React.createElement("h2",{key : "1"},"I'm from heading2"),
        React.createElement("p",{key : "2"},"I'm heading2")],
        React.createElement("div",{id:"child-2",key:"child-2"}),[
                React.createElement("h2",{key : "3"},"I'm from child2"),
        React.createElement("p",{key : "4"},"I'm child2")]]
        );
      
      const root = ReactDOM.createRoot(document.getElementById("root"));
       console.log("hi");
      root.render(heading);
     
     