import React, { useState, useEffect } from 'react';
import QrReader from 'react-web-qr-reader';
import Button from './Button';

const QrCodeScanner = () => {
    const previewStyle = {
        height: 320,
        width: 320,
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    const containerStyle = {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // minHeight: '100vh',

        // display: 'block',
        // alignItems: 'center',
        
    };

    const [result, setResult] = useState({ data: 'Scanning...' });
    const [delay, setDelay] = useState(500);
    const [error, setError] = useState(null);

    useEffect(() => {
        setResult(result);
        console.log(delay);
    }, [result]);

    const handleScan = (result) => {
        if (result) {
            console.log(result);
            setResult(result);
            setDelay(false);
        }
    };

    const handleError = (err) => {
        console.error('Error accessing camera:', err);
        setError('Error accessing camera. Make sure your device has a camera and try again.');
    };

    const handleClick = () => {
        setDelay(500);
        setResult({ data: 'Scanning...' });
        setError(null);
    };

    return (
        <div style={containerStyle}>
            <div style={previewStyle}>
                {error ? (
                    <p>{error}</p>
                ) : (
                    <QrReader
                        delay={delay}
                        style={{ width: '100%', height: 320, }}
                        onError={handleError}
                        onScan={handleScan}
                        constraints={{
                            facingMode: 'environment',
                        }}
                    />
                )}
            </div>
            <p>{result.data}</p>
            <Button value="Scan" handleClick={handleClick} className="bg-gray-300" />
        </div>
    );
};

export default QrCodeScanner;
