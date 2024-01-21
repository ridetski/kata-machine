const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  //Base Case
  //of the map
  if (curr.x < 0 || curr.x > maze[curr.y].length || curr.y < 0 || curr.y > maze.length) {
    return false;
  }
  //on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  //its the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }
  //if we have seen it
  if (seen[curr.y][curr.x]) {
    return false;
  }
  //recursion case
  //3 steps
  //pre
  seen[curr.y][curr.x] = true;
  path.push(curr);
  //recurse
  for (let i = 0; i < direction.length; i++) {
    const [x, y] = direction[i];
    if (walk(maze, wall, {
      x: curr.x + x,
      y: curr.y + y,
    }, end, seen, path)) {
      return true;
    }
  }
  //post
  path.pop();

  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[i].length).fill(false))
  }

  walk(maze, wall, start, end, seen, path)

  return path;
}