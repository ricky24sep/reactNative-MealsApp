import { View, Text, StyleSheet } from 'react-native';

function SubTitle({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
}

export default SubTitle;

const styles = StyleSheet.create({
    container: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});