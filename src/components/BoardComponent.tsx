import { FC, useEffect, useState } from "react";
import React from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponents";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;

}

const BoardComponent:FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function click(cell: Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer()
            setSelectedCell(null)
            updateBoard()
        } else {
            if(cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
           
        }
       
           
        
        
    }

    useEffect(() => {
        highLightCells()
    }, [selectedCell])

    function highLightCells() {
        board.highLightCells(selectedCell)

        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return ( 
        <div>
        <h3>Сейчас ходит {currentPlayer?.color}</h3>
         <div className="board">
            {board.cells.map((row, index) => 
            <React.Fragment key={index}>
                {row.map(cell => 
                    <CellComponent 
                    click={click}
                    cell={cell}
                    key={cell.id}
                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                    />)}
            </React.Fragment>            
            
            )}

        </div>
        </div>
       
     );
}
 
export default BoardComponent;