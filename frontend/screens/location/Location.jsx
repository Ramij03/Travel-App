import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView , {Marker} from 'react-native-maps'
const Location = () => {
  const coordinates={
    latitude: 37.78825,
    longitude: -122.4324,
    longitudeDelta:0.01,
    latitudeDelta:0.01,
  }
  return (
    <MapView initialRegion={coordinates} style={styles.mapStyle}>
      <Marker coordinate={coordinates} title='Your Location'/>
    </MapView>
  )
}

export default Location

const styles = StyleSheet.create({
  mapStyle:{
    ...StyleSheet.absoluteFillObject,
  }
})