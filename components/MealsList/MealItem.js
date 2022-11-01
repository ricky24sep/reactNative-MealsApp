import { View, Pressable, Text, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from '../MealDetails/MealDetails';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();
    
    function selectedMealItemHandler() {
        navigation.navigate('MealDetails', {
            mealId: id
        });
    }

    return (
        <View style={styles.container}>
            <Pressable 
                android_ripple={{ color: '#ccc'}} 
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectedMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
                        duration={duration} 
                        affordability={affordability} 
                        complexity={complexity} 
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }
});