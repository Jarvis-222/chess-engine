import {Color} from "../pieces/Color";
import {Position} from "../board/Position";
import {PieceType} from "../pieces/PieceType";
import {Board} from "../board/Board";
import {Move} from "../moves/Move";

export abstract class Piece {

    protected readonly color: Color;
    protected readonly type: PieceType;
    protected position: Position;

    constructor(color: Color, type: PieceType, position: Position) {
        this.color = color;
        this.type = type;
        this.position = position;
    }

    getColor(): Color {

        return this.color;
    }

    getType(): PieceType {
        return this.type;
    }

    getPosition(): Position {
        return this.position;
    }

    setPoisition(position: Position): void {
        this.position = position;
    }


    abstract getLegalMoves(board: Board): Move[]; 

    protected generateSlidingMoves(board: Board, directions: { row: number; col: number }[]): Move[] {
        const legalMoves: Move[] = [];

        for(const direction of directions){

            let currPosition = this.position; 

            while
        }

        return legalMoves;
}