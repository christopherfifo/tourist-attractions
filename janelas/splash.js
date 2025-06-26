import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { splashStyle } from '../css/Splash'; 
export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      navigation.replace('Login');
    }, 4000);
  }, []);

  const styles = splashStyle;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={styles.ser}>MINISTÉRIO SER</Text>
        <Text style={styles.filho}>FILHO</Text>
        <Text style={styles.bambi}>RESIDENCIAL BAMBI</Text>
      </Animated.View>
    </View>
  );
}
