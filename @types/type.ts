import { StaticImageData } from "next/image";
import React from "react";

export interface WrapperProps {
    children: React.ReactNode;
}

export interface textProps {
    text: string;
}

export interface imgProps {
    src: string | StaticImageData;
    alt?: string;
}