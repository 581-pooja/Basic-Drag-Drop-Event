
const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');


// event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
})

// imgbox are draggable
imgBox.addEventListener('dragend', (e) => {
    e.target.className = 'imgBox';
})


for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault(); // default will allow drop the imgbox
    });

    whiteBox.addEventListener('dragenter', (e) => {
        e.target.className += ' dashed'
    });

    whiteBox.addEventListener('dragleave', (e) => {
        e.target.className = 'whiteBox'
    });

    whiteBox.addEventListener('drop', (e) => {
        e.target.append(imgBox);
    });

}

