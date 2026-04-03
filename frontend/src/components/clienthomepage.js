// import React, { useState } from 'react';
// import globe from '../assets/home1.png';
// import delivery from '../assets/home2.png';
// import tracking from '../assets/home3.png';
// import logo from '../assets/MLlogo.png';
// import background from '../assets/background.png';
// import { borderRadius, height } from '@mui/system';
// import { useNavigate } from 'react-router-dom';


// const HomePage = () => {
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const navigate = useNavigate();


//   const styles = {
//     homepage: {
//       fontFamily: "'Segoe UI', sans-serif",
//       backgroundColor: '#fff',
//       maxHeight: '100vh',
//       overflow: 'hidden',
//     },
//     navbar: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '20px 40px',
//       backgroundColor: '#fff',
//       boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
//       height: '80px',
//     },
//     logo: {
//       width: '150px',
//       marginLeft: '80px'
//     },
//     navLinks: {
//       display: 'flex',
//       gap: '25px',
//     },
//     link: (isHovered) => ({
//       color: isHovered ? '#136498' : '#1a1a1a',
//       textDecoration: 'none',
//       fontWeight: 500,
//       fontSize: '16px',
//       transition: 'color 0.3s ease',
//       cursor: 'pointer',
//       padding: '20px',
//     }),
//     loginBtn: {
//       backgroundColor: '#5c90c3',
//       color: 'white',
//       padding: '10px 60px',
//       border: 'none',
//       borderRadius: '6px',
//       fontWeight: 500,
//       cursor: 'pointer',
//       fontSize: '16px',
//       marginRight: '80px'
//     },
//     sectionWrapper: {
//       backgroundImage: `url(${background})`,
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'top center',
//       backgroundSize: 'cover',
//       padding: '100px 20px 60px',
//       minHeight: 'calc(100vh - 80px)',
//       backgroundPosition: 'center 100px',
//       backgroundSize: '100%'
//     },
//     featuresSection: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '150px',
//       flexWrap: 'wrap',
//       maxWidth: '1400px',
//       margin: '0 auto',
//     },
//     feature: {
//       width: '280px',

//       // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
//       overflow: 'hidden',
//       // background: '#fff',
//       transition: 'all 0.3s ease',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       marginTop: '-80px'
//     },
//     featureImageOnly: {
//       padding: '20px',
//       background: 'transparent',
//     },
//     image: {
//       height: '200px',
//     },
//     featureTextBox: {
//       padding: '24px',
//       textAlign: 'center',
//       background: 'rgba(217, 217, 217, 0.21)',
//       boxShadow: '0 0 12px rgba(0, 0, 0, 0.2)', // ✅ updated

//       height: '250px'
//     },
//     featureTextBox1: {
//       padding: '24px',
//       textAlign: 'center',
//       background: '#649BC5',
//       boxShadow: '0 0 12px rgba(0, 0, 0, 0.2)',

//       // boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
//       height: '250px',


//     },

//     activeFeature: {

//       color: '#fff',
//     },
//     heading: {
//       fontSize: '22px',
//       marginBottom: '15px',
//       color: '#333',
//       fontWeight: 'normal',
//       textAlign: 'left',
//       marginTop: '15px'
//     },
//     activeHeading: {
//       fontSize: '18px',
//       marginBottom: '10px',
//       color: '#fff',
//     },
//     highlight: {
//       color: '#3a79c9',
//       fontWeight: 600,
//     },
//     activeHighlight: {
//       color: '#fff',
//       fontWeight: 600,
//     },
//     text: {
//       fontSize: '18px',
//       color: '#666',
//       textAlign: 'left'
//     },
//     activeText: {
//       fontSize: '14px',
//       color: '#dce6f1',
//     },
//   };

//   return (
//     <div style={styles.homepage}>
//       {/* ===== Navbar ===== */}
//       <header style={styles.navbar}>
//         <img src={logo} alt="Logo" style={styles.logo} />
//         <nav style={styles.navLinks}>
//           {['Home', 'Services', 'About', 'Contact Us'].map((text, index) => (
//             <a
//               key={index}
//               href="#"
//               style={styles.link(hoveredLink === index)}
//               onMouseEnter={() => setHoveredLink(index)}
//               onMouseLeave={() => setHoveredLink(null)}
//             >
//               {text}
//             </a>
//           ))}
//         </nav>
//         <button style={styles.loginBtn} onClick={() => navigate('/login')}>
//           Login
//         </button>
//       </header>

//       {/* ===== Main Section ===== */}
//       <section style={styles.sectionWrapper}>
//         <div style={styles.featuresSection}>
//           {/* === Card 1 === */}
//           <div style={styles.feature}>
//             <div style={styles.featureImageOnly}>
//               <img src={globe} alt="Globe" style={styles.image} />
//             </div>
//             <div style={styles.featureTextBox}>
//               <h3 style={styles.heading}>
//                 Multi Modal <br />
//                 <span style={styles.highlight}>Logistics Services</span>
//               </h3>
//               <p style={styles.text}>
//                 Ship On Time and cost effectively with Road, Air and Rail.
//               </p>
//             </div>
//           </div>

//           {/* === Card 2 (Active) === */}
//           <div style={{ ...styles.feature, ...styles.activeFeature }}>
//             <div style={styles.featureImageOnly}>
//               <img src={delivery} alt="Delivery" style={styles.image} />
//             </div>
//             <div style={styles.featureTextBox1}>
//               <h3 style={styles.heading}>
//                 Safe & <br />
//                 <span style={styles.activeHighlight}>Reliable</span>
//               </h3>
//               <p style={styles.text}>
//                 Delivery with extra care of your shipment.
//               </p>
//             </div>
//           </div>

//           {/* === Card 3 === */}
//           <div style={styles.feature}>
//             <div style={styles.featureImageOnly}>
//               <img src={tracking} alt="Tracking" style={styles.image} />
//             </div>
//             <div style={styles.featureTextBox}>
//               <h3 style={styles.heading}>
//                 Real <br />
//                 <span style={styles.highlight}>Time Tracking</span>
//               </h3>
//               <p style={styles.text}>
//                 Instant update & tracking of your shipment within few clicks.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;







import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import globe from '../assets/home1.png';
import delivery from '../assets/home2.png';
import tracking from '../assets/home3.png';
import logo from '../assets/MLlogo.png';
import background from '../assets/background.png';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const HomePage = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Navbar>
        <Logo src={logo} alt="Logo" />
        <Burger onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </Burger>
        <NavLinks menuOpen={menuOpen}>
          {[
            { text: 'Home', href: '/' },
            { text: 'Services', href: 'http://127.0.0.1:5503/mylogistic.html' }, 
            { text: 'About', href: '/about' },
            { text: 'Contact Us', href: '/contact' }
          ].map((item, index) => (
            <NavLink
              key={index}
              href={item.href}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              isHovered={hoveredLink === index}
              onClick={() => setMenuOpen(false)}    
            >
              {item.text}
            </NavLink>
          ))}

          <MobileLogin onClick={() => { navigate('/login'); setMenuOpen(false); }}>
            Login
          </MobileLogin>
        </NavLinks>
        <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
      </Navbar>

      <MainSection>
        <FeaturesSection>
          <FeatureCard>
            <FeatureImage>
              <CardImg src={globe} alt="Globe" />
            </FeatureImage>
            <FeatureText>
              <FeatureTitle>
                Multi Modal <br />
                <Highlight>Logistic Services</Highlight>
              </FeatureTitle>
              <FeatureDesc>
                Ship On Time and cost effectively with Road, Air and Rail.
              </FeatureDesc>
            </FeatureText>
          </FeatureCard>

          <FeatureCard active>
            <FeatureImage>
              <CardImg src={delivery} alt="Delivery" />
            </FeatureImage>
            <FeatureText active>
              <FeatureTitle>
                Safe & <br />
                <Highlight active>Reliable</Highlight>
              </FeatureTitle>
              <FeatureDesc active>
                Delivery with extra care of your shipment.
              </FeatureDesc>
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureImage>
              <CardImg src={tracking} alt="Tracking" />
            </FeatureImage>
            <FeatureText>
              <FeatureTitle>
                Real <br />
                <Highlight>Time Tracking</Highlight>
              </FeatureTitle>
              <FeatureDesc>
                Instant update & tracking of your shipment within few clicks.
              </FeatureDesc>
            </FeatureText>
          </FeatureCard>
        </FeaturesSection>
      </MainSection>
    </Wrapper>
  );
};

export default HomePage;

// ---------------------- STYLED COMPONENTS ----------------------       

const Wrapper = styled.div`
 fontFamily: "'Segoe UI', sans-serif",
 backgroundColor: '#fff',
  min-height: 100vh;
 overflow: 'hidden',
`;

const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  height: 140px;
  position: relative;
  z-index: 10;
`;

const Logo = styled.img`
  width: 150px;
  margin-left: 80px;

  @media (max-width: 1027px){
      margin-left: 30px;
  },

  @media (max-width: 768px) {
    margin-left: 10px;
    width: 120px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 25px;

  @media (max-width: 1027px) {
    position: absolute;
    top: 120px;
    right: 0;
    background-color: #fff;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    align-items: center;      // ✅ horizontally center flex items
    text-align: center; 

     
  }
`;

const NavLink = styled.a`
  color: ${({ isHovered }) => (isHovered ? '#136498' : '#1a1a1a')};
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
  cursor: pointer;
  padding: 20px;

    @media (max-width: 1027px) {
    padding-left: 40px;
  }

`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  margin-right: 30px;

  @media (max-width: 1027px) {
    display: block;
  }
`;

const MobileLogin = styled.div`
  background-color: #5c90c3;
  color: white;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  display: none;

  @media (max-width: 1027px) {
    display: block;
    width:100px;
    margin-left:40px;
  }
`;

const LoginButton = styled.button`
  background-color: #5c90c3;
  color: white;
  padding: 10px 60px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  margin-right: 80px;

  @media (max-width: 1027px) {
    display: none;
  }
`;

const MainSection = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center 100px;
  background-size: cover;
  padding: 100px 20px 60px;
  max-height: calc(100vh - 80px);
  margin-top:20px;


  @media (max-width: 1027px) {
    background-image: none;
    padding: 60px 20px 40px;
  }
    
`;

const FeaturesSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1027px) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  width: 280px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -80px;

  @media (max-width: 1027px) {
    margin-top: 0;
    width: 90%;
    max-width: 700px;
  }
`;

const FeatureImage = styled.div`
  padding: 20px;
  background: transparent;
`;

const CardImg = styled.img`
  height: 200px;
  object-fit: contain;

  @media (max-width: 1027px) {
    height: 180px;
  }
`;

const FeatureText = styled.div`
  padding: 24px;
  text-align: center;
  height: 250px;
  background: ${({ active }) =>
    active ? '#649BC5' : 'rgba(217, 217, 217, 0.21)'};
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  width: 100%;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }

  

`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: normal;
  text-align: left;
  margin-top: 15px;
  color: ${({ active }) => (active ? '#fff' : '#333')};
  padding:20px;
  padding-top:0;
  @media (max-width: 1027px) {
     text-align: center;
  }
`;

const Highlight = styled.span`
  color: ${({ active }) => (active ? '#fff' : '#3a79c9')};
  font-weight: 600;
`;

const FeatureDesc = styled.p`
  font-size: ${({ active }) => (active ? '18px' : '18px')};
  color: ${({ active }) => (active ? '#dce6f1' : '#666')};
  text-align: left;
  padding:20px;
  padding-top:0;
  @media (max-width: 1027px) {
     text-align: center;
  }
`;



