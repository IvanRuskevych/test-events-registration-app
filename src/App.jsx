import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEventsThunk } from "./redux/events/operations.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EventsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
