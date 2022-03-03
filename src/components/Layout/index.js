import React, { Component } from 'react';

import Header from '../Header';
import PostList from '../PostsLists';
import Footer from '../Footer';

export default class Layout extends Component {
    componentDidMount() {
        console.debug('component mount');
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        console.debug('component unmount');
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        console.debug('scrollou');
    }

    render() {
        return (
            <>
                <Header />
                <PostList />
                <Footer />
            </>
        )
    }
}