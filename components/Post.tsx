import { View, Text, StyleSheet, Image, StyleProp, ViewStyle, ImageBackground, TouchableHighlight, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { AntDesign } from '@expo/vector-icons';
import React from "react";

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
    isLiked: boolean;
    onLike?: () => void;
    style?: StyleProp<ViewStyle>;
}

export interface PostProps {
    header: PostHeaderProps;
    footer: PostFooterProps;
    style?: StyleProp<ViewStyle>;
    type: PostType;
    content: string;
    media?: string;
    onClick?: () => void;
}

export function PostHeader({ username, avatar, timestamp }: PostHeaderProps) {
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

export function PostFooter({
    likes,
    comments,
    isLiked,
    onLike,
    style
}: PostFooterProps) {
    return (
        <View style={[style, styles.postFooterContainer]}>
            <TouchableOpacity onPress={onLike}>
                <AntDesign
                    name={isLiked ? "heart" : "hearto"}
                    size={24}
                    color={isLiked ? "#F21C44" : "white"}
                />
            </TouchableOpacity>
            <Text style={styles.postFooterText}>{likes}</Text>
            <Icon name="comment" />
            <Text style={styles.postFooterText}>{comments}</Text>
            <Icon name="share" />
        </View>
    );
}

export default class Post extends React.Component<PostProps> {
    state = {
        isLiked: false,
    }

    toggleLike = () => {
        this.setState({ isLiked: !this.state.isLiked });
    }

    render(): React.ReactNode {
        let { header, footer, style, type, media, content, onClick } = this.props;
        let { username, avatar, timestamp } = header;
        let { likes, comments } = footer;

        switch (type) {
            case PostType.text:
                return (
                    <View style={[style, styles.postTextContainer]}>
                        <PostHeader
                            username={username}
                            avatar={avatar}
                            timestamp={timestamp}
                        />
                        <TouchableOpacity onPress={onClick} activeOpacity={0} >
                            <Text style={styles.postText}>
                                {content}
                            </Text>
                        </TouchableOpacity>
                        <PostFooter
                            likes={likes}
                            comments={comments}
                            isLiked={this.state.isLiked}
                            onLike={this.toggleLike}
                        />
                    </View>
                );

            case PostType.image:
                return (
                    <View style={style}>
                        <ImageBackground
                            source={{ uri: media }}
                            style={styles.postImageContainer}
                            imageStyle={styles.postImage}
                        >
                            <View style={styles.postImageInnerContainer}>
                                <PostHeader username={username} avatar={avatar} timestamp={timestamp} />
                                <TouchableOpacity
                                    onPress={onClick}
                                    activeOpacity={0}
                                    style={styles.postImageInnerContainerClick}
                                >
                                    <View />
                                </TouchableOpacity>
                                <PostFooter
                                    style={styles.postImageFooterContainer}
                                    likes={likes}
                                    comments={comments}
                                    isLiked={this.state.isLiked}
                                    onLike={this.toggleLike}
                                />
                            </View>
                        </ImageBackground >
                    </View>
                );
        }
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
    postImageInnerContainerClick: {
        flex: 1,
    },
    postImageFooterContainer: {
        padding: 18,
        backgroundColor: '#11141B',
        borderRadius: 15,
    },
});