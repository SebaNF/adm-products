import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import { Routes, Route, Link } from "react-router-dom";
import Details from './views/Details';
import CreateProduct from './views/CreateProduct';
import EditProduct from './views/EditProduct';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/create"}>Crear Producto</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/:id' element={<Details></Details>}/>
        <Route path='/create' element={<CreateProduct></CreateProduct>}/>
        <Route path='/edit/:id' element={<EditProduct></EditProduct>}/>
      </Routes>
      
    </div>
  );
}

export default App;
