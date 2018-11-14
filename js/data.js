import Show from './Enitites/Show.js';

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

export {
    fetchData
}
