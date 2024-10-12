import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ReusableText from '../../Reusable/ReusableText';
import { COLORS, TEXT } from '../../../constants/theme';
import NetworkImage from '../../Reusable/NetworkImage';
import HeightSpacer from '../../Reusable/HeightSpacer';
import { useNavigation } from '@react-navigation/native';

const Country = ({ item }) => {
    const navigation = useNavigation();
    console.log("Country Item:", item);
    return (
        <TouchableOpacity onPress={() => navigation.navigate('CountryDetail', { id: item._id })}>
    
            <View>
                <NetworkImage 
                    source={item.imageUrl } 
                    width={85} 
                    height={85} 
                    radius={12} 
                />
                <HeightSpacer height={5} />
                <ReusableText 
                    text={item.country}
                    family={"medium"}
                    size={TEXT.medium}
                    color={COLORS.black}
                    align={"center"}
                />
            </View>
        </TouchableOpacity>
    );
}

export default Country;

const styles = StyleSheet.create({});
