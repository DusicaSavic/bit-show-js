import Show from './Show.js';

class SingleShow extends Show {
    constructor(name, image, seasons, cast) {
        super(name, image)
        this.seasons = seasons;
        this.cast = cast;
    }
}

export default SingleShow;