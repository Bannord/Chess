import { Figure } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import { FigureNames } from "./Figure";

import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'

export class King extends Figure {



    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }
    
        // Проверка возможности хода на одну клетку в любом направлении
        const deltaX = Math.abs(target.x - this.cell.x);
        const deltaY = Math.abs(target.y - this.cell.y);
    
        if ((deltaX <= 1) && (deltaY <= 1)) {
            // Проверка, что на целевой клетке нет фигуры того же цвета
            if (this.cell.board.getCell(target.x, target.y).isEmpty() || !this.cell.isEnemy(target)) {
                return true;
            }
        }
    
      return false;
    }
}