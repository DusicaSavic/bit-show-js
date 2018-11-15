class Season {
    constructor(number, premiereDate, endDate) {
        this.number = number;
        this.premiereDate = premiereDate;
        this.endDate = endDate;
    }

    getInfo() {
        return `${this.premiereDate} - ${this.endDate}`
    }
}

export default Season;