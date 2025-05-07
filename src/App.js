import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const boxStyle = {
        padding: '20px',
        borderRadius: '8px',
        color: '#fff',
        marginBottom: '20px',
    };

    return (
        <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial' }}>
            <div style={{ ...boxStyle, backgroundColor: '#73ff00' }}> {/* 파란 박스 */}
                <h1>React 데모</h1>
                <p>버튼을 누르면 숫자가 올라갑니다.</p>
            </div>

            <div style={{ ...boxStyle, backgroundColor: '#73ff00' }}> {/* 초록 박스 */}
                <h2>카운트: {count}</h2>
                <button
                    onClick={() => setCount(count + 1)}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    +1 증가
                </button>
            </div>
        </div>
    );
}

export default App;
