import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, TEXT } from '../../constants/theme';
import ReusableText from '../Reusable/ReusableText';
import reusable from '../Reusable/reusable.style';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HotelCard from '../Tiles/Hotel/HotelCard';
import axios from 'axios';

const BestHotels = () => {
    const navigation = useNavigation();
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get('http://192.168.1.12:3000/api/hotel/get-hotels'); // Change to your actual endpoint
                setHotels(response.data.hotels); // Adjust based on your API response structure
            } catch (err) {
                console.error("Error fetching hotels:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHotels();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View>
            <View style={[reusable.rowSpace('space-between'), { paddingBottom: 20 }]}>
                <ReusableText 
                    text={'Nearby Hotels'}
                    family={"medium"}
                    size={TEXT.large}
                    color={COLORS.black}
                />
                <TouchableOpacity onPress={() => navigation.navigate('HotelList')}>
                    <Feather name='list' size={20} />
                </TouchableOpacity>
            </View>

            <FlatList 
                data={hotels}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <HotelCard item={item} margin={10} onPress={() => navigation.navigate('HotelDetail', { id: item._id })} />
                )}
            />
        </View>
    );
};

export default BestHotels;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
