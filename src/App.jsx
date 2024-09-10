import { BrowserRouter } from "react-router-dom";
import DataProcessing from "./DataProcessing/DataProcessing";
import MainRouters from "./Routes/MainRouters";
import Theme from "./Theme/index";

function App() {
  return (
    <DataProcessing>
      <Theme>
        <BrowserRouter>
          <MainRouters />
        </BrowserRouter>
      </Theme>
    </DataProcessing>
  );
}

export default App;
