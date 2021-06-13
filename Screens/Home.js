import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>STELLAR APP</Text>

                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.props.navigation.navigate('Space Crafts')
                }}>
                    <Text style={styles.buttonText}>Space Crafts</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.props.navigation.navigate('Daily Pics')
                }}>
                    <Text style={styles.buttonText}>Daily Pictures</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.props.navigation.navigate('Star Map')
                }}>
                    <Text style={styles.buttonText}>Star Map</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundImage:"url('https://static.tumblr.com/ef59256b5749ab2df40dad799dbc32df/rkicm4h/Z48ne5kl2/tumblr_static_c8t2u4x6qu0c84o4kogwg8o8w.jpg')"
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
        marginTop:100,
        backgroundColor:"orange",
        width:200,
        height:50,
        borderRadius:20
    },
    buttonText:{
        fontSize:20,
        color:"black",
        textAlign:"center"
    }
})
