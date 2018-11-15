import * as data from './data.js';
import * as ui from './ui.js';

const init = () => {
    console.log("App initialized");
    data.fetchData(onSuccessResponse);


    setupOnClickListeners();
}

const setupOnClickListeners = () => {
    $(document).on('click', 'a', onLinkClickHandler);
}

const onLinkClickHandler = (e) => {
    const showId = $(e.currentTarget).attr('data-id');
    // console.log(e.currentTarget);

    // save id to LS
    localStorage.setItem('id', showId);


    // redirect to show details page location object
    const $link = $(e.currentTarget);

    // console.log($link);
    $link.attr('href', './info_page.html');


    // v2.
    // e.preventDefault();
    // window.location.href = './info_page.html';

}

const onSuccessResponse = (showsArrayToDisplay) => {
    ui.createShowCard(showsArrayToDisplay);
}


//// Info_page

const initInfoPage = () => {

    // load ID from LS
    const showId = localStorage.getItem('id');
    console.log(showId);

    console.log("App initialized");
    data.fetchDataSingleShow(showId);
}


export {
    init,
    initInfoPage
}
