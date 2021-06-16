import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, Image , ScrollView} from 'react-native';
import { WebView } from 'react-native-webview';
import MapView, {Marker}  from 'react-native-maps';


export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }
    }
    render() {
        const { longitude, latitude } = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'
        return (
            <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ScrollView>
                <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center' }}>
                    <Text style={styles.titleText}>STAR MAP</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your longitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                longitude: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your latitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
                </View>
                
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom: 20, }}
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
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
    },
    mapContainer: {
        flex: 0.6
    },
    map: {
        width: "100%",
        height: "100%",
        marginTop:100,
    }
   
    
})