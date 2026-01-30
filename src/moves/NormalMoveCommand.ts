import {Board} from "../../board/Board";
import {MoveCommand} from "../MoveCommand";
import {Move} from "../Move";
import {Piece} from "../../pieces/Piece";

export class NormalMoveCommand implements MoveCommand {

    private readonly move : Move;
    private readonly  capturePiece : Piece | null; 
    constructor(move : Move){
        this.move = move;
        this.capturePiece = move.pieceCaptured;

    }

    execute(board: Board) : Board {

        let newBoard = board.setPiece(this.move.toPosition.row, this.move.toPosition.col, this.move.pieceMoved);
        newBoard = newBoard.setPiece(this.move.fromPosition.row, this.move.fromPosition.col, null);
        return newBoard;
    }

    getCapturedPiece() : Piece | null {
        return this.capturePiece;
    }

    undo(board: Board) : Board {
        let newBoard = board.setPiece(this.move.fromPosition.row, this.move.fromPosition.col, this.move.pieceMoved);
        newBoard = newBoard.setPiece(this.move.toPosition.row, this.move.toPosition.col, this.capturePiece);
        return newBoard;
    }

}