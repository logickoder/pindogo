import { StyleSheet, View, Text, StatusBar, ScrollView } from "react-native";
import HomeAppBar from "./HomeAppBar";
import StoriesList from "./StoriesList";
import HomeChips from "./HomeChips";
import HomePosts from "./HomePosts";
import HomeBottomBar from "./HomeBottomBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteList } from "../../App";
import { PostProps } from "../../components/Post";

type Props = NativeStackScreenProps<RouteList, 'home'>;

export default function HomeScreen({ route, navigation }: Props) {

    const goToCommentScreen = (post: PostProps) => {
        navigation.navigate({
            name: 'comment',
            params: {
                post: post
            }
        });
    };

    return (
        <View style={styles.container}>
            <HomeAppBar />
            <ScrollView style={styles.scrollView}>
                <StoriesList />
                <HomeChips />
                <HomePosts onPostClick={goToCommentScreen} />
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