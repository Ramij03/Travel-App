
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AssetImage = ({source,width,height,mode}) => {
  return (
    <Image
        source={source}
        style={styles.image(width,height,mode)}
    />
  )
}

export default AssetImage

const styles = StyleSheet.create({
    image : (width,height,mode) => ({
        width:width,
        height:height,
        resizeMode:mode
    })
})