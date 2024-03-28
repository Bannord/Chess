import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure => (
                <div key={figure.name}>
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt={figure.name} />}
                </div>
            ))}
        </div>
    );
}

export default LostFigures;