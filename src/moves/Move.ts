import { Position } from "../board/Position";
import { Piece } from "../pieces/Piece";

export interface Move {
    from: Position;
    to: Position;
    piece: Piece;
}
