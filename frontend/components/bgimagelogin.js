import Image from 'next/Image'
import {useEffect,useState} from 'react'
/*import styled from "styled-components"
const Box = styled.div`
  position: fixed;
  zindex: 0;
  top: 0;
`;*/

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function bgimagelogin() {
  const [width, setWidth] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box>
        <Image
          src={`https://source.unsplash.com/${width}x${height}/?nature,water,mountains,landscape`}
          alt="Picture of the author"
          width={width}
          height={height}
        />
      </Box>
    );
  }

  return null;
}
export default bgimagelogin