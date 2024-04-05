import  { FC } from "react";
import { Figure } from "../models/figures/Figure";
import GameOVer from "./GameOver";

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}



const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
    console.log(figures)
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure => (
                (figure.name === 'Король') ? (
                    <GameOVer key={figure.name} />
                ) : (
                    <div key={figure.name}>
                        {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt={figure.name} />}
                    </div>
                )
            ))}
        </div>
    );
}

export default LostFigures;