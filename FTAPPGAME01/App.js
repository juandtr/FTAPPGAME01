// App.js
import React, { useState } from 'react';
import SplashScreen from './component/SplashScreen';
import GameTable from './component/GameTable';
import StatsScreen from './component/StatsScreen';
import HomePage from './component/HomePage';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [atGameTable, setAtGameTable] = useState(false);
  const [atStatsScreen, setAtStatsScreen] = useState(false);
  const [mauricioScore, setMauricioScore] = useState(0);
  const [juanScore, setJuanScore] = useState(0);
  const [mauricioLoss, setMauricioLoss] = useState(0);
  const [juanLoss, setJuanLoss] = useState(0);
  const [mauricioGain, setMauricioGain] = useState(0);
  const [juanGain, setJuanGain] = useState(0);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleGoToMesa = () => {
    setAtGameTable(true);
  };

  const handleExitTable = () => {
    setAtGameTable(false);
  };

  const handleGoToSplashScreen = () => {
    setGameStarted(false);
    setAtGameTable(false);
  };

  const handleGoToStatsScreen = () => {
    setAtStatsScreen(true); 
    const mauricioGain = Math.floor(Math.random() * 100000);
    const juanGain = Math.floor(Math.random() * 100000);
    const mauricioLoss = Math.floor(Math.random() * 100000);
    const juanLoss = Math.floor(Math.random() * 100000);
    setMauricioGain(mauricioGain);
    setJuanGain(juanGain);
    setMauricioLoss(mauricioLoss);
    setJuanLoss(juanLoss);
  };

  const handleGoBackFromStatsScreen = () => {
    setAtStatsScreen(false); 
  };
  
  return (
    <>
      {!gameStarted ? (
        <SplashScreen onStartGame={handleStartGame} />
      ) : atGameTable ? (
        <GameTable onExitTable={handleExitTable} />
      ) : atStatsScreen ? (
        <StatsScreen 
          onGoBack={handleGoBackFromStatsScreen} 
          playerScores={{ 
            'Mauricio': mauricioScore, 
            'Juan': juanScore,
            'MauricioGain': mauricioGain,
            'JuanGain': juanGain,
            'MauricioLoss': mauricioLoss,
            'JuanLoss': juanLoss
          }}
        />
      ) : (
        <HomePage
          onGoToMesa={handleGoToMesa}
          onGoToSplashScreen={handleGoToSplashScreen}
          onGoToStatsScreen={handleGoToStatsScreen}
        />
      )}
    </>
  );
}

export default App;
