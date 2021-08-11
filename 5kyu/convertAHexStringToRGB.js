// Description:
// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
    let arr = [];
    const pattern = new RegExp(".{1," + 2 + "}", "ig");
    let res = hexString.substr(1).match(pattern);
    for (let i=0; i<res.length; i++) { 
      let colour = parseInt(res[i], 16);
      arr.push(colour);
    }
    return {
    r: arr[0],
    g: arr[1],
    b: arr[2]
    };
  }