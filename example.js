function loadImage(url) {
    return new Promise((resolve, reject) => {
        let image = new Image()

        image.onload = function() {
            resolve(image)
        }

        image.onerror = function() {
            let message = 
              'could not load image at ' + url
            reject(new Error(msg)) 
        }

        img.src = url
    })
}

export default loadImage