import React, { Component } from 'react';

import posts from './posts';
import Post from './Post';

import { Container } from './styles.js';

export default class PostList extends Component {
    render() {
        return (
            <Container>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        title={post.title}
                        description={post.description}
                    />
                ))}
            </Container>
        )
    }
}

// export default function Posts() {
    // return (
    //     <Container>
    //         {posts.map(post => (
    //             <Post
    //                 key={post.id}
    //                 title={post.title}
    //                 description={post.description}
    //             />
    //         ))}
    //     </Container>
    // )
// }