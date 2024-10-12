import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BestHotels, HeightSpacer, Places, Recommendation, reusable,ReusableText } from '../../components'
import { TEXT,COLORS, SIZES } from '../../constants/theme'
import {AntDesign} from "@expo/vector-icons"
import styles from './home.style'


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={reusable.container}>
     <View>
      {/*First row in the page with text and icon */}
      <View style={reusable.rowSpace('space-between')}>
      <ReusableText 
        text={'Travel App'}
        family={"regular"}
        size={TEXT.large}
        color={COLORS.black}
        />
      <TouchableOpacity 
      style={styles.box}
      onPress={()=> navigation.navigate('Search')}
      >
        <AntDesign name='search1' size={26}/>
      </TouchableOpacity>
      </View>
      <HeightSpacer height={SIZES.xLarge}/>
      {/*Country List */}
      <ReusableText 
        text={'Places'}
        family={"medium"}
        size={TEXT.large}
        color={COLORS.black}
        />
       <Places/>
      {/*Recommended */}
       <Recommendation />
        {/*Hotels*/}
        <HeightSpacer height={40}/>
       <BestHotels />
     </View>
    </SafeAreaView>
  )
}

export default Home

