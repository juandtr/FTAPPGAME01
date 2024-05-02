import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const StatsScreen = ({ onGoBack, playerScores }) => {
  return (
    <ImageBackground
      source={require("../assets/FTAPPGAME (5).png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onGoBack}
          style={[styles.backButton, styles.topRightButton]}
        >
          <Text style={[styles.backButtonText, { color: "white" }]}>
            Volver
          </Text>
        </TouchableOpacity>
        <View style={styles.statsContainer}>
          <Text style={[styles.statsText, { color: "white" }]}>
            Puntaje de Mauricio:{" "}
            <Text style={styles.score}>{playerScores["Mauricio"]}</Text>
          </Text>
          <Text style={[styles.statsText, { color: "white" }]}>
            Ganancia de Mauricio:{" "}
            <Text style={styles.score}>{playerScores["MauricioGain"]}</Text>
          </Text>
          <Text style={[styles.statsText, { color: "white" }]}>
            Pérdida de Mauricio:{" "}
            <Text style={styles.score}>{playerScores["MauricioLoss"]}</Text>
          </Text>
          <Text style={[styles.statsText, { color: "white" }]}>
            Puntaje de Juan:{" "}
            <Text style={styles.score}>{playerScores["Juan"]}</Text>
          </Text>
          <Text style={[styles.statsText, { color: "white" }]}>
            Ganancia de Juan:{" "}
            <Text style={styles.score}>{playerScores["JuanGain"]}</Text>
          </Text>
          <Text style={[styles.statsText, { color: "white" }]}>
            Pérdida de Juan:{" "}
            <Text style={styles.score}>{playerScores["JuanLoss"]}</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 80,
    right: 20,
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  statsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  statsText: {
    fontSize: 18,
    marginVertical: 5,
  },
  score: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    backgroundColor: "green",
  },
});

export default StatsScreen;
