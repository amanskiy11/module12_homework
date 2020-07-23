function Appliances(name, powerCons) {
    this.name = name;
    this.powerCons = powerCons;
}
Appliances.prototype.getPowerConsumption = function () {
    let powerConsW = this.powerCons * 220
    console.log('Потребляемая мощность ' + this.name + ' = ' + powerConsW + 'W')
}
function CleaningAppliances(name, noiseLevel) {
    this.name = name;
    this.noiseLevel = noiseLevel;
}
CleaningAppliances.prototype = new Appliances('Устройство', 0.6);

CleaningAppliances.prototype.getNoiseLevel = function () {
    console.log('Уровень шума ' + this.name + ' = ' + this.noiseLevel)
}

function EntertainmentAppliances(name, size) {
    this.name = name;
    this.size = size;
}
EntertainmentAppliances.prototype = new Appliances('Устройство', 0.8)

EntertainmentAppliances.prototype.getSize = function () {
    console.log('Размер ' + this.name + ' = ' + this.size)
}
const vacuumCleaner = new CleaningAppliances('Пылесос', '80dB');
const tv = new EntertainmentAppliances('Телевизор', '55 inch');

vacuumCleaner.getPowerConsumption();

vacuumCleaner.getNoiseLevel();

tv.getSize();

tv.getPowerConsumption();

// По заданию у каждого из приборов должны быть собственные свойства, в данном случае у них есть только имя (такое же свойство, как у протоипа Appliances)
// Лучше было бы сделать доп. свойства, которые вы придумали (size, noiseLevel, powerCons), свойствами соответствующих объектов и в методах getSize и т.п. возвращать эти свойства. Потому что логичнее, когда свойства, относящиеся к объекту, хранятся в этом объекте, а не передаются извне, как сейчас
// Выше исправила код на более удачный вариант