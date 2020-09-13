import React from 'react';
import './right.css'

export interface RightProps {
    text: string
}

export function Right({text}: RightProps) {

    return <div>{text}</div>
}