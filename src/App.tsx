// React-Router-Dom
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// Components
import HomePage from "./components/HomePage";
import RQSuperHeroes from "./components/RQSuperHeroes";
import SuperHeroesPage from "./components/SuperHeroesPage";
import Navbar from "./components/Navbar";

// React-Query
import { QueryClient, QueryClientProvider } from "react-query";

// Styles
import "./App.css";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
