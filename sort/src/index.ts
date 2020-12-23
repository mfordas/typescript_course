import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//Numbers
const numbersCollection = new NumbersCollection([10, 5, -5, 0]);

console.log(numbersCollection.data);

numbersCollection.sort();

console.log(numbersCollection.data);

//String
const charactersCollection = new CharactersCollection('ZacdEWeeeeee');

console.log(charactersCollection.data);

charactersCollection.sort();

console.log(charactersCollection.data);

//LinkedList

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-199);
linkedList.add(3);
linkedList.add(-4);

linkedList.print();

linkedList.sort();

linkedList.print();
