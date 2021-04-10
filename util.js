let $util = {
    rgbToHex(rgb) {
        return '#' + [rgb.r, rgb.g, rgb.b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          }).join('');
    },
    hexToRgb(hex) {
        let rgbArray = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16));
        return {r:rgbArray[0], g:rgbArray[1], b:rgbArray[2]};
    },
    rgbAdd(rgb, add) {
        rgb.r += add;
        rgb.g += add;
        rgb.b += add;

        rgb.r = this.rgbFit(rgb.r);
        rgb.g = this.rgbFit(rgb.g);
        rgb.b = this.rgbFit(rgb.b);

        return rgb;
    },
    rgbFit(num) {
        num = Math.round(num);
        return  Math.max(Math.min(num, 255), 0);
    },
    random256() {
        return Math.floor(Math.random()*256);
    },
    cloneCanvas(canvas) {
        let canvasClone = document.createElement('canvas');
        canvasClone.width = 600;
        canvasClone.height = 400;
        let ctxClone = canvasClone.getContext('2d');
        ctxClone.drawImage(canvas, 0, 0);
        return canvasClone;
    },
    getImageDataPosition(canvas, x, y) {
        let width = canvas.width;
        //let height = canvas.height;
        let position = (y * width + x) * 4;
        return position;
    },
    crop(originalCanvas) {
        let width = originalCanvas.width;
        let height = originalCanvas.height;

        let originalCtx = originalCanvas.getContext('2d');
        let imageData = originalCtx.getImageData(0, 0, width, height);

        let initialCropX = 0;
        let initialCropY = 0;

        let finalCropX = width-1;
        let finalCropY = height-1;

        for (let x=0; x<width; x++) {
            let transparentCol = true;
            initialCropX = x;
            for (let y=0; y<height; y++) {
                let position = this.getImageDataPosition(originalCanvas, x, y);
                if (imageData.data[position+3] > 0) { //not transparent
                    transparentCol = false;
                    break;
                }
            }
            if (!transparentCol) {
                break;
            }
        }

        for (let x=width-1; x>=0; x--) {
            let transparentCol = true;
            finalCropX = x;
            for (let y=0; y<height; y++) {
                let position = this.getImageDataPosition(originalCanvas, x, y);
                if (imageData.data[position+3] > 0) { //not transparent
                    transparentCol = false;
                    break;
                }
            }
            if (!transparentCol) {
                break;
            }
        }

        for (let y=0; y<height; y++) {
            let transparentRow = true;
            initialCropY = y;
            for (let x=0; x<width; x++) {
                let position = this.getImageDataPosition(originalCanvas, x, y);
                if (imageData.data[position+3] > 0) { //not transparent
                    transparentRow = false;
                    break;
                }
            }
            if (!transparentRow) {
                break;
            }
        }

        for (let y=height-1; y>=0; y--) {
            let transparentRow = true;
            finalCropY = y;
            for (let x=0; x<width; x++) {
                let position = this.getImageDataPosition(originalCanvas, x, y);
                if (imageData.data[position+3] > 0) { //not transparent
                    transparentRow = false;
                    break;
                }
            }
            if (!transparentRow) {
                break;
            }
        }

        let croppedWidth = finalCropX - initialCropX;
        let croppedHeight = finalCropY - initialCropY;

        // for (let i = 0; i < imageData.data.length; i += 4) {
        //     imageData.data[i] = 255 - imageData.data[i];
        //     imageData.data[i+1] = 255 - imageData.data[i+1];
        //     imageData.data[i+2] = 255 - imageData.data[i+2];
        //}

        //ctx.putImageData(imageData, 0, 0)

        let croppedcanvas = document.createElement('canvas');
        croppedcanvas.width = croppedWidth;
        croppedcanvas.height = croppedHeight;

        let croppedcanvasCtx = croppedcanvas.getContext('2d');
        //croppedcanvasCtx.fillStyle = 'rgb(255,0,0)';
        //croppedcanvasCtx.fillRect(0, 0, 100, 100);
        //croppedcanvasCtx.putImageData(imageData, -initialCropX, -initialCropY, 0, 0, width-initialCropX, height-initialCropY);
        croppedcanvasCtx.putImageData(imageData, -initialCropX, -initialCropY);

        return croppedcanvas;

    }
}

