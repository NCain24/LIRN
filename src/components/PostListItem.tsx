import { Text } from 'react-native'
import React from 'react'
import { Post } from '../types';

type PostListItemProps = {
    post: Post
}

const PostListItem = ({post}: PostListItemProps) => {
    console.log(post);
  return (
      <Text>{post.content}</Text>
    
  )
}

export default PostListItem