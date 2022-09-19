// Task:
// Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:


// ['XOOXO',

//   'XOOXO',

//   'OOOXO',

//   'XXOXO',

//   'OXOOO'] 

function numOfNeighbour( mat,  i,  j,rows,cols) 
{ 
    var count = 0;   

    // UP 
    if (i > 0  && mat[i - 1][j]==='X') 
        count++; 

    // LEFT 
    if (j > 0  && mat[i][j - 1]==='X')         
        count++; 

    // DOWN 
    if (i < rows-1  && mat[i + 1][j]==='X')         
        count++; 

    // RIGHT 
    if (j < cols-1 && mat[i][j + 1]==='X')         
        count++; 

    return count; 
} 

function landPerimeter( mat) 
{ 
    var perimeter = 0; 
    var rows=mat.length;
    var cols=mat[0].length;

    // Traversing the matrix and finding ones to 
    // calculate their contribution. 
    for (var i = 0; i < rows; i++) 
        for (var j = 0; j < cols; j++) 
            if (mat[i][j] && mat[i][j]==='X') 
                perimeter += (4 - numOfNeighbour(mat, i ,j,rows,cols)); 

    return `Total land perimeter: ${perimeter}`; 
} 