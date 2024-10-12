import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import WidthSpacer from './WidthSpacer'
import ReusableText from './ReusableText'
const Ratings = ({rating}) => {
  return (
    <View style={reusable.rowSpace('flex-start')}>
      <MaterialCommunityIcons 
      name='star'
      size={20}
      color={'#FD9942'} />

      <WidthSpacer width={5}/>

      <ReusableText 
            text={rating}
            family={"medium"}
            size={14}
            color={'#FD9942'}
        />
    </View>
  )
}

export default Ratings

const styles = StyleSheet.create({})