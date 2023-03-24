import { StaticImageData } from "next/image";
import React from "react";

export interface WrapperProps {
    children: React.ReactNode;
}

export interface textProps {
    text: string;
    ref?: React.RefObject<HTMLSpanElement>;
    scrollState?: boolean;
}

export interface imgProps {
    src: string | StaticImageData;
    alt?: string;
}

export interface catergoryProps {
    text: string;
    src: string | StaticImageData;
    alt: string;
    ref?: React.RefObject<HTMLSpanElement>;
    scrollState?: boolean;
}