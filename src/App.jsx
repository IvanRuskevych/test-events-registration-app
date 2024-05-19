import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllEventsThunk } from './redux/events/operations.js';
import { getAllParticipantsThunk } from './redux/participants/operations.js';
import Layout from './components/Layout/Layout.jsx';
import EventsPage from './pages/EventsPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import EventParticipantsPage from './pages/EventParticipantsPage.jsx';
import { resetEvents, setEventId } from './redux/events/slice.js';

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      dispatch(resetEvents([]));
      dispatch(getAllEventsThunk({}));
      dispatch(getAllParticipantsThunk());
      dispatch(setEventId(null));
      dispatch(setEventId(null));
    }
  }, [dispatch, pathname]);

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<EventsPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/participants'} element={<EventParticipantsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
