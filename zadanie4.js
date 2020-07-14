function Appliances(name) {
    this.name = name
}
Appliances.prototype.getPowerConsumption = function (A) { // A = ампер
    let powerCons = A * 220
    console.log('Потребляемая мощность ' + this.name + ' = ' + powerCons + 'W')
}
function CleaningAppliances(name) {
    this.name = name
}
CleaningAppliances.prototype = new Appliances()

CleaningAppliances.prototype.getNoiseLevel = function (noiseLevel) {
    console.log('Уровень шума ' + this.name + ' = ' + noiseLevel)
}

function EntertainmentAppliances(name) {
    this.name = name
}
EntertainmentAppliances.prototype = new Appliances()

EntertainmentAppliances.prototype.getSize = function (size) {
    console.log('Размер ' + this.name + ' = ' + size)
}
const vacuumCleaner = new CleaningAppliances('Пылесос');
const tv = new EntertainmentAppliances('Телевизор');

vacuumCleaner.getPowerConsumption(3);

vacuumCleaner.getNoiseLevel('80dB');

tv.getSize('55 inch')

tv.getPowerConsumption(0.6)