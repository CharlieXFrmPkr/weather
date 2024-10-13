import React from 'react';

function TestComponent() {
    return (
        <div
            style={{
                backgroundImage: `url('/images/sunny.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
            }}
        >
            <h1>Test Background Image</h1>
        </div>
    );
}

export default TestComponent;
