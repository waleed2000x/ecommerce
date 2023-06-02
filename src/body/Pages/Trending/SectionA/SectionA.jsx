import React, { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { styled } from "styled-components";

export default function SectionA() {
  const { theme } = useContext(ThemeContext);
  const Parent = styled.div`
    position: relative;
    display: flex;
    height: 90vh;
    width: 100vw;
    background-image: url("https://c8.alamy.com/comp/2AEBNN4/fashion-background-seamless-clothes-pattern-vector-illustration-2AEBNN4.jpg");
  `;
  const Heading = styled.div`
    color: black;
    width: 45%;
    height: 30%;
    margin-top: 250px;
    margin-left: 0px;
    z-index: 1;
    p {
      text-align: center;
      font-family: "Instrument Serif", serif;
      font-weight: bold;
      font-size: 100px;
    }
    b {
      font-family: "Times New Roman", Times, serif;
      font-size: 100px;
      font-style: italic;
      font-weight: 600;
    }
  `;
  const Circle = styled.div`
    position: absolute;
    top: 20px;
    right: 140px;
    background-image: url("https://previews.123rf.com/images/layritten/layritten1508/layritten150800013/43412570-seamless-pattern-of-colorful-clothes-for-stylish-design-transparent-pattern-background-of-clothing.jpg");
    border-radius: 50%;
    height: 695px;
    width: 730px;
    animation: rotation 20s linear infinite;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  `;

  const ZaraImage = styled.div`
    position: absolute;
    top: 25px;
    right: 250px;
    img {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      border: 2px solid black;
      animation: rotation 20s linear infinite reverse;
    }
  `;

  const NikeImage = styled.div`
    position: absolute;
    top: 230px;
    right: 470px;
    img {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      border: 2px solid white;
      animation: rotation 20s linear infinite reverse;
    }
  `;

  const OutfittersImage = styled.div`
    position: absolute;
    top: 230px;
    right: 25px;
    img {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      border: 2px solid black;
      animation: rotation 20s linear infinite reverse;
    }
  `;

  const AddidasImage = styled.div`
    position: absolute;
    top: 440px;
    right: 250px;
    img {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      border: 2px solid white;
      animation: rotation 20s linear infinite reverse;
    }
  `;
  const OurLogo = styled.div``;
  return (
    <Parent>
      <Heading>
        <p>
          We follow the <b>Trends</b>
        </p>
      </Heading>
      <Circle>
        <ZaraImage>
          <img
            alt="ZARA"
            src="https://cdn.worldvectorlogo.com/logos/zara-1.svg"
          />
        </ZaraImage>
        <OurLogo>
          <img alt="" src="" />
        </OurLogo>
        <NikeImage>
          <img
            alt="NIKE"
            src="https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg"
          />
        </NikeImage>
        <OutfittersImage>
          <img
            alt="OUTFITTERS"
            src="https://vectorseek.com/wp-content/uploads/2023/04/Outfitters-Logo-Vector-730x730.jpg"
          />
        </OutfittersImage>
        <AddidasImage>
          <img
            alt="ADDIDAS"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJGPfqEa2rngRbYWdBA60LkNnX6t0TUrrXR985hdF40OufvyNUgjOQVcNEh8kbFfxMbI&usqp=CAU"
          />
        </AddidasImage>
      </Circle>
    </Parent>
  );
}
