import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color');
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);

// console.log(Reflect.getMetadata('note', plane, 'color'));
// console.log(Reflect.getMetadata('height', plane));
@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('xyz')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let classKeys in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, classKeys);
    console.log(secret);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
