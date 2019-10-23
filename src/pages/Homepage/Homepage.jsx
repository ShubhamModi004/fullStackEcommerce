import React from 'react';

import Directory from '../../components/Directory/Directory';

import './homepage.styles.scss';
import { HomePageContainer } from './Homepage.styles';

const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}


export default HomePage;