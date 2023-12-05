import { StyleSheet, View, Text, StatusBar } from "react-native";
import HomeAppBar from "./HomeAppBar";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <HomeAppBar />
            <Text>Home Screen</Text>
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