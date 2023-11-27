import React, { useState, useEffect } from "react";
import QrReader from "react-web-qr-reader";
import Button from "./Button";
import { postAPIcalls } from "../utils/apiCalls";

const QrCodeScanner = () => {
  const previewStyle = {
    height: 320,
    width: 320,
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
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

  const [result, setResult] = useState({ data: "Scanning..." });
  const [delay, setDelay] = useState(500);
  const [error, setError] = useState(null);
  const [credentials, setcredentials] = useState({});

  const setting = async () => {
    const data = JSON.parse(result.data);
    setcredentials(data);
  };
  const fetching = async () => {
    const mid = "operation/admin/verify-student/";
    // console.log(credentials.studentDetails.email);
    const useremail = credentials.studentDetails.email;
    const response = await postAPIcalls(mid, useremail, credentials);
    if(response.status === 200){
        console.log("good");
    }else{
        console.log("bad");
    }
  };

  useEffect(() => {
    if (credentials) {
      fetching();
    }
  }, [credentials]);

  useEffect(() => {
    setResult(result);
    // console.log(delay);
    if (result.data !== "Scanning...") setting();
  }, [result]);

  const handleScan = (result) => {
    if (result) {
      console.log(result);
      setResult(result);
      setDelay(false);
    }
  };

  const handleError = (err) => {
    console.error("Error accessing camera:", err);
    setError(
      "Error accessing camera. Make sure your device has a camera and try again."
    );
  };

  const handleClick = () => {
    setDelay(500);
    setResult({ data: "Scanning..." });
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
            style={{ width: "100%", height: 320 }}
            onError={handleError}
            onScan={handleScan}
            constraints={{
              facingMode: "environment",
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
