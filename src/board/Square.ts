import { Position } from "./Position";
import { Piece } from "../pieces/Piece";

export class Cell{
    readonly position: Position;
    private  readonly piece: Piece | null;
    
    constructor(position: Position, piece: Piece | null = null) {
        this.position = position;
        this.piece = piece;
    }
    getPiece(): Piece | null {
        return this.piece;
    }
    isEmpty() : boolean {
        return this.piece === null; 
    }

    withPiece(piece : Piece | null) : Cell {
        return new Cell(this.position, piece);
    }

}