


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../api';
// import logo from '../assets/MLlogo.png';
// import delivery from '../assets/loginpageimage.png';

// const Profile = () => {
//   const [form, setForm] = useState({
//     phoneNumber: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     gender: '',
//     birthDate: ''
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedPhone = localStorage.getItem('phoneNumber');
//     if (savedPhone) {
//       setForm((prev) => ({ ...prev, phoneNumber: savedPhone }));
//     }
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await API.post('/complete-profile', form);
//       console.log(response.data);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Profile completion failed:', error);
//       alert(error.response?.data?.message || 'Error completing profile');
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
//           <h2 style={styles.loginTitle}>Complete Profile</h2>

//           <label style={styles.label}>Phone Number</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             style={styles.input}
//             value={form.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
            
//           />

//           <label style={styles.label}>First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             style={styles.input}
//             value={form.firstName}
//             onChange={handleChange}
//             placeholder="First Name"
//           />

//           <label style={styles.label}>Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             style={styles.input}
//             value={form.lastName}
//             onChange={handleChange}
//             placeholder="Last Name"
//           />

//           <label style={styles.label}>Email</label>
//           <input
//             type="email"
//             name="email"
//             style={styles.input}
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//           />

//           <label style={styles.label}>Gender</label>
//           <select
//             name="gender"
//             value={form.gender}
//             onChange={handleChange}
//             style={styles.input1}
//           >
//             <option value="">Select Gender</option>
//             <option value="female">Female</option>
//             <option value="male">Male</option>
//             <option value="other">Other</option>
//           </select>

//           <label style={styles.label}>Birth Date</label>
//           <input
//             type="date"
//             name="birthDate"
//             style={styles.input}
//             value={form.birthDate}
//             onChange={handleChange}
//           />

//           <button style={styles.button} onClick={handleSubmit}>
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

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
//     marginTop: '57px',
//   },
//   deliveryImage: {
//     width: '780px',
//     height: '100%',
//     objectFit: 'cover',
//     display: 'block',
//     marginTop: '55px',
//   },

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

//   input1:{
// width: '108%',
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
// };



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../api';
// import logo from '../assets/MLlogo.png';
// import delivery from '../assets/loginpageimage.png';
// import styled from 'styled-components';

// const Profile = () => {
//   const [form, setForm] = useState({
//     phoneNumber: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     gender: '',
//     birthDate: ''
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedPhone = localStorage.getItem('phoneNumber');
//     if (savedPhone) {
//       setForm((prev) => ({ ...prev, phoneNumber: savedPhone }));
//     }
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await API.post('/complete-profile', form);
//       console.log(response.data);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Profile completion failed:', error);
//       alert(error.response?.data?.message || 'Error completing profile');
//     }
//   };

//   return (
//     <Wrapper>
//       {/* Left Section */}
//       <Left>
//         <Logo src={logo} alt="logo" />
//         <Title>Send anything, anywhere from your doorstep.</Title>
//         <Subtitle>Courier parcels up to 50 Kg with ease.</Subtitle>
//         <DeliveryImg src={delivery} alt="delivery" />
//       </Left>

//       {/* Right Section */}
//       <Right>
//         <FormBox>
//           <FormTitle>Complete Profile</FormTitle>

//           <Label>Phone Number</Label>
//           <Input
//             type="text"
//             name="phoneNumber"
//             value={form.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//           />

//           <Label>First Name</Label>
//           <Input
//             type="text"
//             name="firstName"
//             value={form.firstName}
//             onChange={handleChange}
//             placeholder="First Name"
//           />

//           <Label>Last Name</Label>
//           <Input
//             type="text"
//             name="lastName"
//             value={form.lastName}
//             onChange={handleChange}
//             placeholder="Last Name"
//           />

//           <Label>Email</Label>
//           <Input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//           />

//           <Label>Gender</Label>
//           <Select name="gender" value={form.gender} onChange={handleChange}>
//             <option value="">Select Gender</option>
//             <option value="female">Female</option>
//             <option value="male">Male</option>
//             <option value="other">Other</option>
//           </Select>

//           <Label>Birth Date</Label>
//           <Input
//             type="date"
//             name="birthDate"
//             value={form.birthDate}
//             onChange={handleChange}
//           />

//           <Button onClick={handleSubmit}>Submit</Button>
//         </FormBox>
//       </Right>
//     </Wrapper>
//   );
// };

// export default Profile;

// // ------------------ STYLED COMPONENTS --------------------

// const Wrapper = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   font-family: 'Segoe UI', sans-serif;

//   @media (max-width: 1024px) {
//     flex-direction: column;
//     overflow-y: auto;
//   }
// `;

// const Left = styled.div`
//   position: relative;
//   width: 50%;
//   background: linear-gradient(to bottom, #649BC5, #304B5F);
//   color: white;
//   padding: 60px 40px 160px 40px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   box-sizing: border-box;

//   @media (max-width: 1024px) {
//     width: 100%;
//     padding: 40px 20px 250px 20px;
//     text-align: center;
//   }
// `;

// const Logo = styled.img`
//   width: 250px;
//   margin-top: -40px;
//   height: auto;
// `;

// const Title = styled.h2`
//   font-size: 32px;
//   text-align: center;
//   font-weight: 500;
// `;

// const Subtitle = styled.p`
//   font-size: 20px;
//   text-align: center;
//   margin-top: 40px;
// `;

// const DeliveryImg = styled.img`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   max-width: 100%;
//   height: auto;
//   pointer-events: none;

//   @media (max-width: 1025px) {
//     margin-top: 120px;
//     width: 110%;
//   }
// `;

// const Right = styled.div`
//   width: 50%;
//   background: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 40px;
//   box-sizing: border-box;

//   @media (max-width: 1024px) {
//     width: 100%;
//     padding: 40px 20px;
//   }
// `;

// const FormBox = styled.div`
//   width: 100%;
//   max-width: 350px;
//   box-sizing: border-box;

//   @media (max-width: 400px) {
//     max-width: 100%;
//   }
// `;

// const FormTitle = styled.h2`
//   font-size: 28px;
//   margin-bottom: 30px;
//   text-align: center;
//   color: #000;
// `;

// const Label = styled.label`
//   font-size: 14px;
//   margin-bottom: 5px;
//   display: block;
//   color: #333;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin-bottom: 20px;
//   border: 1px solid #ccc;
//   border-radius: 6px;
//   background-color: #f1f1f1;
//   font-size: 14px;

//   @media (max-width: 400px) {
//     font-size: 13px;
//     padding: 10px;
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 12px;
//   margin-bottom: 20px;
//   border: 1px solid #ccc;
//   border-radius: 6px;
//   background-color: #f1f1f1;
//   font-size: 14px;

//   @media (max-width: 400px) {
//     font-size: 13px;
//     padding: 10px;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color: #5294c4;
//   color: white;
//   border: none;
//   border-radius: 6px;
//   font-weight: 500;
//   font-size: 16px;
//   cursor: pointer;
//   margin-top: 10px;

//   &:hover {
//     background-color: #417aa7;
//   }
// `;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import logo from '../assets/MLlogo.png';
import delivery from '../assets/loginpageimage.png';
import styled from 'styled-components';

const Profile = () => {
  const [form, setForm] = useState({
    phoneNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    birthDate: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedPhone = localStorage.getItem('phoneNumber');
    if (savedPhone) {
      setForm((prev) => ({ ...prev, phoneNumber: savedPhone }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await API.post('/complete-profile', form);
      console.log(response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Profile completion failed:', error);
      alert(error.response?.data?.message || 'Error completing profile');
    }
  };

  return (
    <Wrapper>
      {/* Left Section */}
      <Left>
        <Logo src={logo} alt="logo" />
        <Title>Send anything, anywhere from your doorstep.</Title>
        <Subtitle>Courier parcels up to 50 Kg with ease.</Subtitle>
        <DeliveryImg src={delivery} alt="delivery" />
      </Left>

      {/* Right Section */}
      <Right>
        <FormBox>
          <FormTitle>Complete Profile</FormTitle>

          <Label>Phone Number</Label>
          <Input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <Row>
            <div>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>

            <div>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </Row>

          <Row>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            
            <div>
              <Label>Gender</Label>
              <Select name="gender" value={form.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </Select>
            </div>
          </Row>

          <Label>Birth Date</Label>
          <Input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
          />

          <Button onClick={handleSubmit}>Submit</Button>
        </FormBox>
      </Right>
    </Wrapper>
  );
};

export default Profile;    

// ------------------ STYLED COMPONENTS --------------------

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
  padding: 60px 40px 160px 40px;
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
    width: 110%;
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
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    max-width: 100%;
  }
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

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f1f1f1;
  font-size: 14px;

  @media (max-width: 400px) {
    font-size: 13px;
    padding: 10px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f1f1f1;
  font-size: 14px;

  @media (max-width: 400px) {
    font-size: 13px;
    padding: 10px;
  }
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
  min-width:
  

  &:hover {
    background-color: #417aa7;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;

  & > div {
    flex: 1;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0;
  }
`;
