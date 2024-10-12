import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import AssetImage from '../../components/Reusable/AssetImage';
import HeightSpacer from '../../components/Reusable/HeightSpacer';
import ReusableText from '../../components/Reusable/ReusableText';
import ReusableBtn from '../../components/Buttons/ReusableBtn';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import { useRoute } from '@react-navigation/native';
import { Ratings, reusable, WidthSpacer } from '../../components';
const Success = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <AssetImage 
                source={require('../../assets/images/checked.png')}
                mode={'contain'}
                height={200}
                width={200}
            />
            <HeightSpacer height={40} />

            <View style={styles.centeredTextContainer}>
                <ReusableText 
                    text={'Booking Successful'}
                    family={"medium"}
                    size={TEXT.xLarge}
                    color={COLORS.black}
                />
                <HeightSpacer height={20} />
                
            </View>

            <View style={styles.detailsContainer}>
                <ReusableText 
                    text={'Room Details:'}
                    family={"bold"}
                    size={SIZES.medium}
                    color={COLORS.dark}
                />
                <HeightSpacer height={20} />

                {/* Display the room details directly */}
                <View style={styles.roomDetails}>
                    <Image 
                        source={{ uri: item.imageUrl }} 
                        style={styles.roomImage} 
                    />
                    <HeightSpacer height={10} />
                    <View style={reusable.rowSpace('space-between')}> 
                    <ReusableText 
                        text={item.title}
                        family={"medium"}
                        size={TEXT.medium}
                        color={COLORS.black}
                    />
                    <WidthSpacer width={5}/>
                    <Ratings rating={item.rating}/>
                    </View>

                    <ReusableText 
                        text={`Price: $${item.price}`}
                        family={"medium"}
                        size={TEXT.small}
                        color={COLORS.gray}
                    />
                    
                    
                </View>

                <HeightSpacer height={40} />
                <ReusableBtn 
                    onPress={() => navigation.navigate('Bottom')}
                    btnText={"Done"}
                    width={(SIZES.width - 50)}
                    backgroundcolor={COLORS.green}
                    borderWidth={1}
                    borderColor={COLORS.green}
                    textColor={COLORS.white}
                />
            </View>
        </View>
    );
}

export default Success;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
    },
    centeredTextContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    detailsContainer: {
        width: '100%',
        marginTop: 20,
    },
    roomDetails: {
        alignItems: 'flex-start',
        backgroundColor: COLORS.lightWhite,
        borderRadius: 16,
        padding: 10,
        width: '100%',
    },
    roomImage: {
        width: '100%',
        height: 200,
        borderRadius: 16,
        marginBottom: 10,
    },
});
