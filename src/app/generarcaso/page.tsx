"use client";
import Image from 'next/image'
import img from '../../img/fondo2.jpg'
import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';

const Login = ({ onStudentLogin, onTeacherLogin }:any) => {
  const [userType, setUserType] = useState(''); // Para rastrear el tipo de usuario seleccionado

  const handleLogin = () => {
    if (userType === 'student') {
      onStudentLogin(); // Lógica de inicio de sesión para estudiantes
    } else if (userType === 'teacher') {
      onTeacherLogin(); // Lógica de inicio de sesión para profesores
    }
  };

  return (
    <div className=" h-screen overflow-hidden flex items-center justify-center "style={{backgroundSize:'100%', height:'100vh',backgroundImage:`url(https://www.linkpicture.com/q/fondoSalva.jpg)`}}>
      
      <div className="contact-form h-[50%] w-[20%] bg-white rounded shadow ">
          
          <form action="index.html "className='flex flex-col gap-4' >
            <div className='h-10 w-full bg-[#03102C] rounded-t'>

            <h3 className="title flex justify-center items-center text-white text-2xl">Genera tu caso</h3>
            </div>
            <div className="input-container flex justify-center items-center">
              <input type="text" name="name" className="input border-2 "placeholder='Nombre Usuario' />
              
              
            </div>
            <div className="input-container flex justify-center items-center">
              <input type="email" name="email" className="input border-2" placeholder='Correo' />
              
              
            </div>
            <div className="input-container flex justify-center items-center">
              <input type="tel" name="phone" className="input border-2" placeholder='Telefono' />
              
              
            </div>
            <div className="input-container textarea  flex justify-center items-center">
              <textarea style={{resize:"none"}} name="message" className="input border-2"></textarea>
              
              
            </div>
            <div className="input-container textarea  flex justify-center items-center text-white">
            <button type="submit"  className=" h-5 w-[75%] bg-[#0f04a2] text-white rounded shadow " style={{cursor:"pointer"}} >
              
              Adjuntar archivo
              
            </button>
              
            </div>
            <div className='flex justify-center items-center'>
              <button type="submit" value="Enviar" className=" h-10 w-[75%] bg-[#A90429] text-white rounded shadow " style={{cursor:"pointer"}} >
                Enviar
              </button>
            </div>
          </form>
        </div>
   </div>
  );
};

export default Login;
