let sampleScripts = [];
let sampleScriptTypes = new Set();
let sampleScriptsByType = {
//  "basic_drawing": [],
//  "context": [],
//  "filters": []
};


let sourceCode = `
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.stroke();
`;

addSampleScript(["basic drawing"],{
"name": "Draw line",
"func": new Function("params", sourceCode),
"source": sourceCode
});



sourceCode = `
ctx.beginPath();
ctx.arc(100, 100, 10, 0, 2 * Math.PI);
ctx.stroke();
`;

addSampleScript(["basic drawing"],{
"name": "Draw circle",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.beginPath();
ctx.arc(100, 100, 10, 0, 2 * Math.PI);
ctx.fill();
`;

addSampleScript(["basic drawing"],{
"name": "Fill circle",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.stroke();
`;

addSampleScript(["basic drawing"],{
"name": "Draw rect",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.fillRect(20, 20, 150, 100);
`;

addSampleScript(["basic drawing"],{
"name": "Fill rect",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
`;

addSampleScript(["basic drawing", "text"],{
"name": "Draw text",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);
`;

addSampleScript(["basic drawing", "text"],{
"name": "Draw stroke text",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
`;

addSampleScript(["basic drawing"],{
"name": "Draw Linear Gradient",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
`;

addSampleScript(["basic drawing"],{
"name": "Draw Circular Gradient",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.rotate(20 * Math.PI / 180);
`;

addSampleScript(["context"],{
"name": "Rotate canvas",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
let a = params.horizontalScaling ?? 1;
let b = params.verticalSkewing ?? 0;
let c = params.horizontalSkewing ?? 0;
let d = params.verticalScaling ?? 1;
let e = params.horizontalTranslation ?? 0;
let f = params.verticalTranslation ?? 0;

ctx.setTransform(a, b, c, d, e, f);
`;

addSampleScript(["other", "context"],{
"name": "Set transform",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.setTransform(1, 0, 0, 1, 0, 0);
`;

addSampleScript(["other", "context"],{
"name": "Reset transform",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0"," magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.fillStyle = gradient;
`;

addSampleScript(["basic drawing", "context"],{
"name": "Set gradient fillstyle",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.clearRect(0, 0, 600, 400); 
`;

addSampleScript(["basic drawing"],{
"name": "Clear rect",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.globalAlpha = 0.2;
`;

addSampleScript(["alpha"],{
"name": "Set global alpha",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.shadowBlur = 20;
ctx.shadowColor = "black";
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
`;

addSampleScript(["filters"],{
"name": "Set shadow",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.clip();
`;

addSampleScript(["context"],{
"name": "Clip",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
// Clip a rectangular area
ctx.rect(50, 20, 200, 120);
ctx.stroke();
ctx.clip();
// Draw red rectangle after clip()
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 150, 100);
`;

addSampleScript(["context"],{
"name": "Clip rect",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.fillStyle = "#FF0000";
`;

addSampleScript(["context", "color"],{
"name": "Set fill style",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.fillStyle = 'rgb(255,0,0)';
`;

addSampleScript(["context", "color"],{
"name": "Set fill style RGB",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
`;

addSampleScript(["context", "color"],{
"name": "Set fill style RGBA",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.strokeStyle = "#FF0000";
`;

addSampleScript(["context"],{
"name": "Set stroke style",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.lineWidth = 5;
`;

addSampleScript(["basic drawing"],{
"name": "Set line width",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
params.x = params.x || 300;
params.y = params.y || 200;
params.r = params.r || 20;
params.n = params.n || 5;
params.inset = params.inset || 2.5;

ctx.save();
ctx.beginPath();
ctx.translate(params.x, params.y);
ctx.moveTo(0,0-params.r);
for (var i = 0; i < params.n; i++) {
	ctx.rotate(Math.PI / params.n);
	ctx.lineTo(0, 0 - (params.r*params.inset));
	ctx.rotate(Math.PI / params.n);
	ctx.lineTo(0, 0 - params.r);
}
ctx.closePath();
ctx.fill();
ctx.restore();
`;

addSampleScript(["shapes"],{
"name": "Draw star",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let cx = params.cx || 300;
let cy = params.cy || 200;
let spikes = params.spikes || 5;
let innerRadius = params.innerRadius || 100;
let outerRadius = params.outerRadius || 40;

let rot=Math.PI/2*3;
let x=cx;
let y=cy;
let step=Math.PI/spikes;

ctx.beginPath();
ctx.moveTo(cx,cy-outerRadius)
for(i=0;i<spikes;i++){
  x=cx+Math.cos(rot)*outerRadius;
  y=cy+Math.sin(rot)*outerRadius;
  ctx.lineTo(x,y)
  rot+=step

  x=cx+Math.cos(rot)*innerRadius;
  y=cy+Math.sin(rot)*innerRadius;
  ctx.lineTo(x,y)
  rot+=step
}
ctx.lineTo(cx,cy-outerRadius);
ctx.closePath();
ctx.lineWidth=3;
ctx.strokeStyle='#999900';
ctx.stroke();
ctx.fillStyle='#ffff00';
ctx.fill();
`;

addSampleScript(["shapes"],{
"name": "Draw star 2",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.executeSampleScript('Draw star',{x: 300, y: 200, r: 48, n: 24, inset: 1.3});
`;

addSampleScript(["shapes"],{
"name": "Draw spike ball",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.restore();
`;


sourceCode = `
ctx.save();
`;

addSampleScript(["context"],{
"name": "Save context",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
ctx.restore();
`;


addSampleScript(["context"],{
"name": "Restore context",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
let width = ctx.canvas.width;
let height = ctx.canvas.height;

const imageData = ctx.createImageData(width, height);

// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  // Modify pixel data
  imageData.data[i + 0] = $util.random256(); // R value
  imageData.data[i + 1] = $util.random256(); // G value
  imageData.data[i + 2] = $util.random256(); // B value
  imageData.data[i + 3] = 255; // A value
}

ctx.putImageData(imageData, 0, 0);
`;

addSampleScript(["other"],{
"name": "Draw random pixels",
"func": new Function("params", sourceCode),
"source": sourceCode
});

sourceCode = `
let amount = params.amount || 50;

let width = ctx.canvas.width;
let height = ctx.canvas.height;

const imageData = ctx.getImageData(0, 0, width, height);

// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  // Modify pixel data
  imageData.data[i + 0] += amount; // R value
  imageData.data[i + 1] += amount; // G value
  imageData.data[i + 2] += amount; // B value
}

ctx.putImageData(imageData, 0, 0);
`;

addSampleScript(["filters", "color"],{
"name": "Lighter",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let amount = params.amount || 50;

let width = ctx.canvas.width;
let height = ctx.canvas.height;

const imageData = ctx.getImageData(0, 0, width, height);

// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  // Modify pixel data
  imageData.data[i + 0] -= amount; // R value
  imageData.data[i + 1] -= amount; // G value
  imageData.data[i + 2] -= amount; // B value
}

ctx.putImageData(imageData, 0, 0);
`;

addSampleScript(["filters", "color"],{
"name": "Darker",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let amount = params.amount || 5;

let width = ctx.canvas.width;
let height = ctx.canvas.height;

const imageData = ctx.getImageData(0, 0, width, height);

let x = 0;
let y = 0;

ctx.save();

// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  if (imageData.data[i + 3] > 0) {
    ctx.fillStyle = 'rgba(' + imageData.data[i] + ', ' + imageData.data[i + 1] + ', ' + imageData.data[i + 2] + ', ' + imageData.data[i + 3]/255 + ')';
    ctx.beginPath();
    ctx.arc(x + 0.5, y + 0.5, amount, 0, 2 * Math.PI);
    ctx.fill();
  }
  x++;
  if (x>width-1) {
    x = 0;
    y++;
  }
}

ctx.restore();
`;

addSampleScript(["other", "border"],{
"name": "Grow",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let width = ctx.canvas.width;
let height = ctx.canvas.height;

let imageData = ctx.getImageData(0, 0, width, height);

for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i + 3] = 255 - imageData.data[i + 3];
}

ctx.putImageData(imageData, 0, 0)
`;

addSampleScript(["alpha"],{
"name": "Invert image alpha",
"func": new Function("params", sourceCode),
"source": sourceCode
});



sourceCode = `
let width = ctx.canvas.width;
let height = ctx.canvas.height;

let imageData = ctx.getImageData(0, 0, width, height);

for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] = 255 - imageData.data[i];
    imageData.data[i+1] = 255 - imageData.data[i+1];
    imageData.data[i+2] = 255 - imageData.data[i+2];
}

ctx.putImageData(imageData, 0, 0)
`;

addSampleScript(["color"],{
"name": "Invert image colors",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let p = new Path2D('M160 110H40v20h120v30L200 120l-40-40z');
ctx.fill(p);
`;

addSampleScript(["SVG"],{
"name": "Draw Path2D",
"func": new Function("params", sourceCode),
"source": sourceCode
});


svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="300px" height="300px">
<path d="M0 0h24v24H0z" fill="none"/>
<path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
</svg>
`;

sourceCode = `
let x = params.x ?? 0;
let y = params.y ?? 0;
let xml = params.xml;

let defaultXml = \`${svg}\`;

xml = xml ?? defaultXml;

var svg64 = btoa(xml);

var b64Start = 'data:image/svg+xml;base64,';

var image64 = b64Start + svg64;

var img = new Image();
img.src = image64;

ctx.drawImage(img, x, y);
`;

addSampleScript(["SVG"],{
"name": "Draw SVG",
"func": new Function("params", sourceCode),
"source": sourceCode
});


svg = `
<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" width="500px" height="400px">
  <circle cx="300" cy="200" r="50" fill="#ff0000"/>
</svg>
`;

sourceCode = `
var xml = \`${svg}\`;

app.executeSampleScript('Draw SVG', {xml:xml, x:0, y:0});
`;

addSampleScript(["SVG"],{
"name": "Draw SVG - circle",
"func": new Function("params", sourceCode),
"source": sourceCode
});


svg = `
<svg width="600" height="500" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="emboss">
      <feConvolveMatrix
          kernelMatrix="1 0 0
                        0 0 0
                        0 0 -1"/>
    </filter>
  </defs>
  <circle cx="300" cy="200" r="50" fill="#ff0000" style="filter:url(#emboss);"/>
</svg>
`;

sourceCode = `
var xml = \`${svg}\`;

app.executeSampleScript('Draw SVG', {xml:xml, x:0, y:0});
`;

addSampleScript(["SVG"],{
"name": "Draw SVG - feConvolveMatrix",
"func": new Function("params", sourceCode),
"source": sourceCode
});


svg = `
<svg width="600" height="500" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="emboss">
      <feConvolveMatrix order="5" bias="0.5" preserveAlpha="true"
          kernelMatrix="1 0 0 0 0
                        0 1 0 0 0
                        0 0 0 0 0
                        0 0 0 -1 0
                        0 0 0 0 -1"/>
    </filter>
  </defs>
  <circle cx="300" cy="200" r="50" fill="#ff0000" style="filter:url(#emboss);"/>
</svg>
`;

sourceCode = `
var xml = \`${svg}\`;

app.executeSampleScript('Draw SVG', {xml:xml, x:0, y:0});
`;

addSampleScript(["SVG"],{
"name": "Draw SVG - feConvolveMatrix 2",
"func": new Function("params", sourceCode),
"source": sourceCode
});


svg = `
<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" width="600px" height="400px">
  <filter id="emboss1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="0" />
  </filter>
  <rect x="0" y="0" width="600" height="400" style="filter:url(#emboss1);" />
</svg>
`;

sourceCode = `
var xml = \`${svg}\`;

app.executeSampleScript('Draw SVG', {xml:xml, x:0, y:0});
`;

addSampleScript(["SVG"],{
"name": "Draw SVG - turbulence",
"func": new Function("params", sourceCode),
"source": sourceCode
});


svg = `
<svg height="200" width="200" viewBox="0 0 220 220"
    xmlns="http://www.w3.org/2000/svg">
  <filter id = "filter">
    <feSpecularLighting result="specOut"
        specularExponent="20" lighting-color="#bbbbbb">
      <fePointLight x="50" y="50" z="200"/>
    </feSpecularLighting>
    <feComposite in="SourceGraphic" in2="specOut"
        operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
  </filter>
  <circle cx="110" cy="110" r="100" style="filter:url(#filter)"/>
</svg>
`;

sourceCode = `
var xml = \`${svg}\`;

app.executeSampleScript('Draw SVG', {xml:xml, x:0, y:0});
`;

addSampleScript(["SVG"],{
"name": "Draw SVG - SpecularLighting",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'blur(3px)';
`;

addSampleScript(["filters"],{
"name": "Blur",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'grayscale(100%)';
`;

addSampleScript(["filters", "context", "color"],{
"name": "Grayscale",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'grayscale(50%)';
`;

addSampleScript(["filters", "context", "color"],{
"name": "Grayscale 50%",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'brightness(1.2)';
`;

addSampleScript(["filters", "context", "color"],{
"name": "Brightness",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'contrast(150%)';
`;

addSampleScript(["filters", "context", "color"],{
"name": "Contrast",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'invert(100%)';
`;

addSampleScript(["filters", "context", "color"],{
"name": "Invert",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'hue-rotate(120deg)';
`;

addSampleScript(["context", "filters", "color"],{
"name": "Hue rotate",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'drop-shadow(-9px 9px 3px #666666)';
`;

addSampleScript(["filters", "context"],{
"name": "Drop shadow",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'sepia(100%)';
`;

addSampleScript(["filters", "context", "color"],{
"name": "Sepia",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'opacity(50%)';
`;

addSampleScript(["filters", "context"],{
"name": "Opacity",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'saturate(30%)';
`;

addSampleScript(["filters", "context", "color"],{
"name": "Saturate",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.filter = 'none';
`;

addSampleScript(["filters"],{
"name": "Clear filters",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.drawImage(app.canvasLayers[3].canvas, 0, 0);
`;

addSampleScript(["other", "layer", "app"],{
"name": "Paint layer to another",
"func": new Function("params", sourceCode),
"source": sourceCode
});



sourceCode = `
let red = params.r != null ? params.r : 255;
let green = params.g != null ? params.g : 0;
let blue = params.b != null ? params.b : 0;

let width = ctx.canvas.width;
let height = ctx.canvas.height;

let imageData = ctx.getImageData(0, 0, width, height);

for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] = red;
    imageData.data[i+1] = green;
    imageData.data[i+2] = blue;
}

ctx.putImageData(imageData, 0, 0)
`;

addSampleScript(["color"],{
"name": "Set image color",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let red = params.r != null ? params.r : 1;
let green = params.g != null ? params.g : 0.5;
let blue = params.b != null ? params.b : 0.5;

let width = ctx.canvas.width;
let height = ctx.canvas.height;

let imageData = ctx.getImageData(0, 0, width, height);

for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] = imageData.data[i] * red;
    imageData.data[i+1] = imageData.data[i+1] * green;
    imageData.data[i+2] = imageData.data[i+2] * blue;
}

ctx.putImageData(imageData, 0, 0)
`;

addSampleScript(["color", "filters"],{
"name": "Modulate image color",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let width = ctx.canvas.width;
let height = ctx.canvas.height;

let tempCanvas = document.createElement('canvas');
tempCanvas.width = width;
tempCanvas.height = height;

let tempCtx = tempCanvas.getContext('2d');
tempCtx.drawImage(ctx.canvas, 0, 0);

ctx.clearRect(0, 0, width, height);
ctx.drawImage(tempCtx.canvas, 0, 0);
`;

addSampleScript(["other"],{
"name": "Repaint",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let amount = params.amount || 3;
let lightOffset = params.lightOffset || 100;

let originalLayerName = app.getCurrentLayer().name;
let originalCanvas = ctx.canvas;
let newLayerName = originalLayerName + '_2';

app.duplicateLayer(originalLayerName, newLayerName);
app.setCurrentLayer(newLayerName);

app.executeSampleScript('Grow',{amount: amount});
app.executeSampleScript('Lighter', {amount: lightOffset});
ctx.drawImage(originalCanvas, 0, 0);

app.setCurrentLayer(originalLayerName);
ctx.drawImage(app.getLayerByName(newLayerName).canvas, 0, 0);

app.deleteLayerByName(newLayerName);
`;

addSampleScript(["border"],{
"name": "Add border",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let amount = params.amount || 4;
let lightOffset = params.lightOffset || 100;

app.executeSampleScript('Add border', {amount: amount, lightOffset: lightOffset});
app.executeSampleScript('Add border', {amount: amount, lightOffset: -lightOffset});
`;

addSampleScript(["border"],{
"name": "Add double border",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let amount = params.amount || 3;
let red = params.r != null ? params.r : 255;
let green = params.g != null ? params.g : 0;
let blue = params.b != null ? params.b : 0;

let originalLayerName = app.getCurrentLayer().name;
let originalCanvas = ctx.canvas;
let newLayerName = originalLayerName + '_2';

app.duplicateLayer(originalLayerName, newLayerName);
app.setCurrentLayer(newLayerName);

app.executeSampleScript('Set image color', {r: red, g: green, b: blue});
app.executeSampleScript('Grow',{amount: amount});
ctx.drawImage(originalCanvas, 0, 0);

app.setCurrentLayer(originalLayerName);
ctx.drawImage(app.getLayerByName(newLayerName).canvas, 0, 0);

app.deleteLayerByName(newLayerName);
`;

addSampleScript(["border", "color"],{
"name": "Add color border",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let text = "Hello world!"
let width = ctx.measureText(text).width;
`;

addSampleScript(["text"],{
"name": "Measure text",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.setLineDash([4, 2]);
ctx.beginPath();
ctx.lineDashOffset = 0;
ctx.moveTo(100, 100);
ctx.lineTo(300, 100);
ctx.stroke();
`;

addSampleScript(["basic drawing"],{
"name": "Draw dashed line",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.addLayerWithName('My layer name');
`;

addSampleScript(["app", "layer"],{
"name": "Add layer",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.duplicateLayer('sourceLayerName', 'newLayerName');
`;

addSampleScript(["app", "layer"],{
"name": "Duplicate layer",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.setCurrentLayer('layer01');
`;

addSampleScript(["app", "layer"],{
"name": "Set current layer",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.executeSampleScript('Grow',{amount: 10});
`;

addSampleScript(["app"],{
"name": "Execute sample script",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.executeSavedScript('MyScriptName',{myParam: 10});
`;

addSampleScript(["app"],{
"name": "Execute saved script",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.globalVariables.speedX = 100;
`;

addSampleScript(["app"],{
"name": "Set global variable",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
var speedX = app.globalVariables.speedX;
alert(speedX);
`;

addSampleScript(["app"],{
"name": "Get global variable",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.resetContext();
`;

addSampleScript(["app", "context"],{
"name": "Reset context",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.combineLayers('baseLayerName','maskLayerName');
`;

addSampleScript(["app", "mask", "layer"],{
"name": "Apply mask to layer",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
// Options: "top", "hanging", "middle", "alphabetic" (default), "ideographic", "bottom"
ctx.textBaseline = "bottom";
`;

addSampleScript(["text"],{
"name": "Set text baseline",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let x = 100;
let y = 100;
let radiusX = 50;
let radiusY = 75;
let rotation = Math.PI / 4;
let startAngle = 0;
let endAngle = 2 * Math.PI;
let anticlockwise = false;

ctx.beginPath()
ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
ctx.stroke();
`;

addSampleScript(["basic drawing"],{
"name": "Draw ellipse",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let x = 100;
let y = 100;
let radiusX = 50;
let radiusY = 75;
let rotation = Math.PI / 4;
let startAngle = 0;
let endAngle = 2 * Math.PI;
let anticlockwise = false;

ctx.beginPath()
ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
ctx.fill();
`;

addSampleScript(["basic drawing"],{
"name": "Fill ellipse",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.scale(4, 4);
`;

addSampleScript(["context"],{
"name": "Set scale",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let start = { x: 100, y: 100 };
let cp1 = { x: 100, y: 200 };
let cp2 = { x: 200, y: 100 };
let end = { x: 200, y: 200 };

ctx.beginPath();
ctx.moveTo(start.x, start.y);
ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
ctx.stroke();
`;

addSampleScript(["basic drawing"],{
"name": "Bezier curve",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let sourceX = 100;
let sourceY = 100;
let cpx = 200;
let cpy = 100;
let targetX = 200;
let targetY = 200;

ctx.beginPath();
ctx.moveTo(sourceX, sourceY);
ctx.quadraticCurveTo(cpx, cpy, targetX, targetY);
ctx.stroke();
`;

addSampleScript(["basic drawing"],{
"name": "Quadratic bezier curve",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let sourceX = 100;
let sourceY = 100;
let x1 = 200;
let y1 = 200;
let x2 = 100;
let y2 = 200;
let radius = 20;

ctx.beginPath();
ctx.moveTo(sourceX, sourceY);
ctx.arcTo(x1, y1, x2, y2, radius);
ctx.lineTo(x2, y2);
ctx.stroke();
`;

addSampleScript(["basic drawing"],{
"name": "Arc to",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
`;

addSampleScript(["basic drawing", "image"],{
"name": "Create pattern",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
const patternCanvas = document.createElement('canvas');
const patternContext = patternCanvas.getContext('2d');

patternCanvas.width = 50;
patternCanvas.height = 50;

patternContext.fillStyle = '#fec';
patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
patternContext.arc(0, 0, 50, 0, .5 * Math.PI);
patternContext.stroke();

const pattern = ctx.createPattern(patternCanvas, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas.width, canvas.height);
`;

addSampleScript(["basic drawing"],{
"name": "Create pattern from canvas",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.shadowBlur = 10;
ctx.shadowColor = "#000000";
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;

ctx.fillStyle = "#FF0000";
ctx.font = "64px Arial";
ctx.fillText("Text", 200, 200);
`;

addSampleScript(["filters", "text"],{
"name": "Draw shadow text",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let text = "Neon";
let textColor = "#FFFFFF";
let glowColor = "#FFFF00";
let nearColor = "#FFFFFF"
let blur = 5;

ctx.fillStyle = textColor;
ctx.font = "64px Arial";

ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;

ctx.shadowColor = glowColor;
ctx.shadowBlur = blur *4;
ctx.fillText(text, 200, 200);

ctx.shadowColor = glowColor;
ctx.shadowBlur = blur *3;
ctx.fillText(text, 200, 200);

ctx.shadowColor = glowColor;
ctx.shadowBlur = blur * 2;
ctx.fillText(text, 200, 200);

ctx.shadowColor = nearColor;
ctx.shadowBlur = blur;
ctx.fillText(text, 200, 200);
ctx.fillText(text, 200, 200);
`;

addSampleScript(["filters", "glow", "text"],{
"name": "Glow text",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 600, 400);
`;

addSampleScript(["basic drawing"],{
"name": "Fill screen white",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 600, 400);
`;

addSampleScript(["basic drawing"],{
"name": "Fill screen black",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
var img = new Image();
img.addEventListener('load', function() {
  ctx.drawImage(img, 100, 100);
}, false);
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
`;

addSampleScript(["basic drawing", "image"],{
"name": "Draw image",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
var img = new Image();
img.src = app.images[0].url;
ctx.drawImage(img, 0, 0);
`;

addSampleScript(["basic drawing", "image"],{
"name": "Draw uploaded image",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let x = 100;
let y = 100;
let width = 300;
let height = 300;

let img = new Image();
img.addEventListener('load', function() {
  ctx.drawImage(img, x, y, width, height);
}, false);
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
`;

addSampleScript(["basic drawing", "image"],{
"name": "Draw image scaled",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.log('message');
`;

addSampleScript(["other"],{
"name": "Log",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let random = $util.random256();
app.log('random256 = ' + random);
`;

addSampleScript(["other", "util", "math"],{
"name": "Random 256",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let random = Math.random();
app.log('random = ' + random);
`;

addSampleScript(["math"],{
"name": "Random number",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
params.numSteps = params.numSteps || 10;
let dxOffset = params.dxStep != null ? params.dxStep : 0;
let dyOffset = params.dyStep != null ? params.dyStep : -1;

let canvasClone = $util.cloneCanvas(app.getCurrentLayer().canvas);

dx = 0;
dy = 0;
for (let i=0; i<params.numSteps; i++) {
  dx += dxOffset;
  dy += dyOffset;
  ctx.drawImage(canvasClone, dx, dy);
}
`;

addSampleScript(["filters"],{
"name": "3D effect",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let canvasIndex = params.canvasIndex ?? 1;
let numSteps = params.numSteps ?? 10;
let dxStep = params.dxStep ?? 0;
let dyStep = params.dyStep ?? 1;

let originalLayerName = app.getCurrentLayer().name;

app.duplicateLayer(originalLayerName, '_temp_layer_01');
app.setCurrentLayer('_temp_layer_01');
app.executeSampleScript('Darker', {amount: 100});
app.executeSampleScript('3D effect', {numSteps: numSteps, dxStep: dxStep, dyStep: dyStep});
ctx.drawImage(app.getLayerByName(originalLayerName).canvas, 0, 0);

app.setCurrentLayer(originalLayerName);
ctx.clearRect(0,0,600,400);
ctx.drawImage(app.getLayerByName('_temp_layer_01').canvas, 0, 0);
app.deleteLayerByName('_temp_layer_01');
`;

addSampleScript(["filters"],{
"name": "3D effect 2",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let canvasIndex = params.canvasIndex ?? 1;
let numSteps = params.numSteps ?? 6;
let dxStep = params.dxStep ?? 0;
let dyStep = params.dyStep ?? 1;

let originalLayerName = app.getCurrentLayer().name;

app.duplicateLayer(originalLayerName, '_temp_layer_01');
app.setCurrentLayer('_temp_layer_01');
app.executeSampleScript('Darker', {amount: 100});
app.executeSampleScript('3D effect', {numSteps: numSteps, dxStep: dxStep, dyStep: dyStep});
app.executeSampleScript('Add border', {amount: 2, lightOffset: -100});

app.duplicateLayer(originalLayerName, '_temp_layer_02');
app.setCurrentLayer('_temp_layer_02');
app.executeSampleScript('Add border', {amount: 1, lightOffset: -120});

app.setCurrentLayer(originalLayerName);
ctx.clearRect(0,0,600,400);
ctx.drawImage(app.getLayerByName('_temp_layer_01').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_02').canvas, 0, 0);
app.deleteLayerByName('_temp_layer_01');
app.deleteLayerByName('_temp_layer_02');
`;

addSampleScript(["filters"],{
"name": "3D effect 3",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
var faceRadius = 100;
var eyeSpacing = 40;
var eyeInnerRadius = 12;
var eyeOuterRadius = 30;
var eyeBrowOffset = 20;
var eyeOffsetX = 20;
var eyeBallOffsetX = -10;
var mouthRadius = 30;

//face
ctx.beginPath();
ctx.fillStyle = "#FF6633";
ctx.arc(200, 150, faceRadius, 0, 2 * Math.PI);
ctx.fill();

//mouth
ctx.beginPath();
ctx.fillStyle = "#660000";
ctx.arc(200+eyeOffsetX, 210, mouthRadius, 0, 2 * Math.PI);
ctx.fill();

//first eye
ctx.beginPath();
ctx.fillStyle = "#FFFFFF";
ctx.arc(200-eyeSpacing+eyeOffsetX, 120, eyeOuterRadius, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.arc(200-eyeSpacing+eyeOffsetX+eyeBallOffsetX, 120, eyeInnerRadius, 0, 2 * Math.PI);
ctx.fill();

//second eye
ctx.beginPath();
ctx.fillStyle = "#FFFFFF";
ctx.arc(200+eyeSpacing+eyeOffsetX, 120, eyeOuterRadius, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.arc(200+eyeSpacing+eyeOffsetX+eyeBallOffsetX, 120, eyeInnerRadius, 0, 2 * Math.PI);
ctx.fill();

ctx.lineWidth = 8;

//eyebrow 1
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.arc(200-eyeSpacing+eyeOffsetX, 120, eyeOuterRadius + eyeBrowOffset, 11/8*Math.PI, 13/8*Math.PI);
ctx.stroke();

//eyebrow 2
ctx.beginPath();
ctx.fillStyle = "#000000";
ctx.arc(200+eyeSpacing+eyeOffsetX, 120, eyeOuterRadius + eyeBrowOffset, 11/8*Math.PI, 13/8*Math.PI);
ctx.stroke();
`;

addSampleScript(["other"],{
"name": "Draw face",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let font = "92px Comfortaa";
let text = "My Logo";
let x = 100;
let y = 150;
let gradientStartY = y - 125;
let gradientEndY = y + 75;

let originalLayerName = app.getCurrentLayer().name;

app.addLayerWithName('_temp_layer_01');
app.setCurrentLayer('_temp_layer_01');
var grd = ctx.createLinearGradient(0, gradientStartY, 0, gradientEndY);
grd.addColorStop(0, "#FFFFFF");
grd.addColorStop(0.5, "#FF0000");
grd.addColorStop(1, "#000000");
ctx.fillStyle = grd;
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:2});

app.addLayerWithName('_temp_layer_02');
app.setCurrentLayer('_temp_layer_02');
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:5});

app.addLayerWithName('_temp_layer_03');
app.setCurrentLayer('_temp_layer_03');
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:8});
app.executeSampleScript('Set image color', {r:255,g:255,b:255});

app.setCurrentLayer(originalLayerName);
ctx.drawImage(app.getLayerByName('_temp_layer_03').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_02').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_01').canvas, 0, 0);
app.deleteLayerByName('_temp_layer_03');
app.deleteLayerByName('_temp_layer_02');
app.deleteLayerByName('_temp_layer_01');
`;

addSampleScript(["logos"],{
"name": "Logo 01",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let font = "48px Comfortaa";
let text = "My Logo";
let x = 100;
let y = 150;
let borderColor = "#3333AA";
let color2 = {r: 32, g: 32, b: 128};

let originalLayerName = app.getCurrentLayer().name;

app.addLayerWithName('_temp_layer_01');
app.setCurrentLayer('_temp_layer_01');
ctx.font = font;
ctx.fillStyle = "#FFFFFF";
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:2});

app.addLayerWithName('_temp_layer_02');
app.setCurrentLayer('_temp_layer_02');
ctx.font = font;
ctx.fillStyle = borderColor;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:7});

app.duplicateLayer('_temp_layer_02', '_temp_layer_03');
app.setCurrentLayer('_temp_layer_03');
app.executeSampleScript('3D effect', {canvasIndex: 3, dyStep: 1, numSteps: 5});
app.executeSampleScript('Set image color', color2);

//app.setCurrentLayer(originalLayerName);
app.addLayerWithName('_temp_layer_04');
app.setCurrentLayer('_temp_layer_04');
ctx.drawImage(app.getLayerByName('_temp_layer_03').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_02').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_01').canvas, 0, 0);

app.duplicateLayer('_temp_layer_04', '_temp_layer_05');
app.setCurrentLayer('_temp_layer_05');
app.executeSampleScript('Set image color', {r: 255, g: 255, b: 255});
app.executeSampleScript('Grow', {amount:3});

app.setCurrentLayer(originalLayerName);
ctx.drawImage(app.getLayerByName('_temp_layer_05').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_04').canvas, 0, 0);

app.deleteLayerByName('_temp_layer_05');
app.deleteLayerByName('_temp_layer_04');
app.deleteLayerByName('_temp_layer_03');
app.deleteLayerByName('_temp_layer_02');
app.deleteLayerByName('_temp_layer_01');
`;

addSampleScript(["logos"],{
"name": "Logo 02",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let font = "72px Comfortaa";
let text = "My Logo";
let x = 100;
let y = 150;

let originalLayerName = app.getCurrentLayer().name;
app.addLayerWithName('_temp_layer_01');
app.setCurrentLayer('_temp_layer_01');
ctx.font = font;
ctx.fillStyle = "#FF0000";
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:2});
app.executeSampleScript('Add double border', {amount:4, lightOffset: 150});

ctx.shadowBlur = 10;
ctx.shadowColor = "black";
app.executeSampleScript('Repaint');

app.setCurrentLayer(originalLayerName);
ctx.drawImage(app.getLayerByName('_temp_layer_01').canvas, 0, 0);

app.deleteLayerByName('_temp_layer_01');
`;

addSampleScript(["logos"],{
"name": "Logo 03",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let font = "92px Arial";
let text = "My Logo";
let x = 100;
let y = 150;

let originalLayerName = app.getCurrentLayer().name;

app.addLayerWithName('_temp_layer_01');
app.setCurrentLayer('_temp_layer_01');
ctx.fillStyle = "#FF0000";
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:4});

app.addLayerWithName('_temp_layer_02');
app.setCurrentLayer('_temp_layer_02');
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:7});

app.addLayerWithName('_temp_layer_03');
app.setCurrentLayer('_temp_layer_03');
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:12});
app.executeSampleScript('Set image color', {r:255,g:255,b:255});

app.setCurrentLayer(originalLayerName);
ctx.drawImage(app.getLayerByName('_temp_layer_03').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_02').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_01').canvas, 0, 0);
app.deleteLayerByName('_temp_layer_03');
app.deleteLayerByName('_temp_layer_02');
app.deleteLayerByName('_temp_layer_01');
`;

addSampleScript(["logos"],{
"name": "Logo 04",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let font = "92px Arial";
let text = "My Logo";
let x = 100;
let y = 150;

let originalLayerName = app.getCurrentLayer().name;

app.addLayerWithName('_temp_layer_01');
app.setCurrentLayer('_temp_layer_01');
ctx.fillStyle = "#FF0000";
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:4});

app.addLayerWithName('_temp_layer_02');
app.setCurrentLayer('_temp_layer_02');
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:7});

app.addLayerWithName('_temp_layer_03');
app.setCurrentLayer('_temp_layer_03');
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:12});
app.executeSampleScript('Set image color', {r:255,g:255,b:255});

app.addLayerWithName('_temp_layer_04');
app.setCurrentLayer('_temp_layer_04');
ctx.drawImage(app.getLayerByName('_temp_layer_03').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_02').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_01').canvas, 0, 0);
ctx.shadowBlur = 10;
ctx.shadowColor = "black";
app.executeSampleScript('Repaint');

app.setCurrentLayer(originalLayerName);
ctx.drawImage(app.getLayerByName('_temp_layer_04').canvas, 0, 0);
app.deleteLayerByName('_temp_layer_04');
app.deleteLayerByName('_temp_layer_03');
app.deleteLayerByName('_temp_layer_02');
app.deleteLayerByName('_temp_layer_01');
`;

addSampleScript(["logos"],{
"name": "Logo 05",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let font = "64px Comfortaa";
let text = "My Logo";
let x = 100;
let y = 150;
let gradientStartY = y - 50;
let gradientEndY = y + 25;

let originalLayerName = app.getCurrentLayer().name;

app.addLayerWithName('_temp_layer_01');
app.setCurrentLayer('_temp_layer_01');
var grd = ctx.createLinearGradient(0, gradientStartY, 0, gradientEndY);
grd.addColorStop(0, "#FF0000");
grd.addColorStop(1, "#FFFF00");
ctx.fillStyle = grd;
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:2});

app.addLayerWithName('_temp_layer_02');
app.setCurrentLayer('_temp_layer_02');
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow', {amount:5});

app.addLayerWithName('_temp_layer_03');
app.setCurrentLayer('_temp_layer_03');
ctx.drawImage(app.getLayerByName('_temp_layer_02').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_01').canvas, 0, 0);
ctx.shadowBlur = 10;
ctx.shadowColor = "black";
app.executeSampleScript('Repaint');

app.setCurrentLayer(originalLayerName);
ctx.drawImage(app.getLayerByName('_temp_layer_03').canvas, 0, 0);
app.deleteLayerByName('_temp_layer_03');
app.deleteLayerByName('_temp_layer_02');
app.deleteLayerByName('_temp_layer_01');
`;

addSampleScript(["logos"],{
"name": "Logo 06",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let font = "60px Comfortaa";
let text = "My Logo";
let x = 100;
let y = 150;

let originalLayerName = app.getCurrentLayer().name;

app.addLayerWithName('_temp_layer_01');
app.setCurrentLayer('_temp_layer_01');
ctx.fillStyle = "#FFC800";
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow',{amount:2});

app.addLayerWithName('_temp_layer_02');
app.setCurrentLayer('_temp_layer_02');
ctx.fillStyle = "#C86400";
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow',{amount:2});
app.executeSampleScript('3D effect', {canvasIndex:2, numSteps:4, dxStep:1, dyStep:0});

app.addLayerWithName('_temp_layer_03');
app.setCurrentLayer('_temp_layer_03');
ctx.drawImage(app.getLayerByName('_temp_layer_02').canvas, 0, 0);
ctx.drawImage(app.getLayerByName('_temp_layer_01').canvas, 0, 0);
app.executeSampleScript('Add color border',{amount:2, r:0, g:0, b:0});

app.setCurrentLayer(originalLayerName);
ctx.drawImage(app.getLayerByName('_temp_layer_03').canvas, 0, 0);
app.deleteLayerByName('_temp_layer_03');
app.deleteLayerByName('_temp_layer_02');
app.deleteLayerByName('_temp_layer_01');
`;

addSampleScript(["logos"],{
"name": "Logo 07",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let font = "60px Comfortaa";
let text = "My Logo";
let x = 100;
let y = 150;

let originalLayerName = app.getCurrentLayer().name;

app.addLayerWithName('_temp_layer_001');
app.setCurrentLayer('_temp_layer_001');
ctx.fillStyle = "#FF0000";
ctx.font = font;
ctx.fillText(text, x, y);
app.executeSampleScript('Grow',{amount:2});
app.executeSampleScript('3D effect 3');

app.setCurrentLayer(originalLayerName);
ctx.shadowBlur = 5;
ctx.shadowColor = "#666666";
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.drawImage(app.getLayerByName('_temp_layer_001').canvas, 0, 0);
app.deleteLayerByName('_temp_layer_001');
`;

addSampleScript(["logos"],{
"name": "Logo 08",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let text = params.text ?? 'Button';
let buttonX = params.x ?? 300;
let buttonY = params.y ?? 200;
let buttonHeight = params.height ?? 100;
let buttonWidth = params.width ?? 200;
let textColor = "#FFFFFF";
let buttonColor = "#000066";
let font = "48px Arial";

ctx.strokeStyle = buttonColor;
ctx.lineWidth = buttonHeight;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(buttonX - buttonWidth/2, buttonY);
ctx.lineTo(buttonX + buttonWidth/2, buttonY);
ctx.stroke();

ctx.font = font;
ctx.fillStyle = textColor;
ctx.textAlign = "center";
ctx.textBaseline = 'middle';
ctx.fillText(text, buttonX, buttonY);
`;

addSampleScript(["buttons"],{
"name": "Round button",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let text = params.text ?? 'Button';
let buttonX = params.x ?? 300;
let buttonY = params.y ?? 200;
let buttonHeight = params.height ?? 100;
let buttonWidth = params.width ?? 200;
let textColor = "#FFFFFF";
let font = "48px Arial";

var grd = ctx.createLinearGradient(0, 200, 600, 200);
grd.addColorStop(0, "#FF0000");
grd.addColorStop(1, "#FFAA00");

ctx.strokeStyle = grd;
ctx.lineWidth = buttonHeight;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(buttonX - buttonWidth/2, buttonY);
ctx.lineTo(buttonX + buttonWidth/2, buttonY);
ctx.stroke();

ctx.font = font;
ctx.fillStyle = textColor;
ctx.textAlign = "center";
ctx.textBaseline = 'middle';
ctx.fillText(text, buttonX, buttonY);
`;

addSampleScript(["buttons"],{
"name": "Gradient round button",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let x = params.x ?? 100;
let y = params.x ?? 100;
let w = params.x ?? 150;
let h = params.x ?? 50;
let r = params.x ?? 15;

if (w < 2 * r) r = w / 2;
if (h < 2 * r) r = h / 2;
ctx.beginPath();
ctx.moveTo(x+r, y);
ctx.arcTo(x+w, y,   x+w, y+h, r);
ctx.arcTo(x+w, y+h, x,   y+h, r);
ctx.arcTo(x,   y+h, x,   y,   r);
ctx.arcTo(x,   y,   x+w, y,   r);
ctx.closePath()
ctx.stroke();
`;

addSampleScript(["basic drawing"],{
"name": "Draw round rect",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let x = params.x ?? 100;
let y = params.y ?? 100;
let w = params.w ?? 150;
let h = params.h ?? 50;
let r = params.r ?? 15;

if (w < 2 * r) r = w / 2;
if (h < 2 * r) r = h / 2;
ctx.beginPath();
ctx.moveTo(x+r, y);
ctx.arcTo(x+w, y,   x+w, y+h, r);
ctx.arcTo(x+w, y+h, x,   y+h, r);
ctx.arcTo(x,   y+h, x,   y,   r);
ctx.arcTo(x,   y,   x+w, y,   r);
ctx.closePath()
ctx.fill();
`;

addSampleScript(["basic drawing"],{
"name": "Fill round rect",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let text = params.text ?? 'Button';
let buttonX = params.x ?? 300;
let buttonY = params.y ?? 200;
let buttonHeight = params.height ?? 50;
let buttonWidth = params.width ?? 200;
let buttonRadius = 10;
let textColor = "#FFFFFF";
let buttonColor = "#3333CC";
let font = "18px Arial";

ctx.fillStyle = buttonColor;

app.executeSampleScript('Fill round rect', {x:buttonX - buttonWidth/2, y:buttonY - buttonHeight/2, w:buttonWidth, h:buttonHeight, r:buttonRadius});

ctx.font = font;
ctx.fillStyle = textColor;
ctx.textAlign = "center";
ctx.textBaseline = 'middle';
ctx.fillText(text, buttonX, buttonY);
`;

addSampleScript(["buttons"],{
"name": "Round button 2",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let text = params.text ?? 'Button';
let buttonX = params.x ?? 300;
let buttonY = params.y ?? 200;
let buttonHeight = params.height ?? 50;
let buttonWidth = params.width ?? 200;
let buttonRadius = 10;
let textColor = "#FFFFFF";
let font = "18px Arial";

var grd = ctx.createLinearGradient(0, 200, 600, 200);
grd.addColorStop(0, "#FF0000");
grd.addColorStop(1, "#FFAA00");

ctx.fillStyle = grd;

app.executeSampleScript('Fill round rect', {x:buttonX - buttonWidth/2, y:buttonY - buttonHeight/2, w:buttonWidth, h:buttonHeight, r:buttonRadius});

ctx.font = font;
ctx.fillStyle = textColor;
ctx.textAlign = "center";
ctx.textBaseline = 'middle';
ctx.fillText(text, buttonX, buttonY);
`;

addSampleScript(["buttons"],{
"name": "Gradient round button 2",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
app.executeSampleScript('Gradient round button 2', {text: '3D button'});
app.executeSampleScript('3D effect 3');
`;

addSampleScript(["buttons"],{
"name": "3D gradient round button",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let amount = params.amount || 50;

let width = ctx.canvas.width;
let height = ctx.canvas.height;

const imageData = ctx.getImageData(0, 0, width, height);

// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  // Modify pixel data
  imageData.data[i + 0] += Math.random()*amount - amount/2; // R value
  imageData.data[i + 1] += Math.random()*amount - amount/2; // G value
  imageData.data[i + 2] += Math.random()*amount - amount/2; // B value
}

ctx.putImageData(imageData, 0, 0);
`;

addSampleScript(["filters"],{
"name": "Noise",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let color = "#0066aa";
let borderColor = "#666666";
let borderSize = 1;
let lightSize = 2;
let x = 200;
let y = 200;
let w = 20;
let h = 20;

let colorRgb = $util.hexToRgb(color);
let lighterColorRgb = $util.rgbAdd(colorRgb, 30);
let lightColor = $util.rgbToHex(lighterColorRgb);

ctx.fillStyle=borderColor;
ctx.fillRect(x, y, w, h);
ctx.fillStyle=lightColor;
ctx.fillRect(x + borderSize, y + borderSize, w - 2 * borderSize, h - 2 * borderSize);
ctx.fillStyle=color;
ctx.fillRect(x + borderSize + lightSize, y + borderSize + lightSize, w - 2 * borderSize - 2 * lightSize, h - 2 * borderSize - 2 * lightSize);
`;

addSampleScript(["shapes"],{
"name": "Bordered square",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let x = params.x ?? 300;
let y = params.y ?? 200;
let size = params.size ?? 200;
let startAngle = params.startAngle ?? 0;
let endAngle = params.endAngle ?? 2 * Math.PI / 24;

ctx.beginPath();
ctx.arc(x, y, size, startAngle, endAngle);
ctx.lineTo(x,y);
ctx.fill();
`;

addSampleScript(["other"],{
"name": "Fill ray",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let x = params.x ?? 300;
let y = params.y ?? 200;
let size = params.size ?? 400;
let numRays = params.numRays ?? 48;
let color1 = "#ff6600";
let color2 = "#ffcc00";

let offset = 2 * Math.PI / numRays;

let startAngle = 0;
let endAngle = startAngle + offset;

ctx.save();

ctx.beginPath();
ctx.globalAlpha = 0;
ctx.arc(x, y, size, 0, 2 * Math.PI);
ctx.stroke();
ctx.globalAlpha = 1;
ctx.clip();

ctx.fillStyle = color1;
ctx.fillRect(0,0,600,400);
ctx.fillStyle = color2;

for (let i=0; i<numRays; i += 2) {
  app.executeSampleScript('Fill ray', {x:x, y:y, size:size, startAngle:startAngle, endAngle:endAngle});
  startAngle += 2 * offset;
  endAngle += 2 * offset;
}

ctx.restore();
`;

addSampleScript(["other"],{
"name": "Sunburst effect",
"func": new Function("params", sourceCode),
"source": sourceCode
});


sourceCode = `
let text = "Hello World";
ctx.font = "64px Arial";
let x = 110;
let y = 200;
let colors = ["#ff0000","#00ff00","#0000ff"];

for (let i=0; i<text.length; i++) {
  let letter = text.substring(i, i+1);
  ctx.fillStyle = colors[i % colors.length];
  ctx.fillText(letter, x, y);
  x += ctx.measureText(letter).width;
}
`;

addSampleScript(["text", "color"],{
"name": "Letters with different colors",
"func": new Function("params", sourceCode),
"source": sourceCode
});


function addSampleScript(types, sampleScript) {
  sampleScripts.push(sampleScript);
  for (i=0; i<types.length; i++) {
    let type = types[i];
    sampleScriptTypes.add(type);
    if (sampleScriptsByType[type] == null) {
      sampleScriptsByType[type] = [];
    }
    sampleScriptsByType[type].push(sampleScript);
  }
}

function getSampleScripts(type, text) {

  let textLowerCase = text || "";
  textLowerCase = textLowerCase.toLowerCase();

  let sampleScriptByType = null;

  if (type == null || type == "") {
    sampleScriptByType = sampleScripts;
  } else {
    sampleScriptByType = sampleScriptsByType[type];
  }

  let result = [];
  for (let i=0; i<sampleScriptByType.length; i++) {
    let sampleScript = sampleScriptByType[i];
    if (sampleScript.name.toLowerCase().includes(textLowerCase)) {
      result.push(sampleScript);
    }
  }

  return result;
  
}

function getSampleScriptTypes() {
  return Array.from(sampleScriptTypes);
}
