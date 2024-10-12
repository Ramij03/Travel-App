import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './slides.style'
import {ReusableText, ReusableBtn, HeightSpacer} from "../../components/index"
import { COLORS,SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const Slides = ({item}) => {
    const navigation =useNavigation();
  return (
    <View>
      <Image source={item.image} style={styles.image}/>
      <View style={styles.stack}>
        <ReusableText 
        text={item.title}
        family={"medium"}
        size={SIZES.xxLarge}
        color={COLORS.white}
        />

        <HeightSpacer height={40}/>
        <ReusableBtn 
        onPress={()=>navigation.navigate('Bottom')}
        btnText={"Let's Get Started"}
        width={(SIZES.width-50)/2.2}
        backgroundcolor={COLORS.red}
        borderColor={COLORS.red}
        borderWidth={1}
        textColor={COLORS.white}
        />
      </View>
    </View>
  )
}

export default Slides