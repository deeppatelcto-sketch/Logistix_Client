import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    await API.post('/get-otp', { phoneNumber });
    setOtpSent(true);
  };

  const handleVerify = async () => {
    const res = await API.post('/verify-otp', { phoneNumber, otp });
    localStorage.setItem('token', res.data.token);
    res.data.user.profileCompleted ? navigate('/dashboard') : navigate('/profile');
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      {otpSent ? (
        <>
          <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={handleVerify}>Verify OTP</button>
        </>
      ) : (
        <button onClick={handleSendOtp}>Send OTP</button>
      )}
    </div>
  );
};

export default Register;
