import React, { useState, useEffect } from "react";
import QrReader from "react-web-qr-reader";
import Button from "./Button";
import { postAPIcalls } from "../utils/apiCalls";
import Loading from "./Loading";
import Close from "./close";

const QrCodeScanner = () => {
  const containerStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const previewStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
  };

  const [result, setResult] = useState({ data: "Scanning..." });
  const [delay, setDelay] = useState(500);
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({});

  const setting = async () => {
    const data = JSON.parse(result.data);
    setCredentials(data);
  };

  const fetching = async () => {
    const mid = "operation/admin/verify-student/";
    const useremail = credentials.studentDetails.email;
    try {
      const response = await postAPIcalls(mid, useremail, credentials);
      if (response.status === 200) {
        
      }
    } catch (error) {
      {
        if(error.response.status === 401){
          
        }
        
      }
    }
  };

  useEffect(() => {
    if (credentials) {
      fetching();
    }
  }, [credentials]);

  useEffect(() => {
    setResult(result);
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
    <div className="lg:h-1/2 h-full w-full" style={containerStyle}>
      <div style={previewStyle}>
        {error ? (
          <p>{error}</p>
        ) : (
          <QrReader
            delay={delay}
            style={{ width: "100%", height: "100%" }}
            onError={handleError}
            onScan={handleScan}
            constraints={{
              facingMode: "environment",
            }}
          />
        )}
      </div>
      <Loading />
    </div>
  );
};

export default QrCodeScanner;
