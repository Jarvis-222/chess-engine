import { Board } from "../board/Board";

export abstract class MoveCommand {
    
    abstract execute(board: Board) : Board;
    abstract undo(board: Board) : Board;
    
}