import { createContext, useContext, useState } from 'react';

const defaultHeaderText = 'Hi, I want to send an inquiry about-';
const defaultBodyText = 'Hi, I want to send an inquiry about-';

interface WhatsAppContextValue {
  message: string;
  setMessage: (msg: string) => void;
}

const WhatsAppContext = createContext<WhatsAppContextValue>({
  message: defaultBodyText,
  setMessage: () => {},
});

export function WhatsAppProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState(defaultBodyText);
  return (
    <WhatsAppContext.Provider value={{ message, setMessage }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsAppMessage() {
  return useContext(WhatsAppContext);
}

export { defaultHeaderText, defaultBodyText };