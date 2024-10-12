import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { AppBar, AssetImage, HeightSpacer, NetworkImage, Ratings, ReusableText, WidthSpacer } from '../../components';
import { COLORS, TEXT } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // for icons

const SelectedRoom = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;
    const [guestCount, setGuestCount] = useState(0); // state for guest selection

    const handleIncrement = () => setGuestCount(guestCount + 1);
    const handleDecrement = () => guestCount > 0 && setGuestCount(guestCount - 1);

    return (
        <View>
            <View style={{ height: 100 }}>
                <AppBar
                    top={50}
                    left={10}
                    right={10}
                    title={'Selected Room'}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
                    <NetworkImage
                        source={item.imageUrl}
                        width={'100%'}
                        height={200}
                        radius={16}
                    />
                    <HeightSpacer height={10} />
                    <View style={styles.textContainer}>
                        <View style={styles.rowSpaceBetween}>
                            <ReusableText
                                text={item.title}
                                family={"medium"}
                                size={TEXT.medium}
                                color={COLORS.black}
                            />
                            <View style={styles.rowStart}>
                                <Ratings rating={item.rating} />
                                <WidthSpacer width={10} />
                                <ReusableText
                                    text={`(${item.review})`}
                                    family={"regular"}
                                    size={TEXT.medium}
                                    color={COLORS.gray}
                                />
                            </View>
                        </View>

                        <HeightSpacer height={10} />

                        <ReusableText
                            text={item.location}
                            family={"regular"}
                            size={TEXT.small}
                            color={COLORS.gray}
                        />

                        <HeightSpacer height={15} />

                        <View style={styles.rowSpaceBetween}>
                            <ReusableText
                                text={`Price per night`}
                                family={"medium"}
                                size={TEXT.medium}
                                color={COLORS.black}
                            />
                            <ReusableText
                                text={`$ ${item.price}`}
                                family={"bold"}
                                size={TEXT.large}
                                color={COLORS.black}
                            />
                        </View>

                        <HeightSpacer height={10} />

                        <View style={styles.rowSpaceBetween}>
                            <ReusableText
                                text={`Payment Method`}
                                family={"medium"}
                                size={TEXT.medium}
                                color={COLORS.black}
                            />
                            <View style={styles.rowStart}>
                                <AssetImage 
                                    source={require('../../assets/images/Visa.png')}
                                    width={30}
                                    height={30}
                                />
                                <WidthSpacer width={5} />
                                <ReusableText
                                    text={`Visa`}
                                    family={"regular"}
                                    size={TEXT.medium}
                                    color={COLORS.black}
                                />
                            </View>
                        </View>

                        <HeightSpacer height={20} />

                        {/* Guest Counter */}
                        <View style={styles.rowSpaceBetween}>
                            <ReusableText
                                text={`Guests`}
                                family={"medium"}
                                size={TEXT.medium}
                                color={COLORS.black}
                            />
                            <View style={styles.rowStart}>
                                <TouchableOpacity onPress={handleDecrement}>
                                    <MaterialCommunityIcons
                                        name="minus-box"
                                        size={30}
                                        color={COLORS.gray}
                                    />
                                </TouchableOpacity>
                                <WidthSpacer width={10} />
                                <ReusableText
                                    text={`${guestCount}`}
                                    family={"bold"}
                                    size={TEXT.large}
                                    color={COLORS.black}
                                />
                                <WidthSpacer width={10} />
                                <TouchableOpacity onPress={handleIncrement}>
                                    <MaterialCommunityIcons
                                        name="plus-box"
                                        size={30}
                                        color={COLORS.green}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <HeightSpacer height={20} />

                        {/* Book Now Button */}
                        <TouchableOpacity
                            style={styles.bookButton}
                            onPress={() => {
                                if (guestCount === 0) {
                                    navigation.navigate('Fail',{item}); // Navigate to Fail page if guests are 0
                                } else {
                                    navigation.navigate('Success',{item}); // Navigate to Success page if guests are greater than 0
                                }
                            }}
                        >
                            <Text style={styles.bookButtonText}>Book Now</Text>
                        </TouchableOpacity>

                        <HeightSpacer height={20} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SelectedRoom;

const styles = StyleSheet.create({
    textContainer: {
        marginHorizontal: 10,
        marginBottom: 10
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowStart: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bookButton: {
        backgroundColor: COLORS.green,
        borderRadius: 8,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookButtonText: {
        color: COLORS.white,
        fontSize: TEXT.medium,
        fontFamily: 'bold'
    }
});
