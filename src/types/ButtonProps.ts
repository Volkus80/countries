import type { ReactNode } from "react";

export type ButtonProps = {
    onClick?: () => void;
    children?: ReactNode | ReactNode[]
}
