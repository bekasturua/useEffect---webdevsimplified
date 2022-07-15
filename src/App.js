import React, { useState } from "react";
function App() {
  const [resourceType, setResourceType] = useState("posts");

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
