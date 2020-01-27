import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#000000", "#434343"]
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#2c3e50", "#bdc3c7"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#304352", "#d7d2cc"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#64b3f4", "#c2e59c"]
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#BE93C5", "#7BC6CC"]
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#636FA4", "#E8CBC0"]
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#C5796D", "#DBE6F6"]
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#00223E", "#FFA17F"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#616161", "#9bc5c3"]
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#3f4c6b", "#606c88"]
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#00416A", "#E4E5E6"]
    },
    Tornado: {
        iconName: "weather-windy-variant",
        gradient: ["#292E49", "#536976"]
    },
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#f7797d", "#FBD786", "#C6FFDD"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#acb6e5", "#86fde8"]
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={100}
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ].isRequired)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})