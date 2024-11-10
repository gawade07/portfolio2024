import { createContext, useContext, useState } from "react";

const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [scroller, setScoller] = useState('');
  const [time, setTime] = useState(null);
  return (
    <>
      <BioContext.Provider
        value={{ menu, setMenu, scroller, setScoller,time, setTime}}
      >
        {children}
      </BioContext.Provider>
    </>
  );
};

export const useCommon = () => {
  return useContext(BioContext);
};
