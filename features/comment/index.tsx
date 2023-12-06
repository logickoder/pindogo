import { StatusBar, View, StyleSheet } from "react-native";

export default function CommentScreen() {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        color: '#fff',
        paddingTop: StatusBar.currentHeight || 0,
    },
});