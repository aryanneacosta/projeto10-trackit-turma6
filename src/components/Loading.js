import React from 'react';
import "../../node_modules/css";
import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
    return (
            <ThreeDots
                color="#FFFFFF" 
                height={26} 
                width={64}
            />

    );
}