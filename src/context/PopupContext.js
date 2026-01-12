import { createContext, useState } from 'react';

export const PopupContext = createContext({
  isManualOpen: false,
  openManualPopup: () => {},
  closeManualPopup: () => {},
});

export const PopupProvider = ({ children }) => {
  const [isManualOpen, setIsManualOpen] = useState(false);

  const openManualPopup = () => setIsManualOpen(true);
  const closeManualPopup = () => setIsManualOpen(false);

  return (
    <PopupContext.Provider
      value={{ isManualOpen, openManualPopup, closeManualPopup }}
    >
      {children}
    </PopupContext.Provider>
  );
};
