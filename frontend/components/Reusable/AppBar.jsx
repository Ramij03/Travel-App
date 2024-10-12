import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import {AntDesign} from '@expo/vector-icons'
import { COLORS,TEXT } from '../../constants/theme'
import ReusableText from './ReusableText'

const AppBar = ({color,title,color1,icon,onPress,onPress1,top,right,left}) => {
  return (
    <View style={styles.overlay(top,right,left)}>
      <View style={reusable.rowSpace('space-between')}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
            <AntDesign 
                name='left'
                size={26}
            />
        </TouchableOpacity>
        <ReusableText 
        text={title}
        family={"medium"}
        size={TEXT.large}
        color={COLORS.black}
        />
        <TouchableOpacity style={styles.box1(color1)} onPress={onPress1}>
            <AntDesign 
                name={icon}
                size={26}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    overlay:(top,right,left) => ({
        position: 'absolute',
        top: top,
        left:left,
        right:right,
        justifyContent:'center',
    }),
    box:(color)=>({
        backgroundColor:color,
        width:30,
        height:30,
        borderRadius:9,
        alignItems:'center',
        justifyContent:'center'
    }),
    box1:(color1)=>({
        backgroundColor:color1,
        width:30,
        height:30,
        borderRadius:9,
        alignItems:'center',
        justifyContent:'center'
    }),
})