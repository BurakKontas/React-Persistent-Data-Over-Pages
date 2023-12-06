// Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/Screens/Home';
import About from '@/Screens/About';
import ErrorPage from '@/error-page';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { RootState } from './Redux/store';
import { inc1, inc2 } from './Redux/counter/slice';

export type GlobalState = {
    counter : {
        count: number;
        count1: number;
        inc1: (amount: number) => void;
        inc2: (amount: number) => void;
    },
};

const AppRouter: React.FC = () => {
    const dispatch = useAppDispatch();
    let count = useAppSelector((state: RootState) => state.counter.value);
    let count1 = useAppSelector((state: RootState) => state.counter.value1);
    const state = {
        counter: {
            count: count,
            count1: count1,
            inc1 : () => dispatch(inc1(1)),
            inc2 : () => dispatch(inc2(2)),
        },
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home state={state} />} errorElement={<ErrorPage />} />
                <Route path="about" element={<About state={state} />} errorElement={<ErrorPage />} />
                <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
