import { StyleSheet, View, Text } from "react-native";
import Icon from "../../components/Icon";



export default function HomeBottomBar() {
    return (
        <View style={styles.container}>
            {items.map((item) => (
                <View key={item.name} style={styles.item}>
                    <Icon name={item.icon} />
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            ))}
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
    item: {
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontSize: 12,
        color: '#fff',
    }
});

const items = [
    {
        name: "Home",
        icon: "home",
    },
    {
        name: "Chat",
        icon: "chat",
    },
    {
        name: "Create",
        icon: "create",
    },
    {
        name: "Live",
        icon: "video",
    },

    {
        name: "Meet",
        icon: "meet",
    },
];