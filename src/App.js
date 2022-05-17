import './App.css';
import Products from './components/Products';
import { Link } from "react-router-dom"

function App() {
  return (
    <nav>

      <Link to="/produit">Boutique</Link>
      <Link to="/vitrine">Vitrine</Link>
    </nav>
  );
}

export default App;
