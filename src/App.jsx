import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import Topbar from "./components/Topbar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // data fetching here
    fetch(`http://localhost:8080/hello`).then((response) =>
      console.log(response).then((actualData) => console.log(actualData))
    );
  }, []);
  return (
    <div className='App mx-20'>
      {/* <Topbar />
      <NoteList data={data} /> */}
      <h1>HELLO</h1>
    </div>
  );
}

export default App;
