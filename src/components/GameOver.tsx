import { FC } from "react";
// import { Player } from "../models/Player";
// import { Figure } from "../models/figures/Figure";

interface GameOverProps {
    // restart: () => void
}




const GameOVer:FC<GameOverProps> = () => {

    // console.log(restart)
 
    
    const handleRestart = () => {

        // restart()
    }

    return ( 

        <div className="main-wrapper-popup">
            <div className="popUp_background"> 
                <div className="popUp-content">
                    <h3>Проиграл</h3>
                    <button onClick={handleRestart}>Restart</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default GameOVer;