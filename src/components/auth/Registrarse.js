import React, { useState, useContext, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import AlertaContext from '../../context/alertas/alertaContext'; 
import AuthContext from '../../context/auth/authContext';

const Registrarse = (props) => {
    //EXTRAER CONTEXT   
    const alertaContext = useContext(AlertaContext); 
    const { alerta, mostrarAlerta } = alertaContext
    const authContext = useContext(AuthContext); 
    const { registrarUsuario, msg, autenticado } = authContext;

    //EN CASO DE QUE EL USUARIO SE HAYA AUTENTICADO EXITOSO O ERROR    
    useEffect(() => {
        if (autenticado) { 
            props.history.push('/dashboard'); 
        } 
        if (msg) { 
            mostrarAlerta(msg.msg, msg.categoria); 
        }
    }, [msg, autenticado, props.history]);
    
    //STATE INICIO SESION    
    const [usuario, setUsuario] = useState({ 
        nombre: '', 
        email: '', 
        dni: '',
        galpon: '',
        cargo: '',
        password: '', 
        confirmarPassword: '' 
    });
    const { nombre, email, dni, galpon, cargo ,password, confirmarPassword } = usuario;

    const onChange = (e) => { 
        setUsuario({ 
            ...usuario, 
            [e.target.name]: e.target.value 
        }); 
    }    
    const onSubmit = (e) => {
        e.preventDefault();
        //VALIDAR       
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmarPassword.trim() === '' || dni.trim() === ''|| galpon.trim() === '' || cargo.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        if(isNaN(dni) || isNaN(galpon)){
            mostrarAlerta('El campo dni o galpon debe ser numerico', 'alerta-error');
            return;
        }
        //VALIDAR PASSWORD MINIMO  
        if (password.length < 6) {
            mostrarAlerta('El password debe ser de al menos de 6 caracteres', 'alerta-error');
            return;
        }
        //VALIDAR PASSWORD IGUALES        
        if (password !== confirmarPassword) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }
        //ACTION        
        //registrarUsuario({ nombre, email, password });
    }

    return ( 
        <div className="form-usuario">
            
            {alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null}

            <div className="contenedor-form sombra-dark">
                <h1>Crear una cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre"
                            placeholder="Ingresa tu Nombre"
                            value={nombre}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="dni">DNI</label>
                        <input 
                            type="text" 
                            name="dni" 
                            id="dni"
                            placeholder="Ingresa tu dni"
                            value={dni}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="dni">N# Galpon</label>
                        <input 
                            type="text" 
                            name="galpon" 
                            id="galpon"
                            placeholder="Ingresa N# de galpon"
                            value={galpon}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="cargo">Cargo</label>
                        <select 
                            name="cargo"
                            value={cargo}
                            onChange={onChange}
                        >
                            <option value="">--Selecciona--</option>
                            <option value="jefeproduccion">Jefe/a Produccion</option>
                            <option value="admin">Administrador/a</option>
                            <option value="operario">Operario/a</option>
                            <option value="vendedor">Vendedor/a</option>
                        </select>
                        
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Ingresa tu password"
                            value={password}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Confirmar Password</label>
                        <input 
                            type="password" 
                            name="confirmarPassword" 
                            id="password"
                            placeholder="Repite tu password"
                            value={confirmarPassword}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit" 
                            value="Registrarme"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Regresar al Log In 
                </Link>
            </div>
        </div>
     );
} 

    export default Registrarse;