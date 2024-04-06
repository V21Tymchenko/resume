import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<div>HomePage</div>} />
      </Route>
    </Routes>
  );
}

export default App;
