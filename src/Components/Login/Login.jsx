import {FaUser, FaLock} from 'react-icons/fa';
import './Login.css'

const Login = () => {
  return (

    <div className="container">

        <form action="">

            <h1>Acesse o sistema</h1>

            <div>
                <input type="email" placeholder='E-mail' />
                <FaUser className='icon' />
            </div>
                
            <div>
                <input type="password" placeholder='Senha' />
                <FaLock className='icon' />
            </div>
                   
            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                    <a href="#">Esqueceu a senha?</a>
                </label>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma coonta? <a href="#">Registrar</a></p>
            </div>
            
        </form>

    </div>

  )
}

export default Login