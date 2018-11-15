import Show from './Entities/Show.js';
import SingleShow from './Entities/SingleShow.js'
import Season from './Entities/Season.js';
import cast from './Entities/Cast.js'
import Cast from './Entities/Cast.js';

// baza svih serija
const BASE_ENDPOINT = 'http://api.tvmaze.com/shows';

const fetchData = (onSuccess) => {

    const requestData = $.ajax({
        url: BASE_ENDPOINT,
        method: 'GET'
    });

    requestData.done((response) => {
        // console.log("server response onDone", response);

        const showsList = response.map(function (showData) {
            const { name, id, image, rating } = showData;
            return new Show(name, id, image, rating);
        });

        // const showsList = [];
        // for (let i = 0; i < response.length; i++) {
        //     const showData = response[i];
        //     const { name, url, image, rating } = showData;
        //     // const name = showData.name;
        //     // const name = response[i].name;

        //     const show = new Show(name, url, image, rating);
        //     showsList.push(show);
        // }


        showsList.sort(function (show1, show2) {
            const r1 = show1.rating.average;
            const r2 = show2.rating.average;

            return r2 - r1;
        });


        showsList.splice(50);
        // console.log(showsList);

        onSuccess(showsList);

    });

}



const fetchDataSingleShow = (id) => {

    const SINGLE_SHOW_ENDPOINT = `${BASE_ENDPOINT}/${id}?embed[]=seasons&embed[]=cast`

    const requestData = $.ajax({
        url: SINGLE_SHOW_ENDPOINT,
        method: 'GET'
    });


    requestData.done((response) => {
        console.log("server response onDone", response);
        const { name, image, _embedded } = response;

        const seasons = _embedded.seasons;
        const cast = _embedded.cast;
        console.log(cast);

        const seasonsList = seasons.map(function (singleSeason) {
            const { number, premiereDate, endDate } = singleSeason;
            return new Season(number, premiereDate, endDate);
        });

        const castList = cast.map(function (singleCast) {
            const { person } = singleCast;
            return new Cast(person.name);
        });

        const singleShow = new SingleShow(name, image, seasonsList, castList);
        console.log(singleShow);


    });
}

export {
    fetchData,
    fetchDataSingleShow
}
