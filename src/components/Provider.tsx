import { gradientPalettes } from "@/data";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

// Define the type for the context state
interface JustContextState {
  name: string;
  colors: string[];
}

// Define the type for the context value
interface JustContextValue {
  color: JustContextState;
  handleColorChange: () => void;
}

// Create the context with the defined state type
const JustContext = createContext<JustContextValue | undefined>(undefined);

// Define the provider component
export const ColorProvider: React.FC = ({ children }) => {
  // Initialize the state
  const [color, setColor] = useState<JustContextState>(gradientPalettes?.[0]);

  const handleColorChange = (): void => {
    const randomIndex = Math.floor(Math.random() * 50);
    setColor(gradientPalettes?.[randomIndex]);
  };

  return (
    <JustContext.Provider value={{ color, handleColorChange }}>
      {children}
    </JustContext.Provider>
  );
};

// Define the consumer component
export const JustConsumer = JustContext.Consumer;

// Define the custom hook for easy access to the context
export const useColor = () => {
  const context = useContext(JustContext);

  if (context === undefined) {
    throw new Error("useJustContext must be used within a JustProvider");
  }

  return context;
};