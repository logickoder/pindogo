import { View, Image, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface ProfileAvatarProps {
    name: string;
    url: string;
    style?: StyleProp<ViewStyle>;
}

export default function ProfileAvatar(props: ProfileAvatarProps) {
    const { name, url, style } = props;
    const isNotYou = name !== 'You';

    return (
        <View style={[style, styles.container]}>
            <Image
                style={[styles.avatar, isNotYou && styles.border]}
                source={{ uri: url }}
            />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
    },
    border: {
        borderColor: '#0677E8',
        borderWidth: 2,
    },
    name: {
        color: '#fff',
        fontSize: 12,
        marginTop: 8,
    }
});

export type { ProfileAvatarProps };