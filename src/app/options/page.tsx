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
    <div className='flex items-center justify-center' style={{backgroundSize:'100%', height:'100vh',backgroundImage:`url(https://www.linkpicture.com/q/fondoSalva.jpg)`}}>
        <div className='flex justify-center items-center'>
        
                <div className="input-container textarea  flex justify-center items-center text-white">
                     <button type="submit"  className=" h-12 w-[75%] bg-[#0f04a2] text-white rounded shadow " style={{cursor:"pointer"}} >
              
                        Adjuntar archivo
              
                     </button>
              
                </div>
                <div className='input-container textarea  flex justify-center items-center text-white'>
                    <button type="submit"  className=" h-12 w-[75%] bg-[#A90429] text-white rounded shadow " style={{cursor:"pointer"}} >

                            Enviar caso    

                    </button>
                </div>
        </div>
    </div>
  );
};

export default Login;