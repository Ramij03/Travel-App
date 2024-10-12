import { StyleSheet, Text} from 'react-native'
import React from 'react'

const ReusableText = ({text,family,size,color,align}) => {
  return (
    <Text style={styles.textStyle(family,size,color,align)}>{text}</Text>
  )
}

export default ReusableText

const styles = StyleSheet.create({
    textStyle: (family,size,color,align) => ({
        fontSize:size,
        fontFamily:family,
        color:color,
        textAlign: align,
    }),
})