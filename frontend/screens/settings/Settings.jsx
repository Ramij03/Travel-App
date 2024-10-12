import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../../constants/theme'
import AppBar from '../../components/Reusable/AppBar'
import ReusableText from '../../components/Reusable/ReusableText'
import HeightSpacer from '../../components/Reusable/HeightSpacer'
import SettingsTile from '../../components/Tiles/Settings/SettingsTile'
const Settings = ({navigation}) => {
  return (
    <View style={{backgroundColor:COLORS.lightWhite, flex:1}}>
      <View style={{height:120}}>
            <AppBar 
            top={50}
            left={20}
            right={20}
            color={COLORS.white} 
            onPress={() => navigation.goBack()}
           
          />
      </View>
      <View style={{marginHorizontal:20}}>
        <ReusableText 
            text={'Account Settings'}
            family={"medium"}
            size={SIZES.xLarge-5}
            color={COLORS.black}
            />
        <HeightSpacer height={10}/>
        <SettingsTile 
            title={'Langauge'}
        />
        <HeightSpacer height={3}/>
        <SettingsTile 
            title={'Country'}
            title1={'USA'}
        />
        <HeightSpacer height={3}/>
        <SettingsTile 
            title={'Currency'}
            title1={'USD'}
        />
        <HeightSpacer height={40}/>
        <ReusableText 
            text={'Support'}
            family={"medium"}
            size={SIZES.xLarge-5}
            color={COLORS.black}
            />
            <SettingsTile 
            title={'Get Help'}
            title1={''}
        />
        <HeightSpacer height={3}/>
        <SettingsTile 
            title={'Give a Feedback'}
            title1={''}
        />
        
        <HeightSpacer height={40}/>
        <ReusableText 
            text={'Legal'}
            family={"medium"}
            size={SIZES.xLarge-5}
            color={COLORS.black}
            />
            <SettingsTile 
            title={'Terms of Service'}
            title1={''}
        />
        <HeightSpacer height={3}/>
        <SettingsTile 
            title={'Privacy Policy'}
            title1={''}
        />
        <HeightSpacer height={3}/>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})