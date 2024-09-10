import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import loaderData from '../../public/loader.json'; // Adjust the path according to your project structure

export default function Loading() {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((currentCounter) => --currentCounter);
    }, 1000);

    if (counter === 0) {
      clearInterval(interval); // Clear the interval when counter reaches 0
      navigate("/login", {
        state: location.pathname,
      });
    }

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [counter, navigate, location.pathname]);

  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        border: "1px solid red",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Lottie
        options={defaultOptions}
        height={80}
        width={80}
      />
      {/* Wait {counter} */}
    </div>
  );
}
