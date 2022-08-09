import '../styles/globals.css'
import React, {useState} from'react'
function MyApp({ Component, pageProps }) {
  const [hasMounted, setHasMounted] = useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <Component {...pageProps} />
}

export default MyApp
