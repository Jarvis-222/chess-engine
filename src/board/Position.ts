export class Position {
    readonly row: number; 
    readonly col: number;
    
    constructor(row: number, col: number) {

        if (row < 0 || col < 0 || row >= 8 || col >= 8) {
            throw new Error("Position out of bounds");
        }
        this.row = row;
        this.col = col;
    }   
}