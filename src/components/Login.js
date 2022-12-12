import {useState} from 'react'; 
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import '../style/login.css';
import llama from '../img/llama.png'
import logo from '../img/logo.png'
export function Login(){

    const [user, setUser] = useState({
        email: '', 
        password: ''
    })

    const {login} = useAuth(); 
    const navigate = useNavigate(); 

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async e =>  {
        e.preventDefault();
        try{
            await login(user.email, user.password)
            navigate('/')
        }catch(error)
        {
            alert(error)
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

                <button>Ingresar</button>
                <p><Link to='/Register'>Registrarse</Link></p>
            </form>
            <img className='llama' src={llama}/>
            <div className="circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            </div>
        </div>
    )
}

export default Login; 