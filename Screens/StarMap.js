import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class StarMapScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Star Map</Text>

                <Text style={styles.text}>{"Sorry :( The content is yet to be updated. Check back again later!"}</Text>
                
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.props.navigation.navigate('Home')
                }}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundImage:"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e0f95975-50d8-40f0-b4bd-419d10589d0a/d268sw1-0657573c-4c1f-4787-acce-d1f3ec0654b7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwZjk1OTc1LTUwZDgtNDBmMC1iNGJkLTQxOWQxMDU4OWQwYVwvZDI2OHN3MS0wNjU3NTczYy00YzFmLTQ3ODctYWNjZS1kMWYzZWMwNjU0YjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9_2vRTRoBdKMupFZ3SeXZuL_om4kErYPGLJm4jIxURk')"
    },
    headerText:{
        fontSize:50,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
    },
    button:{
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:300,
        backgroundColor:"orange",
        width:200,
        height:50,
        borderRadius:20
    },
    buttonText:{
        fontSize:20,
        color:"black",
        textAlign:"center"
    },
    text:{
        fontSize:30,
        color:"black",
        textAlign:"center",
        color:"white",
        marginTop:100
    }
})
