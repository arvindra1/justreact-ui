import React from "react";
interface JustContextState {
    name: string;
    colors: string[];
}
interface JustContextValue {
    color: JustContextState;
    handleColorChange: () => void;
}
export declare const ColorProvider: React.FC;
export declare const JustConsumer: React.Consumer<JustContextValue | undefined>;
export declare const useColor: () => JustContextValue;
export {};
//# sourceMappingURL=Provider.d.ts.map