

import { useState } from 'react'
import axios from 'axios'
import './Login.css'


export function Login({ onLoginSuccess, switchToRegister, switchToForgot }) {
  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
  correo,
  contraseña
})

      localStorage.setItem('correo', correo)
      onLoginSuccess(response.data)  // enviar datos usuario

    } catch (err) {
      setError(err.response?.data || 'Credenciales incorrectas')
    }
  }

  return (
    <div class="login-screen">
      <div className="card">
        <h4 className="title">Iniciar sesión</h4>
        <form onSubmit={handleSubmit}>
          {error && <p className="login-error">{error}</p>}

          <div className="field">
            <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
            </svg>
            <input
              type="email"
              className="input-field"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
            </svg>
            <input
              type="password"
              className="input-field"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>

          <button className="btn" type="submit">Ingresar</button>
          <a href="#" className="btn-link" onClick={switchToForgot}>
            ¿Olvidaste tu contraseña?
          </a>


          {/* botón para ir a registro */}
          <div className="switch-container">
            <p>¿No tienes cuenta?</p>
            <button className="switch-view" type="button" onClick={switchToRegister}>Regístrate</button>
          </div>
        </form>
      </div>




    </div>


  )
}
