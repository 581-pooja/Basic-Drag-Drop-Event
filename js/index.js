// console.log("Drag and Drop - Tutorial");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// console.log(imgBox)
// console.log(whiteBoxes)

// event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    // console.log('DragStart has been triggered');
    // console.log('Hold is activated');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
})

// imgbox are draggable
imgBox.addEventListener('dragend', (e) => {
    // console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
})


for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault(); // default will allow drop the imgbox
        // console.log('DragOver has been triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        // console.log('DragEnter has been triggered');
        e.target.className += ' dashed'
    });

    whiteBox.addEventListener('dragleave', (e) => {
        // console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    });

    whiteBox.addEventListener('drop', (e) => {
        // console.log('Drop has been triggered');
        e.target.append(imgBox);
    });

}

/*

Events fired on the draggable target (the source element):
ondragstart - occurs when the user starts to drag an element
ondrag - occurs when an element is being dragged
ondragend - occurs when the user has finished dragging the element

Events fired on the drop target: 
ondragenter - occurs when the dragged element enters the drop target
ondragover - occurs when the dragged element is over the drop target
ondragleave - occurs when the dragged element leaves the drop target
ondrop - occurs when the dragged element is dropped on the drop target

*/