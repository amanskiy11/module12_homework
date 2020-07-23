class Appliances {
    constructor(name) {
        this.name = name
    }

    getPowerConsumption(A) {
        let powerCons = A * 220
        console.log('Потребляемая мощность ' + this.name + ' = ' + powerCons + 'W')
    }
}
class CleaningAppliances extends Appliances {
    constructor(name, noiseLevel){
        super(name);
        this.noiseLevel = noiseLevel
    }
    getNoiseLevel() {
        console.log('Уровень шума ' + this.name + ' = ' + this.noiseLevel)
    }
}
class EntertainmentAppliances extends Appliances {
    constructor(name, size){
        super(name);
        this.size = size
    }
    getSize() {
        console.log('Размер ' + this.name + ' = ' + this.size)
    }
}
const vacuumCleaner = new CleaningAppliances('Пылесос', '80dB');
const tv = new EntertainmentAppliances('Телевизор', '55 inch');

vacuumCleaner.getPowerConsumption(3)
vacuumCleaner.getNoiseLevel()
tv.getPowerConsumption(0.6)
tv.getSize()

// Здесь уже всё гораздо логичнее :)