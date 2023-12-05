import { StyleSheet, View } from "react-native";
import Icon from "../../components/Icon";

export default function HomeAppBar() {
    return (
        <View style={styles.container}>
            <Icon name="search" />
            <Icon name="logo" style={styles.logo} />
            <Icon name="notification" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
    },
    logo: {
        flex: 1,
        aspectRatio: 249 / 56,
        marginHorizontal: 32,
    }
});