import { useState, useEffect } from 'react';

export default function ResetTimer() {
    const [resetCount, setResetCount] = useState(0);
    const [lastResetTime, setLastResetTime] = useState(null);
    const [timeSinceReset, setTimeSinceReset] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (lastResetTime) {
                const seconds = ((new Date() - lastResetTime) / 1000).toFixed(1);
                setTimeSinceReset(seconds);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [lastResetTime]);

    const handleReset = () => {
        setResetCount(prevCount => prevCount + 1);
        setLastResetTime(new Date());
    };

    return (
        <div className="container-fluid py-5" style={{ 
            background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="text-center p-5" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                color: 'white',
                maxWidth: '500px',
                width: '100%'
            }}>
                <button 
                    className="btn btn-primary btn-lg mb-4 px-5 py-3"
                    onClick={handleReset}
                    style={{
                        background: 'linear-gradient(45deg, #007bff, #00bfff)',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
                    }}
                >
                    Reset Timer
                </button>
                
                {resetCount > 0 && (
                    <>
                        <div className="mb-3" style={{ fontSize: '1.2rem' }}>
                            Reset Button: You've reset the timer {resetCount} times!
                        </div>
                        <div style={{ 
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: '#00bfff'
                        }}>
                            Time before last reset is: {timeSinceReset}s
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
