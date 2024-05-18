import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllEventsThunk } from './redux/events/operations.js';
import { getAllParticipantsThunk } from './redux/participants/operations.js';
import Layout from './components/Layout/Layout.jsx';
import EventsPage from './pages/EventsPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
// import { setEventId } from './redux/events/slice.js';
import EventParticipantsPage from './pages/EventParticipantsPage.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsThunk());
    dispatch(getAllParticipantsThunk());
    // dispatch(setEventId(null));
  }, [dispatch]);

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<EventsPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/participants/:eventId'} element={<EventParticipantsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
