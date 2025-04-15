import { createContext, useContext, useEffect, useState } from "react";
import { fetchInsights } from "../services/api";

const InsightContext = createContext();

export const useInsights = () => useContext(InsightContext);

export const InsightProvider = ({ children }) => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadInsights = async () => {
    setLoading(true);
    const data = await fetchInsights();
    if (data) setInsights(data);
    setLoading(false);
  };

  useEffect(() => {
    loadInsights();

    // Optional: refresh every 15s
    const interval = setInterval(loadInsights, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <InsightContext.Provider value={{ insights, loading }}>
      {children}
    </InsightContext.Provider>
  );
};
