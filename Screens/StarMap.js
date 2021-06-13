import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Platform,SafeAreaView, ImageBackground } from 'react-native';

export default class StarMapScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.androidSafeArea} />

                <ImageBackground 
                source={require('../assets/space.gif')}
                style={styles.bgimg}
                >
                <Text style={styles.headerText}>STAR MAP</Text>

                <Text style={styles.text}>{"Sorry :( The content is yet to be updated. Check back again later!"}</Text>
                </ImageBackground>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerText:{
        fontSize:50,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
    },
    bgimg:{
        flex:1,
        resizeMode:'cover',
        paddingBottom:50
    },
    androidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },
    text:{
        fontSize:30,
        color:"black",
        textAlign:"center",
        color:"white",
        marginTop:100
    }
})
