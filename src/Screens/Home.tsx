// Home.tsx
import React from 'react';
import { GlobalProps } from '@/Screens/globalProps.types';

type Props = {}

const Home: React.FC<Props & GlobalProps> = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <p>Count: {props.state.counter.count}</p>
                <p>Count: {props.state.counter.count1}</p>
                <button onClick={() => props.state.counter.inc1(1)}>Inc1</button>
                <button onClick={() => props.state.counter.inc2(2)}>Inc2</button>
            </div>
        </div>
    );
};

export default Home;
