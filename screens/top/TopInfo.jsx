import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileTile from '../../components/Reusable/ProfileTile'
import ReusableBtn from '../../components/Buttons/ReusableBtn'
import { COLORS,SIZES } from '../../constants/theme'
import { HeightSpacer } from '../../components'
const TopInfo = ({navigation}) => {
  return (
    <View style={{margin:20}}>
      
      <ProfileTile title={'Personal Info'} icon={'user'} />
      <ProfileTile title={'Payments'} icon={'creditcard'} onPress={()=>navigation.navigate('Payments')}/>
      <ProfileTile title={'Settings'} icon={'setting'} onPress={()=>navigation.navigate('Settings')}/>
      <HeightSpacer height={150 }/>
      <ReusableBtn 
            onPress={ () =>navigation.navigate('')}
            btnText={"Logout"}
            width={(SIZES.width-40)}
            backgroundcolor={COLORS.white}
            borderWidth={1}
            borderColor={COLORS.red}
            textColor={COLORS.red}
      />
    </View>
  )
}

export default TopInfo

const styles = StyleSheet.create({})