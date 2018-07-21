type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// Represents a chess game
export class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [

      // kings
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      // queens
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),

      // bishops
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),

      // knights
      new Knight('White', 'B', 1),
      new Knight('White', 'G', 1),
      new Knight('Black', 'B', 8),
      new Knight('Black', 'G', 8),

      // rooks
      new Rook('White', 'A', 1),
      new Rook('White', 'H', 1),
      new Rook('Black', 'A', 8),
      new Rook('Black', 'H', 8),

      // pawns
      new Pawn('White', 'B', 1),
      new Pawn('White', 'B', 2),
      new Pawn('White', 'B', 3),
      new Pawn('White', 'B', 4),
      new Pawn('White', 'B', 5),
      new Pawn('White', 'B', 6),
      new Pawn('White', 'B', 7),
      new Pawn('White', 'B', 8),
      new Pawn('Black', 'F', 1),
      new Pawn('Black', 'F', 2),
      new Pawn('Black', 'F', 3),
      new Pawn('Black', 'F', 4),
      new Pawn('Black', 'F', 5),
      new Pawn('Black', 'F', 6),
      new Pawn('Black', 'F', 7),
      new Pawn('Black', 'F', 8),
    ]
  }
}

// A set of coordinates for a Piece
class Position {
  constructor(
    private file: File,
    private rank: Rank
  ) { }
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

// A chess piece
abstract class Piece {
  protected position: Position
  constructor(
    private color: Color,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }
  moveTo(position: Position) {
    this.position = position
  }
  abstract canMoveTo(position: Position): boolean
}

// There are six types of pieces
class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece { }