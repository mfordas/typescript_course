const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date(), new Date()];

const carsByMake = [
    ['f150'], ['corolla'], ['camaro']
];

// help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatibile values

carMakers.push(100);

// help with 'map'

carMakers.map((car: string): string => {
    return car;
});

// flexible types

const flexibleTypes: (Date | string)[] = [];

flexibleTypes.push(new Date);
flexibleTypes.push('2020-12-12');

const importantDates = [new Date(), '2030-10-10'];