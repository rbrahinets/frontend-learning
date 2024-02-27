import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import Header from './components/header';
import Headline from './components/headlines';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import {fetchPosts} from './actions';
import {store} from './createStore';
import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this);
    }

    fetch() {

    }

    render() {
        const {posts} = this.props;
        const configButton = {
            buttonText: 'Get posts',
            emitEvent: this.fetch,
        }

        return (
            <Provider store={store}>
                <React.Fragment>
                    <Header/>
                    <section className="main">
                        <Headline
                            header="Posts"
                            desc="Click the button to render posts"
                        />
                        <SharedButton {...configButton}/>
                        {posts.length > 0 &&
                            <div>
                                {posts.map((post, index) => {
                                    const {title, body} = post;
                                    const configListItem = {
                                        title,
                                        desc: body,
                                    }

                                    return (
                                        <ListItem key={index} {...configListItem}/>
                                    )
                                })}
                            </div>
                        }
                    </section>
                </React.Fragment>
            </Provider>
        );
    }
};

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(App);
