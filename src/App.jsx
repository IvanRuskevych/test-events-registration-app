import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import EventsPage from "./pages/EventsPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EventsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
