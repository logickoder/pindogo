import { StyleProp, View, ViewStyle, StyleSheet, FlatList } from "react-native";
import ProfileAvatar from "../../components/ProfileAvatar";



export default function StoriesList() {

    return (
        <View>
            <FlatList
                data={stories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={({ name }) => name}
                renderItem={({ item }) => (
                    <ProfileAvatar name={item.name} url={item.url} style={styles.item} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 12,
    }
});


const stories = [
    {
        name: 'You',
        url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
        name: 'Alice',
        url: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        name: 'Bob',
        url: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        name: 'Charlie',
        url: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
        name: 'David',
        url: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        name: 'Eva',
        url: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
        name: 'Frank',
        url: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
        name: 'Grace',
        url: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    {
        name: 'Harry',
        url: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
        name: 'Ivy',
        url: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
];