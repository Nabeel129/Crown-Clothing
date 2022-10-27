import { Fragment } from 'react';
import Directory from '../../components/directory/directory';
import Categories from '../../categories'

const Home = () => {
    return (

        <Fragment>
            <Directory categories={Categories} />

        </Fragment>
    );
}

export default Home;
