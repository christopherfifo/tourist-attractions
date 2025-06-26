import React, { createContext, useState, useContext } from 'react';

<<<<<<< HEAD
// 1. Cria o Contexto
const AuthContext = createContext();

// 2. Cria o Componente Provedor
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = deslogado

  // Função de login (simulada)
=======

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

 
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
  const login = () => {
    setUser({ name: 'Usuário Logado' });
  };

<<<<<<< HEAD
  // Função de logout
=======
 
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
// 3. Hook customizado para facilitar o uso
=======
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
export const useAuth = () => {
  return useContext(AuthContext);
};