import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { RecipePage } from "./pages/recipe-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/recipe/:id" Component={RecipePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
