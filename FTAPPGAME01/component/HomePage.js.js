import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomePage = ({ onGoToMesa, onGoToSplashScreen, onGoToStatsScreen }) => {
  const handleGoToMesa = () => {
    onGoToMesa();
  };

  const handleGoToSplashScreen = () => {
    onGoToSplashScreen();
  };

  const handleGoToStatsScreen = () => {
    onGoToStatsScreen();
  }

  return (
    <ImageBackground source={require('../assets/FTAPPGAME (7).png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>📋</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleGoToMesa}>
            <Text style={styles.menuText}>🎲</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleGoToStatsScreen}>
            <Text style={styles.menuText}>📊</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleGoToSplashScreen}>
            <Text style={styles.menuText}>🚪</Text> 
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.bottomButton} onPress={handleGoToMesa}>
            <Text style={styles.bottomButtonText}>Iniciar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>YouTube</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 500,
    width: '90%', 
  },
  menuItem: {
    backgroundColor: 'red', 
    padding: 10,
    borderRadius: 15,
  },
  menuText: {
    fontSize: 24, 
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
  bottomButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 150, 
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomePage;
