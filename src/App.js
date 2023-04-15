import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Hearder/Hearder";
import Homepage from "./Pages/Homepage/Homepage";
import MovieList from "./components/movieList/movieList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="movie/:id" element={<h1>Movies List</h1>}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Errodfgdgfdgfr Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
