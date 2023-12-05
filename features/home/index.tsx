import { StyleSheet, View, Text, StatusBar } from "react-native";
import HomeAppBar from "./HomeAppBar";
import { ProfileAvatarProps } from "../../components/ProfileAvatar";
import StoriesList from "./StoriesList";
import HomeChips from "./HomeChips";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <HomeAppBar />
            <StoriesList />
            <HomeChips style={styles.chips} />
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
    chips: {
        margin: 24,
    }
});