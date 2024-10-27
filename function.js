function alert_paragraph_color() {
    // Getting input values
    const borderR = document.getElementById("border_R").value;
    const borderG = document.getElementById("border_G").value;
    const borderB = document.getElementById("border_B").value;
    const borderWidth = document.getElementById("border_width").value;
    const bgR = document.getElementById("bg_R").value;
    const bgG = document.getElementById("bg_G").value;
    const bgB = document.getElementById("bg_B").value;

    // Get the paragraph text
    const paragraph = document.getElementById("paragraph");

    // Setting the border color and width
    paragraph.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
    paragraph.style.borderWidth = borderWidth + 'px';
    
    // Setting the background color
    paragraph.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;
}
   