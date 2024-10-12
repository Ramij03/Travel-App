import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from '../../Reusable/reusable.style'
import { COLORS,SIZES, TEXT } from '../../../constants/theme'
import ReusableText from '../../Reusable/ReusableText'
import WidthSpacer from '../../../components/Reusable/WidthSpacer'
import {AntDesign} from '@expo/vector-icons'

const SettingsTile = ({onPress,title,title1}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,reusable.rowSpace('space-between')]}>
        <ReusableText 
            text={title}
            family={"medium"}
            size={TEXT.medium}
            color={COLORS.gray}
            />

        {title ==="Langauge"?(
                <View style={reusable.rowSpace('flex-start')}>
                    <Image 
                    source={require('../../../assets/images/USA.png')}
                    style={styles.image}
                    />
                    <WidthSpacer width={5}/>
                    <ReusableText 
                        text={"English"}
                        family={"medium"}
                        size={TEXT.medium}
                        color={COLORS.gray}
                        />
                    <WidthSpacer width={5}/>
                    <AntDesign name='right' size={20} color={COLORS.dark} />
                </View>
        ):(
            <View style={reusable.rowSpace('flex-start')}>
                <ReusableText 
                        text={title1}
                        family={"medium"}
                        size={TEXT.medium}
                        color={COLORS.gray}
                        />
                    <WidthSpacer width={5}/>
                <AntDesign name='right' size={20} color={COLORS.dark} />
            </View>
        )}

    </TouchableOpacity>
  )
}

export default SettingsTile

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:1,
        borderColor:COLORS.lightGrey,
        paddingVertical:15,
    },
    image:{
        width:40,
        height:30,
        resizeMode:"contain"
    },

})