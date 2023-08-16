import React from 'react';
import Header from './components/header';
import './app.scss';
import Headline from './components/headlines';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <section className="main">
                <Headline
                    header="Posts"
                    desc="Click the button to render posts"
                />
            </section>
        </React.Fragment>
    );
};

export default App;
