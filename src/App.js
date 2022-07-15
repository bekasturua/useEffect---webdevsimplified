import React, { useState, useEffect } from "react";
function App() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("resource changed");

    return () => {
      console.log("retunr from resource change");
    };
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("coments")}>coments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
