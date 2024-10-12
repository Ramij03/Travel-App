import { FlatList, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import { Feather } from '@expo/vector-icons';
import ReusableTile from '../Reusable/ReusableTile';
import axios from 'axios';

const Recommendation = () => {
    const navigation = useNavigation();
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get('http://192.168.1.12:3000/api/place/get-places'); 
                setRecommendations(response.data.data); // Access the data correctly
            } catch (err) {
                console.error("Error fetching recommendations:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
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
        <View style={styles.container}>
            <View style={[reusable.rowSpace('space-between'), { paddingBottom: 20 }]}>
                <ReusableText 
                    text={'Recommendations'}
                    family={"medium"}
                    size={TEXT.large}
                    color={COLORS.black}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Recommended')}>
                    <Feather name='list' size={20} />
                </TouchableOpacity>
            </View>
            <View style={{ marginRight: 15 }}>
                <FlatList 
                    data={recommendations}
                    horizontal
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ReusableTile 
                            item={item} 
                            onPress={() => navigation.navigate('PlaceDetail', { id: item._id })} 
                        />

                    )}
                />
            </View>
        </View>
    );
};

export default Recommendation;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
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
