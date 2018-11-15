const $gallery = $('.movie-gallery');


const createShowCard = (showsList) => {

    for (let i = 0; i < showsList.length; i++) {
        const show = showsList[i];
        const { name, id, image } = show;

        const $showCard = $(
            `<div class="col-md-4 col-sm-12">
            <div class="card">
                <img class="card-img-top" src=${image.original} alt="Card image cap">
                <div class="card-body">
                    <a data-id='${id}' href=''><h5 class="card-title">${name}</h5></a>
                </div>
            </div>
        </div>`
        );

        $gallery.append($showCard);
    }
}

// const createSingleShow = 

export {
    createShowCard
}