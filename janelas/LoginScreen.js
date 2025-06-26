<<<<<<< HEAD
import React, { useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
<<<<<<< HEAD
  StyleSheet,
=======
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/Feather'; // Usaremos o ícone 'Feather'

export default function LoginScreen() {
  const { login } = useAuth(); // Pega a função de login do nosso contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o pressionamento do botão de login
  const handleLogin = () => {
    // Validação simples
=======
import {loginStyle} from '../css/login'
import Icon from 'react-native-vector-icons/Feather';

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha o e-mail e a senha.');
      return;
    }
<<<<<<< HEAD
    // No mundo real, você validaria o email e a senha contra uma API aqui
    console.log(`Tentando logar com: ${email}`);

    // Chama a função de login do contexto para mudar o estado da aplicação
    login();
  };

=======
    console.log(`Tentando logar com: ${email}`);
    login();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const styles = loginStyle

>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.innerContainer}>
<<<<<<< HEAD
          {/* Ícone/Logo */}
          <Icon name="map-pin" size={50} color="#007AFF" style={styles.logo} />

          {/* Título */}
=======
          <Icon name="map-pin" size={50} color="#007AFF" style={styles.logo} />

>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
          <Text style={styles.title}>Bem-vindo!</Text>
          <Text style={styles.subtitle}>
            Faça login para descobrir novos lugares.
          </Text>

<<<<<<< HEAD
          {/* Input de E-mail */}
=======
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
          <View style={styles.inputContainer}>
            <Icon name="mail" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Seu e-mail"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

<<<<<<< HEAD
          {/* Input de Senha */}
=======
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Sua senha"
              placeholderTextColor="#888"
<<<<<<< HEAD
              secureTextEntry // Esconde a senha
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Link de Esqueci a Senha */}
          <TouchableOpacity onPress={() => Alert.alert('Ops!', 'Função ainda não implementada.')}>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          {/* Botão de Login */}
=======
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={20}
                color="#666"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => Alert.alert('Ops!', 'Função ainda não implementada.')}
          >
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

<<<<<<< HEAD
          {/* Link para Criar Conta */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Não tem uma conta?</Text>
            <TouchableOpacity onPress={() => Alert.alert('Vamos lá!', 'Tela de cadastro em breve!')}>
=======
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Não tem uma conta?</Text>
            <TouchableOpacity
              onPress={() => Alert.alert('Vamos lá!', 'Tela de cadastro em breve!')}
            >
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
              <Text style={styles.signupLink}> Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
<<<<<<< HEAD

// Folha de estilos completa
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    width: '100%',
    height: 55,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    color: '#007AFF',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  signupText: {
    fontSize: 14,
    color: '#666',
  },
  signupLink: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
=======
>>>>>>> 2aa0ad483f398d29fd48ecbb6643017383e3f51c
