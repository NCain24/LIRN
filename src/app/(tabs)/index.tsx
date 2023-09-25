import { StyleSheet } from 'react-native';
import PostListItem from '../../components/PostListItem';
import posts from '../../assets/data/posts.json'
import {View } from '../../components/Themed';

const firstPost = posts[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PostListItem
      post={firstPost}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
