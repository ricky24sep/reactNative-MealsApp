import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
    return (
        data.map((dataPoint) => (
            <View key={dataPoint} style={styles.container}>
                <Text style={styles.title}>{dataPoint}</Text>
            </View>
        ))
    );
}
export default List;

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    title: {
        color: '#351401',
        textAlign: 'center',
    },
});