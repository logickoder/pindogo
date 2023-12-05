import { StyleSheet } from "react-native";
import Post, { PostProps, PostType } from "../../components/Post";

export default function HomePosts() {
    return (
        posts.map((post, index) => {
            return (
                <Post
                    key={index}
                    header={post.header}
                    footer={post.footer}
                    style={styles.item}
                    type={post.type}
                    content={post.content}
                />
            );
        })
    );
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 24,
        marginHorizontal: 24,
    }
});

const posts: Array<PostProps> = [
    {
        header: {
            username: 'Alexander Bell',
            avatar: 'https://picsum.photos/200/300',
            timestamp: '12h',
        },
        footer: {
            likes: 325,
            comments: 98,
        },
        type: PostType.text,
        content: 'What do you Think About The News?',
    },
    {
        header: {
            username: 'Alice',
            avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
            timestamp: '10h',
        },
        footer: {
            likes: 50,
            comments: 3000,
        },
        type: PostType.image,
        content: 'https://picsum.photos/300/400',
    },
    {
        header: {
            username: 'Bob',
            avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
            timestamp: '8h',
        },
        footer: {
            likes: 500,
            comments: 50,
        },
        type: PostType.text,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        header: {
            username: 'Charlie',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
            timestamp: '6h',
        },
        footer: {
            likes: 200,
            comments: 0,
        },
        type: PostType.image,
        content: 'https://picsum.photos/250/300',
    },
    {
        header: {
            username: 'David',
            avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
            timestamp: '4h',
        },
        footer: {
            likes: 60,
            comments: 2,
        },
        type: PostType.text,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        header: {
            username: 'Eva',
            avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
            timestamp: '2h',
        },
        footer: {
            likes: 9999,
            comments: 2000,
        },
        type: PostType.image,
        content: 'https://picsum.photos/400/300',
    },
];