import './App.css';
import MainPage from './components/MainPage';
import LaLiga from './components/leagues/LaLiga';
import PremierLeague from './components/leagues/PremierLeague';
import Ligue1 from './components/leagues/Ligue1';
import Bundesliga from './components/leagues/Bundesliga';
import SerieA from './components/leagues/SerieA';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<MainPage />} />
      <Route path='spanish-primera-division' element={<LaLiga />} />
      <Route path='italian-serie-a' element={<SerieA />} />
      <Route path='french-ligue-1' element={<Ligue1 />} />
      <Route path='german-bundesliga' element={<Bundesliga />} />
      <Route path='english-premier-league' element={<PremierLeague />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
