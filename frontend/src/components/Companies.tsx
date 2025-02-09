import React from "react";
import { keyframes, styled } from "styled-components";

const logos = [
  { name: "LXMI", src: "/lxmi.png" },
  { name: "Odacité", src: "/odacite.png" },
  { name: "Pai", src: "/pai.png" },
  { name: "Paula’s Choice", src: "/paulas-choice.png" },
  { name: "REN Clean Skincare", src: "/ren.png" },
  { name: "The Ordinary", src: "/ordinary.jpeg" },

  { name: "LXMI", src: "/lxmi.png" },
  { name: "Odacité", src: "/odacite.png" },
  { name: "Pai", src: "/pai.png" },
  { name: "Paula’s Choice", src: "/paulas-choice.png" },
  { name: "REN Clean Skincare", src: "/ren.png" },
  { name: "The Ordinary", src: "/ordinary.jpeg" },
];

// Keyframes for smooth infinite scrolling
const marqueeAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

// Styled Components
const Section = styled.section`
  max-width: 1400px;
  margin: auto;
  padding: 4rem 2rem;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const LogosContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 6rem 0;
`;

const LogosTrack = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  animation: ${marqueeAnimation} 20s linear infinite; /* Smooth infinite scroll */
  min-width: 200%;
`;

const Logo = styled.img`
  margin: 0 50px;
  max-height: 80px; /* Bigger logos */
  width: auto;
  object-fit: contain;
  flex: 0 0 auto;
  filter: grayscale(20%);
`;

const Companies: React.FC = () => {
  return (
    <Section id="logos">
      <h2 className="text-4xl font-display text-[#8B817A]">INDUSTRY LEADING RECOMMENDATIONS</h2>
      <LogosContainer>
        <LogosTrack>
          {logos.map((logo, index) => (
            <Logo key={index} src={logo.src} alt={logo.name} loading="lazy" />
          ))}
          {logos.map((logo, index) => (
            <Logo key={`duplicate-${index}`} src={logo.src} alt={logo.name} loading="lazy" />
          ))}
        </LogosTrack>
      </LogosContainer>
    </Section>
  );
};

export default Companies;
