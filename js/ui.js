const $gallery = $('.movie-gallery');


const createMovieCard = (showsList) => {

    for (let i = 0; i < showsList.length; i++) {
        const show = showsList[i];
        const { title, id, poster } = show;

        const $movieCard = $(
            `<div class="col-md-4 col-sm-12">
            <div class="card">
                <img class="card-img-top" src=${poster.original} alt="Card image cap">
                <div class="card-body">
                    <a data-id='${id}' href='./info_page.html'><h5 class="card-title">${title}</h5></a>
                </div>
            </div>
        </div>`
        );

        $gallery.append($movieCard);
    }


}

export {
    createMovieCard
}