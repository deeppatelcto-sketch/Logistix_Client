// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../api';
// import logo from '../assets/MLlogo.png';
// import delivery from '../assets/loginpageimage.png'; 

// const Login = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const navigate = useNavigate();

//   // Prevent scrolling
//   useEffect(() => {
//     document.body.style.margin = '0';
//     document.body.style.overflow = 'hidden';
//     document.documentElement.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = '';
//       document.documentElement.style.overflow = '';
//     };
//   }, []);

//   const handleSendOtp = async () => {
//     try {
//       await API.post('/get-otp', { phoneNumber });
//       setOtpSent(true);
//     } catch (err) {
//       alert('Failed to send OTP');
//     }
//   };

//   const handleVerify = async () => {
//     try {
//       const res = await API.post('/verify-otp', { phoneNumber, otp });
//       localStorage.setItem('token', res.data.token);
//       res.data.isProfileComplete ? navigate('/dashboard') : navigate('/profile');
//     } catch (err) {
//       alert('OTP verification failed');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Left Section */}
//       <div style={styles.left}>
//         <img src={logo} alt="logo" style={styles.logo} />
//         <h2 style={styles.heading}>
//           Send anything, anywhere<br />from your doorstep.
//         </h2>
//         <p style={styles.subtext}>Courier parcels up to 50 Kg with ease.</p>
//         <img src={delivery} alt="delivery" style={styles.deliveryImage} />
//       </div>

//       {/* Right Section */}
//       <div style={styles.right}>
//         <div style={styles.formBox}>
//           <h2 style={styles.loginTitle}>Login</h2>

//           <label style={styles.label}>Phone Number</label>
//           <input
//             type="text"
//             style={styles.input}
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             placeholder="Enter phone number"
//           />

//           {otpSent && (
//             <>
//               <label style={styles.label}>OTP</label>
//               <input
//                 type="text"
//                 style={styles.input}
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//               />
//             </>
//           )}

//           <button style={styles.button} onClick={otpSent ? handleVerify : handleSendOtp}>
//             {otpSent ? 'Verify OTP' : 'Send OTP'}
//           </button>

//           {/* <div style={styles.links}>
//             <a href="#" style={styles.link}>Forgot <span style={styles.highlight}>Password?</span></a>
//             <p>Don’t have an account? <a href="/register" style={styles.highlight}>Sign Up</a></p>
//           </div> */}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // ------------------ STYLES --------------------

// const styles = {
//   container: {
//     display: 'flex',
//     width: '100vw',
//     height: '100vh',
//     fontFamily: 'Segoe UI, sans-serif',
//   },
//   left: {
//     width: '50%',
//     background: 'linear-gradient(to bottom, #649BC5, #304B5F)',
//     color: 'white',
//     padding: '60px 40px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     boxSizing: 'border-box',
//     height: '100vh',
//   },
//   logo: {
//     width: '250px',
//     marginTop: '-40px',
//     height: 'auto',
//   },
//   heading: {
//     fontSize: '32px',
//     textAlign: 'center',
//     fontWeight: 500,
//     marginBottom: '10px',
//     width: '100%',

//   },
//   subtext: {
//     fontSize: '20px',
//     textAlign: 'center',
//     marginBottom: '20px',
//     marginTop:'57px'

//   },
//   deliveryImage: {
//   width: '780px',
//   height: '100%',
//   objectFit: 'cover',
//   display: 'block',
//   marginTop:'55px'
// },

//   right: {
//     width: '50%',
//     background: '#fff',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px',
//     boxSizing: 'border-box',
//   },
//   formBox: {
//     width: '100%',
//     maxWidth: '350px',
//   },
//   loginTitle: {
//     fontSize: '28px',
//     marginBottom: '30px',
//     textAlign: 'center',
//     color: '#000',
//   },
//   label: {
//     fontSize: '14px',
//     marginBottom: '5px',
//     display: 'block',
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: '12px',
//     marginBottom: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '6px',
//     backgroundColor: '#f1f1f1',
//     fontSize: '14px',
//   },
//   button: {
//     width: '108%',
//     padding: '10px',
//     backgroundColor: '#5294c4',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     fontWeight: 500,
//     fontSize: '16px',
//     cursor: 'pointer',
//     marginTop: '10px',
//   },
//   links: {
//     marginTop: '20px',
//     textAlign: 'center',
//     fontSize: '14px',
//   },
//   link: {
//     color: '#333',
//     textDecoration: 'none',
//   },
//   highlight: {
//     color: '#4f83c4',
//     fontWeight: 500,
//     cursor: 'pointer',
//   },

//   // Note: Responsive styles should be done in CSS-in-JS or with @media queries in CSS
// };

// // You may also consider moving styles to a CSS/SCSS file if the project grows.



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import logo from '../assets/MLlogo.png';
import delivery from '../assets/loginpageimage.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import styled from 'styled-components';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'error',
  });

  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!phoneNumber.trim()) {
      setSnackbar({ open: true, message: 'Please enter your mobile number', severity: 'error' });
      return;
    }
    try {
      await API.post('/get-otp', { phoneNumber });
      setOtpSent(true);
      setSnackbar({ open: true, message: 'OTP sent successfully', severity: 'success' });
    } catch (err) {
      setSnackbar({ open: true, message: 'Failed to send OTP', severity: 'error' });
    }
  };

  const handleVerify = async () => {
    if (!phoneNumber.trim()) {
      setSnackbar({ open: true, message: 'Please enter your mobile number', severity: 'error' });
      return;
    }
    try {
      const res = await API.post('/verify-otp', { phoneNumber, otp });
      localStorage.setItem('token', res.data.token);
      setSnackbar({ open: true, message: 'OTP verified successfully', severity: 'success' });

      setTimeout(() => {
        if (res.data.isProfileComplete) {
          navigate('/dashboard');
        } else {
          
          setTimeout(() => navigate('/profile'), 1500);
        }
      }, 1500);
    } catch (err) {
      setSnackbar({ open: true, message: 'OTP verification failed', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Wrapper>
      <Left>
        <Logo src={logo} alt="logo" />
        <Title>Send anything, anywhere from your doorstep.</Title>
        <Subtitle>Courier parcels up to 50 Kg with ease.</Subtitle>
        <DeliveryImg src={delivery} alt="delivery" />
      </Left>

      <Right>
        <FormBox>
          <FormTitle>Login</FormTitle>

          <Label>Phone Number</Label>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />

          {otpSent && (
            <>
              <Label>OTP</Label>
              <Input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
            </>
          )}

          <Button onClick={otpSent ? handleVerify : handleSendOtp}>
            {otpSent ? 'Verify OTP' : 'Send OTP'}
          </Button>
        </FormBox>
      </Right>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: '100%',
            backgroundColor: snackbar.severity === 'success' ? '#2e7d32' : '#d32f2f',
            color: '#fff',
            fontWeight: 500,
            fontSize: '15px',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 1024px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const Left = styled.div`
  position: relative;
  width: 50%;
  background: linear-gradient(to bottom, #649BC5, #304B5F);
  color: white;
  padding: 60px 40px 160px 40px; /* bottom padding for image space */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 40px 20px 250px 20px;
    text-align: center;
  }
`;

const DeliveryImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: auto;
  pointer-events: none;

  @media (max-width: 1025px) {
    margin-top: 120px;
    width:110%;
  }
`;

const Right = styled.div`
  width: 50%;
  background: #fff;
  display: flex;
  justify-content: center;      
  align-items: center;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

const FormBox = styled.div`
  width: 100%;
  max-width: 350px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    max-width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f1f1f1;
  font-size: 14px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    font-size: 13px;
    padding: 10px;
  }
`;


const Logo = styled.img`
  width: 250px;
  margin-top: -40px;
  height: auto;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  font-weight: 500;
`;

const Subtitle = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
`;

const FormTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
  color: #000;
`;

const Label = styled.label`       
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
  color: #333;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #5294c4;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #417aa7;
  }
`;
