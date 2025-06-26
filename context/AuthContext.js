import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
const AuthContext = createContext();

// 2. Cria o Componente Provedor
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = deslogado

  // Função de login (simulada)
  const login = () => {
    setUser({ name: 'Usuário Logado' });
  };

  // Função de logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook customizado para facilitar o uso
export const useAuth = () => {
  return useContext(AuthContext);
};