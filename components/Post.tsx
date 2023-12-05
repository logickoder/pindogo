import { View, Text, StyleSheet, Image, StyleProp, ViewStyle, ImageBackground } from "react-native";
import Icon from "./Icon";

export enum PostType {
    text,
    image,
}

export interface PostHeaderProps {
    username: string;
    avatar: string;
    timestamp: string;
}

export interface PostFooterProps {
    likes: number;
    comments: number;
    style?: StyleProp<ViewStyle>;
}

export interface PostProps {
    header: PostHeaderProps;
    footer: PostFooterProps;
    style?: StyleProp<ViewStyle>;
    type: PostType;
    content: string;
}

export function PostHeader(props: PostHeaderProps) {
    let { username, avatar, timestamp } = props;
    return (
        <View style={styles.postHeaderContainer}>
            <Image
                style={styles.avatar}
                source={{ uri: avatar }}
            />
            <View style={styles.postHeaderText}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.timestamp}>{timestamp}</Text>
            </View>
            <Icon name="more" />
        </View>
    );
}

export function PostFooter(props: PostFooterProps) {
    let { likes, comments, style } = props;

    return (
        <View style={[style, styles.postFooterContainer]}>
            <Icon name="heart" />
            <Text style={styles.postFooterText}>{likes}</Text>
            <Icon name="comment" />
            <Text style={styles.postFooterText}>{comments}</Text>
            <Icon name="share" />
        </View>
    );
}

export default function Post(props: PostProps) {
    let { header, footer, style, type, content } = props;
    let { username, avatar, timestamp } = header;
    let { likes, comments } = footer;

    switch (type) {
        case PostType.text:
            return (
                <View style={[style, styles.postTextContainer]}>
                    <PostHeader username={username} avatar={avatar} timestamp={timestamp} />
                    <Text style={styles.postText}>{content}</Text>
                    <PostFooter likes={likes} comments={comments} />
                </View>
            );

        case PostType.image:
            return (
                <View style={style}>
                    <ImageBackground
                        source={{ uri: content }}
                        style={styles.postImageContainer}
                        imageStyle={styles.postImage}
                    >
                        <View style={styles.postImageInnerContainer}>
                            <PostHeader username={username} avatar={avatar} timestamp={timestamp} />
                            <PostFooter style={styles.postImageFooterContainer} likes={likes} comments={comments} />
                        </View>
                    </ImageBackground >
                </View>
            );
    }
}

const styles = StyleSheet.create({
    postHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    postHeaderText: {
        flex: 1,
        marginHorizontal: 16,
    },
    username: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
    timestamp: {
        color: '#BBB',
        fontSize: 12,
    },
    postFooterContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'baseline',
    },
    postFooterText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 8,
        marginRight: 18,
    },
    postTextContainer: {
        backgroundColor: '#11141B',
        borderRadius: 30,
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    postText: {
        color: '#fff',
        fontSize: 14,
        marginVertical: 24,
    },
    postImageContainer: {
        aspectRatio: 364 / 400,
    },
    postImage: {
        borderRadius: 30,
    },
    postImageInnerContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    postImageFooterContainer: {
        padding: 18,
        backgroundColor: '#11141B',
        borderRadius: 15,
    }
});