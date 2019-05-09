/*
    Initializing global variables
*/
var textFile = null; // where the solution gets saved

/*
    handler when the user changes the input file
*/
function process(event) {
    var files = event.target.files;
    var reader = new FileReader();
    reader.onload = function() {
        var contents = this.result;

        if (isMazeValid(this.result)) {
            var maze = textToSolvedMaze(contents);

            if (maze != false) {
                // maze is valid and has solution
                let textbox = document.getElementById('textbox');
                let link = document.getElementById('downloadLink');
                printMazeIntoTextbox(maze, textbox); // print the maze into the textbox
                link.href = makeTextFile(textbox.value); // change download link
                link.download = files[0].name.substr(0, files[0].name.length - 4) + "_solution_zink.txt"; // change download name

                document.getElementById('progress').innerHTML = "maze is valid!";
                document.getElementById('progress').style.color = "green";
            } else {
                // maze is valid but has no solution!
                document.getElementById('textbox').value = "";
                document.getElementById('progress').innerHTML = "maze is valid but has no solution!";
                document.getElementById('progress').style.color = "red";
            }

        } else {
            //maze is not valid
            document.getElementById('textbox').value = "";
            document.getElementById('progress').innerHTML = "maze is not valid!";
            document.getElementById('progress').style.color = "red";
        }
    };
    reader.readAsText(files[0]);
}


/*
    checks if a maze-STRING is valid
*/
const isMazeValid = (string) => {
    // Creates multidimensional array with 41 rows and 81 columns
    var maze = createArray(41, 81);

    // fill with data
    parseMazeString(string, maze);

    //check for entry & exit
    if (maze[0][1] != " " || maze[40][79] != " ") {
        return false;
    }

    //check if only walls or space in maze
    for (let row = 0; row < 41; row++) {
        for (let column = 0; column < 81; column++) {
            if (maze[row][column] != "#" && maze[row][column] != " ") {
                return false;
            }
        }
    }

    return true;
};

/*
    fill "maze" array with data from file
*/
const parseMazeString = (contents, maze) => {
    var row = 0;
    var column = 0;

    // loop after every character and fill into array
    for (let j = 0; j < contents.length; j++) {
        maze[row][column] = contents.substr(j, 1);
        column++;
        if (column >= 82) {
            column = 0;
            row++;
        }
    }
};

/*
    helper function to create an n-dimensional array
*/
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--)
            arr[length - 1 - i] = createArray.apply(this, args);
    }
    return arr;
}


/*
    prints the whole maze into the textbox
*/
const printMazeIntoTextbox = (mazeToPrint, textbox) => {
    textbox.value = mazeToText(mazeToPrint);
};

/*
    create a maze form text
    ATTENTION: hardcoded values of maze size
*/
const textToSolvedMaze = (textToMaze) => {
    // Creates multidimensional array with 41 rows and 81 columns
    var maze = createArray(41, 81);

    // read all content of the file
    parseMazeString(textToMaze, maze);

    // Create solution
    if (solveMaze(maze, 0, 1)) {
        cleanMaze(maze);
        return maze;
    } else {
        return false;
    }

};

/*
    create string from a maze
    ATTENTION: hardcoded values of maze size
*/
const mazeToText = (mazeToPrint) => {
    let text = "";

    for (let i = 0; i < 41; i++) {
        let row = "";
        for (let j = 0; j < 81; j++) {
            row = row + mazeToPrint[i][j];
        }

        text += row + '\n';
    }

    return text;
};

/*
    creates a file to download
*/
const makeTextFile = (text) => {
    var data = new Blob([text], { type: 'text/plain' });

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL to use as a href
    return textFile;
};


/*
    check if the move is allowed
    check if its within bounds of the maze
    check if cell i,j  has a value of " " => representing no wall
*/
const canMove = (matrix, i, j) => {
    var xLength = matrix.length;
    var yLength = matrix[0].length;
    if (i >= 0 && i < xLength && j >= 0 && j < yLength) {
        if (matrix[i][j] === " ") {
            return true;
        }
    }
    return false;
};

/*
    recursive search trough the maze to find a path
*/
const solveMaze = (matrix, x, y) => {
    //base condition --> reached the destination
    if ((x === matrix.length - 1) && (y === matrix[0].length - 2)) {
        return true;
    }
    // check
    if (canMove(matrix, x, y)) {
        matrix[x][y] = ".";
        // R, D, L, U
        if (solveMaze(matrix, x + 1, y)) {
            return true;
        } //right
        if (solveMaze(matrix, x, y + 1)) {
            return true;
        } //down
        if (solveMaze(matrix, x - 1, y)) {
            return true;
        } // left
        if (solveMaze(matrix, x, y - 1)) {
            return true;
        } // up
        matrix[x][y] = 0; //backtracking
        return false;
    }
    return false;
};

/*
    removes all zeros created by solveMaze from the maze
*/
const cleanMaze = (mazeToClean) => {
    for (let row = 0; row < 41; row++) {
        for (let column = 0; column < 81; column++) {
            if (mazeToClean[row][column] == 0) {
                mazeToClean[row][column] = " ";
            }
        }
    }
};

// exports for unit testing with Node.js
if (typeof exports !== 'undefined') {
    exports.cleanMaze = cleanMaze;
    exports.parseMazeString = parseMazeString;
    exports.textToSolvedMaze = textToSolvedMaze;
    exports.mazeToText = mazeToText;
    exports.isMazeValid = isMazeValid;
}