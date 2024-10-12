import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import { AntDesign } from '@expo/vector-icons';
import WidthSpacer from './WidthSpacer'
import ReusableText from './ReusableText'
import { COLORS, SIZES } from '../../constants/theme'

const ProfileTile = ({title,onPress,icon}) => {
  return (
   <TouchableOpacity style={styles.title} onPress={onPress}>
    <View style={reusable.rowSpace('space-between')}>
        <View style={reusable.rowSpace('flex-start')}>
            <AntDesign name={icon} size={20}/>

            <WidthSpacer width={15}/>

            <ReusableText 
                text={title}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.gray}
            />
        </View>
        <AntDesign name='right' size={20}/>
    </View>
   </TouchableOpacity>
  )
}

export default ProfileTile

const styles = StyleSheet.create({
    title:{
        backgroundColor:COLORS.lightWhite,
        borderRadius:15,
        padding:15,
        marginVertical:5
    }
})