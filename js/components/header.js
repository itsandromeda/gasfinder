/*global $, update, state*/
const Header = (update) => {
    const header = $("<header id='header'></header>"),
        title = $("<h1>GAS FINDER</h1>"),
        icon = $('<i class="fa fa-chevron-left"></i>'),
        prevIcon = $('<a class="prevIcon" href="#"></a>');

    prevIcon.hide();
    prevIcon.append(icon);
    header.append(prevIcon);
    header.append(title);

    prevIcon.on('click', (e) => {
        e.preventDefault();
        state.selectedStation = null;
        update();
    });
    
    return header;
};