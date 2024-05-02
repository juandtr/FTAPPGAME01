import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ onStartGame }) => {
  return (
    <ImageBackground source={require('../assets/FTAPPGAME (4).png')} style={styles.background}>
      <View style={[styles.container, styles.startButtonContainer]}>
        <TouchableOpacity onPress={onStartGame} style={[styles.startButton, {backgroundColor: 'transparent'}]}>
          <Text style={styles.startButtonText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  startButtonContainer: {
    marginBottom: 150,
  },
  startButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 250, 
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
