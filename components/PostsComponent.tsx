import * as React from 'react';
import { FlatList, Text, View } from 'react-native';

const PostsComponent = ({ posts }: { posts: any }) => {

    const randomId = () => Math.random().toString()

    const renderItem = ({ item }: { item: any }) => (
        <Text>{item?.id} : {item?.body} - <Text style={{ fontWeight: 'bold' }}>{item?.randomNumber}</Text></Text>
    )

    return (
        <FlatList
            style={{ marginVertical: 10, marginHorizontal: 10 }}
            data={posts}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={renderItem}
        />
    );
};

export default PostsComponent;