import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#000000", "#434343"],
        title: "Thunder and lightening",
        subtitle: "Watch out!!!"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "It's drizzling",
        subtitle: "Should we take an umbrella?"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#304352", "#d7d2cc"],
        title: "It's raining",
        subtitle: "Take an umbrella with you"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
        title: "It's snowing",
        subtitle: "Get ready for a snowball fight"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#BE93C5", "#7BC6CC"],
        title: "It's a little foggy",
        subtitle: "Watch out for the front"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#636FA4", "#E8CBC0"],
        title: "It's a smoky",
        subtitle: "Watch out for the front"
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#C5796D", "#DBE6F6"],
        title: "It's a hazy",
        subtitle: "Watch out for the front"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#00223E", "#FFA17F"],
        title: "It's a dusty",
        subtitle: "Get your mask ready"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#616161", "#9bc5c3"],
        title: "It's a foggy",
        subtitle: "Watch out for the front"
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "It's a sandy",
        subtitle: "Get your mask ready"
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#3f4c6b", "#606c88"],
        title: "It's a ashy",
        subtitle: "Get your mask ready"
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#00416A", "#E4E5E6"],
        title: "It's a Squally",
        subtitle: "It's dangerous outside the house"
    },
    Tornado: {
        iconName: "weather-windy-variant",
        gradient: ["#292E49", "#536976"],
        title: "It's a tornado",
        subtitle: "It's dangerous outside the house"
    },
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
        title: "The weather is nice",
        subtitle: "Come outside!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#acb6e5", "#86fde8"],
        title: "It's cloudy",
        subtitle: "We want to see the sky"
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
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
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
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "200",
        marginBottom: 0
    },
    subtitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "400"
    },
    textContainer: {
        paddingHorizontal: 20,
    }
})