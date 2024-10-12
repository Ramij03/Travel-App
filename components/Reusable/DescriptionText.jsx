import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TEXT } from '../../constants/theme'

const DescriptionText = ({lines,text}) => {
  return (
    <Text numberOfLines={lines} styles={styles.desc}>{text}</Text>
  )
}

export default DescriptionText

const styles = StyleSheet.create({
    desc:{
        paddingVertical:10,
        fontFamily:"regular",
        textAlign:'justify',
        fontSize:TEXT.medium,
    }
})