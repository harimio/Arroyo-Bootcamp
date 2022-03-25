import { useEffect, useState } from "react";
import { SearchComponent } from "./components/Search/search.component";
import { GifContainer } from "./components/GifContainer/gifContainer.component";
import { getData } from "./services/api.service";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(value).then((data) => setData(data.data));
  }, [value]);

  return (
    <div className="App">
      <SearchComponent value={value} setValue={setValue} />
      <GifContainer data={data} />
    </div>
  );
}

export default App;
