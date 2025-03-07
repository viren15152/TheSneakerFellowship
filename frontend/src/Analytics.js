import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-K0JGKDL8SY";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize(TRACKING_ID);
      window.GA_INITIALIZED = true;
    }

    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

export default Analytics;

