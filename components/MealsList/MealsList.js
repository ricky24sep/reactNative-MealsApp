import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from '../MealsList/MealItem';

function MealsList({ items }) {

    function RenderMealItem(itemData) {
        return(
            <MealItem 
                id={itemData.item.id}
                title={itemData.item.title} 
                imageUrl={itemData.item.imageUrl} 
                duration={itemData.item.duration} 
                complexity={itemData.item.complexity} 
                affordability={itemData.item.affordability}
            />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={items} 
                keyExtractor={(item) => item.id} 
                renderItem={RenderMealItem} 
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});