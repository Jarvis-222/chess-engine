import {Cell} from "./Cell";
import { Piece } from "../pieces/Piece";
import { Position } from "./Position";

export class Board{

    readonly cells: Cell[][]; 

    constructor(cells : Cell[][] | null ){

        if(cells){
            this.cells = cells;
        }
        else{

            this.cells = [];
            for(let row = 0; row < 8; row++){
                const rowCells: Cell[] = [];
                for(let col = 0; col < 8; col++){
                    rowCells.push( new Cell(new Position(row, col), null) );
                }
                this.cells.push(rowCells);
            }
        }
    }

    getCell(row: number, col: number): Cell {
        return this.cells[row][col];
    }

    setPiece(row: number, col: number, Piece): Board {

        const newCells = this.cells.map((r) => r.slice()); // deep copy
        newCells[row][col] = new Cell(new Position(row, col), Piece);
        return new Board(newCells);

    }


}