// About.tsx
import React from 'react';
import { GlobalProps } from '@/Screens/globalProps.types';

type Props = {}

const About: React.FC<Props & GlobalProps> = (props) => {
    return (
        <div>
            <h1>About Us</h1>
            <div>
                <p>Count: {props.state.counter.count}</p>
                <p>Count: {props.state.counter.count1}</p>
                <button onClick={() => {
                    props.state.counter.inc1(1)
                    props.state.counter.inc2(5)
                }}>Increments</button>
                <button onClick={() => props.state.counter.inc2(2)}>Decrement</button>
            </div>
        </div>
    );
};

export default About;
