import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 5, -5, 0]);

const sorter = new Sorter(numbersCollection);

console.log(numbersCollection.data);

sorter.sort();

console.log(sorter);
