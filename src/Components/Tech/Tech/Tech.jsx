import React from 'react';
import TechIntro from '../TechIntro/TechIntro';
import Charging from '../Charging/Charging';
import TechStack from '../TechStack/TechStack';
import Way from '../ZeroozenWay/Way';
import Operations from '../Operations/Operations';

const Tech = () => {
    return (
        <div className='tech'>
            <TechIntro></TechIntro>
            <Charging></Charging>
            <Way></Way>
            <TechStack></TechStack>
            <Operations></Operations>
        </div>
    );
};

export default Tech;