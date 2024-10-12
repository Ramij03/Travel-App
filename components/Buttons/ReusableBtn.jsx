import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'

const ReusableBtn = ({onPress, btnText, textColor,width,backgroundcolor,borderWidth,borderColor}) => {
  return (
   <TouchableOpacity
   style={styles.btnStyle(width,backgroundcolor,borderWidth,borderColor)}
    onPress={onPress}
   >
    <Text style={styles.btnText(textColor)}>{btnText}</Text>
   </TouchableOpacity>
  )
}

export default ReusableBtn

const styles = StyleSheet.create({
    btnText: (textColor)  => ({
        fontFamily:"bold",
        color:textColor,
        fontSize:SIZES.medium,
    }),
    btnStyle: (width,backgroundcolor,borderWidth,borderColor) =>({
        width:width,
        backgroundColor:backgroundcolor,
        justifyContent:'center',
        alignItems:'center',
        height:45,
        borderRadius: SIZES.small,
        borderColor:borderColor,
        borderWidth:borderWidth
    }),
})