import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, SafeAreaView, StatusBar, Platform, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <SafeAreaView style={styles.androidSafeArea}/>

                    <ImageBackground 
                    source={require('../assets/stars.gif')}
                    style={styles.bgimg}
                    >
                        <Image
                            source={require('../assets/main-icon.png')}
                            style={styles.appIcon}
                        />

                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>STELLAR APP</Text>
                        </View>


                        <TouchableOpacity 
                            style={styles.routeCard}
                            onPress={()=>{
                                this.props.navigation.navigate('Space Crafts')
                            }}>
                            <Text style={styles.routeText}>Space Crafts</Text>
                            <Image
                                source={require('../assets/space_crafts.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity 
                            style={styles.routeCard}
                            onPress={()=>{
                                this.props.navigation.navigate('Star Map')
                            }}>
                            <Text style={styles.routeText}>Star Map</Text>
                            <Image
                                source={require('../assets/star_map.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity 
                            style={styles.routeCard}
                            onPress={()=>{
                                this.props.navigation.navigate('Daily Pics')
                            }}>
                            <Text style={styles.routeText}>Daily Pictures</Text>
                            <Image
                                source={require('../assets/daily_pictures.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    bgimg:{
        flex:1,
        resizeMode:'cover',
        paddingBottom:50
    },
    androidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        marginTop:10,
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",
    },
    routeText:{
        fontSize:25,
        fontWeight:"bold",
        color:"darkviolet",
        marginTop:10,
        paddingLeft:10,
        padding:10,
        textAlign:"center",
    },
    routeCard:{
        flex:0.25,
        marginLeft:20,
        marginRight:20,
        marginTop:50,
        borderRadius:50,
        backgroundColor:"white",
    },
    iconImage:{
        position:'absolute',
        height:90,
        width:90,
        resizeMode:'contain',
        right:-15,
        top:-37,
    },
    appIcon:{
        height:150,
        width:150,
        resizeMode:'contain',
        alignSelf:"center"
    }
})

