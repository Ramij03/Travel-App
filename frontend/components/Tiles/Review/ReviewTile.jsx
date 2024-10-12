import { Text, View } from 'react-native'
import React from 'react'
import styles from './review.style'
import reusable from '../../Reusable/reusable.style'
import NetworkImage from '../../Reusable/NetworkImage'
import WidthSpacer from '../../Reusable/WidthSpacer'
import ReusableText from '../../Reusable/ReusableText'
import { COLORS,SIZES } from '../../../constants/theme'
import Ratings from '../../Reusable/Ratings'
import DescriptionText from '../../Reusable/DescriptionText'
const ReviewTile = ({review}) => {
  return (
    <View style={styles.reviewBorder}>
      <View style={reusable.rowSpace('space-between')}>
        <View style={reusable.rowSpace('flex-start')}>
            <NetworkImage 
            source={review.profile}
            width={54}
            height={54}
            radius={10}
            />
            <WidthSpacer width={20}/>
            <View style={{width:'80%'}}>
                <View style={reusable.rowSpace('space-between')}>
                <ReusableText 
                    text={review.user}
                    family={"medium"}
                    size={SIZES.small}
                    color={COLORS.black}
                    />
                    <WidthSpacer width={'30%'}/>
                    <View style={reusable.rowSpace('space-between')}>
                        <Ratings rating={review.rating}/>
                        <WidthSpacer width={10}/>
                        <ReusableText 
                            text={review.updatedAt}
                            family={"medium"}
                            size={SIZES.small}
                            color={COLORS.black}
                            />
                    </View>
                </View>
                <DescriptionText text={review.comment} lines={2}/>
            </View>
        </View>
      </View>
    </View>
  )
}

export default ReviewTile

