import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, SafeAreaView, StatusBar, Platform, Image, TouchableOpacity, ScrollView } from 'react-native';


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
                            <Text style={styles.titleText}>EVERYTHING ABOUT SPACE</Text>
                        </View>

                        <ScrollView>
                        <TouchableOpacity 
                            style={styles.routeCardLeft}
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
                            style={styles.routeCardRight}
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
                            style={styles.routeCardLeft}
                            onPress={()=>{
                                this.props.navigation.navigate('Daily Pics')
                            }}>
                            <Text style={styles.routeText}>Daily Pics</Text>
                            <Image
                                source={require('../assets/daily_pictures.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.routeCardRight}
                            onPress={()=>{
                                this.props.navigation.navigate('Iss Location')
                            }}>
                            <Text style={styles.routeText}>Iss Location</Text>
                            <Image
                                source={require('../assets/iss_icon.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.routeCardLeft}
                            onPress={()=>{
                                this.props.navigation.navigate('Meteors')
                            }}>
                            <Text style={styles.routeText}>Meteors</Text>
                            <Image
                                source={require('../assets/meteor_icon.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={styles.routeCardRight}
                            onPress={()=>{
                                this.props.navigation.navigate('Updates')
                            }}>
                            <Text style={styles.routeText}>Updates</Text>
                            <Image
                                source={require('../assets/rocket_icon.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>
                        </ScrollView>
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
        paddingBottom:50,
        padding:10,
    },
    androidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },
    titleText:{
        fontSize:30,
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
        fontSize:20,
        fontWeight:"bold",
        color:"darkviolet",
        marginTop:10,
        padding:10,
        textAlign:"center",
    },
    routeCardLeft:{
        flex:0.5,
        marginTop:50,
        borderRadius:50,
        backgroundColor:"white",
        width:250,
        height:80,
        alignSelf:"flex-start"
    },
    routeCardRight:{
        flex:0.5,
        marginTop:50,
        borderRadius:50,
        backgroundColor:"white",
        width:250,
        height:80,
        alignSelf:"flex-end"
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

