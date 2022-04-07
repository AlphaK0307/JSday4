// Create a scope
{
    // Set the navbar to dark
    let body = document.body;
    let children = body.children;
    let navBar = children[0];
    navBar.className = navBar.className.replaceAll('light', 'dark');


    // Set the buttons to be bootstrap style with colors
    let myButtonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    myButtons = document.querySelectorAll('.col-2 > button');

    for (let i = 0; i < myButtons.length; i++){
        myButtons[i].className = `btn btn-${myButtonColors[i]} w-100`;
    }

    // Add a header under the buttons in the container

    // First create the element
    let newHeader = document.createElement('h4');
    newHeader.id = 'myHeader'
    newHeader.className = 'text-center mt-3';
    newHeader.innerHTML = 'Created by JavaScript';

    // Get the row with the buttons element
    let container = document.getElementsByClassName('row')[0]
    container.append(newHeader);
}