function setWidthHeight(event, form) {
    // Prevents page refresh on form submit
    event.preventDefault();

    const width = form.width.value;
    const height = form.height.value;

    console.log('setWidthHeight, form: ', { width, height });

    const blockToBeModified = document.getElementById('blocktobemodified');
    console.log(blockToBeModified);

    blockToBeModified.style.width = width + "px";
    blockToBeModified.style.height = height + "px";
}

function setBorderSize(event, form) {
    // Prevents page refresh on form submit
    event.preventDefault();

    const borderSize = form.borderWidth.value;

    console.log('setBorderSize, form: ', { borderSize });

    const blockToBeModified = document.getElementById('blocktobemodified');
    console.log(blockToBeModified);

    blockToBeModified.style.borderWidth = borderSize + "px";
}

function setBorderColor(event) {
    // Prevents page refresh on form submit
    event.preventDefault();

    console.log(event.submitter.value);

    const borderColor = event.submitter.value;

    console.log('borderColor, form: ', { borderColor });

    const blockToBeModified = document.getElementById('blocktobemodified');
    console.log(blockToBeModified);

    blockToBeModified.style.borderColor = borderColor;
}

function setBorderStyle(event) {
    // Prevents page refresh on form submit
    event.preventDefault();

    console.log(event.submitter.value);

    const borderStyle = event.submitter.value;

    console.log('borderColor, form: ', { borderStyle });

    const blockToBeModified = document.getElementById('blocktobemodified');
    console.log(blockToBeModified);

    blockToBeModified.style.borderStyle = borderStyle;
}

function setBgColor(event) {
    // Prevents page refresh on form submit
    event.preventDefault();

    console.log(event.submitter.value);

    const bgColor = event.submitter.value;

    console.log('borderColor, form: ', { bgColor });

    const blockToBeModified = document.getElementById('blocktobemodified');
    console.log(blockToBeModified);

    blockToBeModified.style.backgroundColor = bgColor;
}