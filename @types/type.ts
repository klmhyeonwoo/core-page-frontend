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

export interface refProps {
    ref?: React.RefObject<HTMLDivElement>;
    scrollState?: boolean;
}

export interface imgProps {
    src: string | StaticImageData;
    alt?: string;
}

export interface brandImgProps {
    src: string | StaticImageData;
    alt: string;
    ref?: React.RefObject<HTMLSpanElement>;
    scrollState?: boolean;
}

export interface catergoryProps {
    text: string;
    src: string | StaticImageData | any;
    alt: string;
    ref?: React.RefObject<HTMLSpanElement>;
    scrollState?: boolean;
}

export interface skillProps {
    skill: string;
    scrollState?: boolean;
    ref?: React.RefObject<HTMLSpanElement>;
}

export interface AppLayoutProps {
    children: React.ReactNode;
}

export interface questionProps {
    question?: string;
    answer?: string;
}