// ErrorPage.tsx
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred or page not exists.</p>
            {/* @ts-ignore */}
            {error && error.message && (
                <p>
                    {/* @ts-ignore */}
                    <i>{error.message}</i>
                </p>
            )}
        </div>
    );
};

export default ErrorPage;
