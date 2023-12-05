import { StyleSheet, View, Text, StatusBar, ScrollView } from "react-native";
import HomeAppBar from "./HomeAppBar";
import StoriesList from "./StoriesList";
import HomeChips from "./HomeChips";
import HomePosts from "./HomePosts";
import HomeBottomBar from "./HomeBottomBar";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <HomeAppBar />
            <ScrollView style={styles.scrollView}>
                <StoriesList />
                <HomeChips />
                <HomePosts />
            </ScrollView>
            <HomeBottomBar />
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
    scrollView: {
        flex: 1,
    },
});