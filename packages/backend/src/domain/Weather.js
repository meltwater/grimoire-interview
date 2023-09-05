class Weather {
    constructor (temperature, location) {
        this.temperature = temperature
        this.location = location
    }

    getTemperature () {
        return this.temperature
    }

    getLocation () {
        return this.location
    }
}

module.exports = Weather