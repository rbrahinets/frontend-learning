import React from 'react';
import Header from './components/header';
import './app.scss';
import Headline from './components/headlines';
import {Provider} from 'react-redux';
import {store} from './createStore';

const App = () => {
    return (
        <Provider store={store}>
            <React.Fragment>
                <Header/>
                <section className="main">
                    <Headline
                        header="Posts"
                        desc="Click the button to render posts"
                    />
                </section>
            </React.Fragment>
        </Provider>
    );
};

export default App;
