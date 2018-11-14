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
    e.preventDefault();
    const movieId = $(e.currentTarget).attr('data-id');


    console.log(movieId);
}

const onSuccessResponse = (showsArrayToDisplay) => {
    ui.createMovieCard(showsArrayToDisplay);
}


export { init }
