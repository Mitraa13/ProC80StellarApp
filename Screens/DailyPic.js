import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class DailyPicScreens extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Daily Pictures</Text>

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
        backgroundImage:"url('https://wallpapercave.com/wp/wp2601899.jpg')"
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
