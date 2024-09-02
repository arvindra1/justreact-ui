import React from 'react';
export interface glassType {
    blur?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
    transparency?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}
export interface BasicCardProps {
    children?: JSX.Element;
    className?: string;
    style?: object;
    bordered?: boolean;
    outlined?: boolean;
    glass?: boolean;
    glassOption?: glassType;
    background?: string;
    hoverType?: 'up' | 'left' | `right` | `down` | 'zoom' | undefined;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export declare const Card: React.FC<BasicCardProps>;
//# sourceMappingURL=Card.d.ts.map