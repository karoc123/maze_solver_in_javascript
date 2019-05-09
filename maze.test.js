const mazeModule = require('./maze');
var fs = require('fs');

/* Test for maze_1 */
test('parse maze_1 from file, solve it and check with solution', () => {

    fs.readFile('mazes/maze_1.txt', 'utf8', function(err, data) {
        if (err) throw err;

        const maze = mazeModule.textToSolvedMaze(data);
        const mazeSolution = mazeModule.mazeToText(maze);

        fs.readFile('mazes/maze_1.solution.txt', 'utf8', function(err, data) {
            if (err) throw err;

            expect(mazeSolution).toBe(data);
        });
    });
});

/* Test for maze_2 */
test('parse maze_2 from file, solve it and check with solution', () => {

    fs.readFile('mazes/maze_2.txt', 'utf8', function(err, data) {
        if (err) throw err;

        const maze = mazeModule.textToSolvedMaze(data);
        const mazeSolution = mazeModule.mazeToText(maze);

        fs.readFile('mazes/maze_2.solution.txt', 'utf8', function(err, solution) {
            if (err) throw err;

            expect(mazeSolution).toBe(solution);
        });
    });
});

/* Test for maze_3 */
test('parse maze_3 from file, solve it and check with solution', () => {

    fs.readFile('mazes/maze_3.txt', 'utf8', function(err, data) {
        if (err) throw err;

        const maze = mazeModule.textToSolvedMaze(data);
        const mazeSolution = mazeModule.mazeToText(maze);

        fs.readFile('mazes/maze_3.solution.txt', 'utf8', function(err, solution) {
            if (err) throw err;

            expect(mazeSolution).toBe(solution);
        });
    });
});

/* Test for maze_4 */
test('parse maze_4 from file, solve it and check with solution', () => {

    fs.readFile('mazes/maze_4.txt', 'utf8', function(err, data) {
        if (err) throw err;

        const maze = mazeModule.textToSolvedMaze(data);
        const mazeSolution = mazeModule.mazeToText(maze);

        fs.readFile('mazes/maze_4.solution.txt', 'utf8', function(err, solution) {
            if (err) throw err;

            expect(mazeSolution).toBe(solution);
        });
    });
});

/* Test for maze_5 */
test('parse maze_5 from file, solve it and check with solution', () => {

    fs.readFile('mazes/maze_5.txt', 'utf8', function(err, data) {
        if (err) throw err;

        const maze = mazeModule.textToSolvedMaze(data);
        const mazeSolution = mazeModule.mazeToText(maze);

        fs.readFile('mazes/maze_5.solution.txt', 'utf8', function(err, solution) {
            if (err) throw err;

            expect(mazeSolution).toBe(solution);
        });
    });
});

/* Valid Test for maze_1 */
test('parse maze_1 from file and check if valid', () => {

    fs.readFile('mazes/maze_1.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.isMazeValid(data)).toBe(true);
    });
});

/* Valid Test for maze_2 */
test('parse maze_2 from file and check if valid', () => {

    fs.readFile('mazes/maze_2.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.isMazeValid(data)).toBe(true);
    });
});

/* Valid Test for maze_3 */
test('parse maze_3 from file and check if valid', () => {

    fs.readFile('mazes/maze_3.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.isMazeValid(data)).toBe(true);
    });
});

/* Valid Test for maze_4 */
test('parse maze_4 from file and check if valid', () => {

    fs.readFile('mazes/maze_4.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.isMazeValid(data)).toBe(true);
    });
});

/* Valid Test for maze_5 */
test('parse maze_5 from file and check if valid', () => {

    fs.readFile('mazes/maze_5.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.isMazeValid(data)).toBe(true);
    });
});

/* Valid Test for maze_6_incomplete */
test('parse maze_6_incomplete from file and check if valid', () => {

    fs.readFile('mazes/maze_6_incomplete.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.isMazeValid(data)).toBe(false);
    });
});

/* Valid Test for maze_7_invalid_format_1 */
test('parse maze_7_invalid_format_1 from file and check if valid', () => {

    fs.readFile('mazes/maze_7_invalid_format_1.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.isMazeValid(data)).toBe(false);
    });
});

/* Valid Test for maze_8_invalid_format_2 */
test('parse maze_8_invalid_format_2 from file and check if valid', () => {

    fs.readFile('mazes/maze_8_invalid_format_2.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.isMazeValid(data)).toBe(false);
    });
});

/* Valid Test for maze_9_no_exits */
test('parse maze_9_no_exits from file and check if valid', () => {

    fs.readFile('mazes/maze_9_no_exits.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.isMazeValid(data)).toBe(false);
    });
});

/* Solution Test for maze_10_unsolvable */
test('parse maze_10_unsolvable from file and check if solvable', () => {

    fs.readFile('mazes/maze_10_unsolvable.txt', 'utf8', function(err, data) {
        if (err) throw err;
        expect(mazeModule.textToSolvedMaze(data)).toBe(false);
    });
});