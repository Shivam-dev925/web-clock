import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  background: transparent;
  align-items: center;
  overflow-y: hidden;

  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media (min-width: 425px) and (max-width: 767px) {
    height: 65vh;
    position: relative;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    border-bottom: 1px solid grey;
  }
`;

export const Box = styled.div`
  width: ${({ width }) => width && width};

  cursor: ${({ cursor }) => cursor && cursor};
  z-index: ${({ Zindex }) => Zindex && Zindex};

  height: ${({ height }) => height && height};
  position: ${({ position }) => position && position};
  display: ${({ display }) => display && display};
  border-radius: ${({ Radius }) => Radius && Radius};
  flex-direction: ${({ Direction }) => Direction && Direction};
  align-items: center;
  background: ${({ bgColor }) => bgColor && bgColor};
  background-image: ${({ bgImage }) => bgImage && bgImage};
  object-fit: ${({ Ratio }) => Ratio && Ratio};
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: ${({ justify }) => justify && justify};
  background-position: ${({ bgPosition }) => bgPosition && bgPosition};
   opacity:${({opacity})=>opacity&&opacity} ;
  background-attachment: ${({ Attachment }) => Attachment && Attachment};

  @media (min-width: 768px) and (max-width: 1024px) {
  }
`;

export const Circle = styled.div`
  display: ${({ display }) => display && display};
  align-items: center;
  justify-content: ${({ justify }) => justify && justify};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  border-radius: 50%;
  background: transparent;
  border: ${({ border }) => border && border};
  position: relative;
  & ::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: ${({ widthAfter }) => widthAfter && widthAfter};
    height: ${({ heightAfter }) => heightAfter && heightAfter};
    border-top: ${({ BorderTopAfter }) => BorderTopAfter && BorderTopAfter};
    border-right: ${({ BorderRightAfter }) =>
      BorderRightAfter && BorderRightAfter};
    border-radius: 50%;
    animation: ${({ animation }) => animation && animation};
  }

  @keyframes rotateCircle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
