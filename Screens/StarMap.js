import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Platform, SafeAreaView, TextInput, Image } from 'react-native';
import axios from "axios";
import MapView, { Marker } from 'react-native-maps';


export default class StarMapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location:{},
            isRefresh: false,
            latitude:'',
            latitude:'',
        };
    }

    componentDidMount() {
        this.getIssLocation()
    }

    getIssLocation = () => {
        axios
            .get("https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }


    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.androidSafeArea} />

                <Text style={styles.headerText}>STAR MAP</Text>

                <TextInput
                    placeholder="Enter your Latitude"
                    placeholderTextColor="#fff"
                    style={styles.textInput}
                    onChangeText={(text)=>{
                        this.setState({
                            latitude:text
                        })
                    }}
                    value={this.state.latitude}
                />
                <TextInput
                    placeholder="Enter your Longitude"
                    placeholderTextColor="#fff"
                    style={styles.textInput}
                    onChangeText={(text)=>{
                        this.setState({
                            longitude:text
                        })
                    }}
                    value={this.state.longitude}
                />

                
                        <View style={styles.mapContainer}>
                            <MapView
                                style={styles.map}
                                region={{
                                    latitude: this.state.latitude,
                                    longitude: this.state.longitude,
                                    latitudeDelta: 100,
                                    longitudeDelta: 100
                                }}
                            >
                                <Marker
                                    coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
                                >
                                    <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50 }} />
                                </Marker>
                            </MapView>
                        </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#1F0024",
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
    },
    textInput:{
        height:40, 
        width:250, 
        borderRadius:30, 
        borderWidth:1, 
        alignSelf:"center", 
        alignItems:"center", 
        padding:10, 
        marginTop:30,
        textAlign:"center",
        color:"white",
        borderColor:"white"
    },
    mapContainer: {
        flex: 0.6
    },
    map: {
        width: "100%",
        height: "100%"
    }
})
