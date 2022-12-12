import {useState} from 'react'; 
import { useAuth } from '../context/authContext';
import {Link, useNavigate } from 'react-router-dom';
import '../style/login.css';
import llama from '../img/llama.png'
import logo from '../img/logo.png'
function Register(){

    const [user, setUser] = useState({
        email: '', 
        password: ''
    })

    const {signup} = useAuth(); 
    console.log(useAuth.bind);
    const navigate = useNavigate(); 

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async e =>  {
        e.preventDefault();
        try{
            await signup(user.email, user.password)
            navigate('/')
            console.log(useAuth);
            console.log(signup);
        }catch(error)
        {
            alert("Introduzca un correo valido e ingrese una contrasena de 6 o mas caracteres")
        }
    }
    return(
        <div className="container-form">
        <img className='logo' src={logo}/>
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' onChange={handleChange}></input>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange}></input>

            <button>Registrarse</button>
            <p><Link to='/Login'>Login</Link></p>
        </form>
        <img className='llama' src={llama}/>
            <div className="circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            </div>
        </div>
    )
}

export default Register; 