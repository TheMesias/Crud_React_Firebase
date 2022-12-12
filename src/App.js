import './App.css';
//importamos nuestros componentes
import Show from './components/Show';
import Create from './components/Create';
import Edit from './components/Edit';
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/protectRoutes";
//importamos el router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">    
     <BrowserRouter>
     <AuthProvider>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Show />
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/create' element={ <Create /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
      </Routes>
      </AuthProvider>
     </BrowserRouter> 
    </div>
  );
}

export default App;
