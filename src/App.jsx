import './App.css';
import MainPage from './components/MainPage';
import League from './components/leagues/League';
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
      <Route path='league/:name' element={<League />} />
      <Route path='*' element={<h1>Not found</h1>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
