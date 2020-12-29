@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `
        This boat color is ${this.color}
        `;
  }

  @logError('Boat was sunk')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      throw new Error();
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return (target: any, key: string, desc: PropertyDescriptor): void => {
    const method = desc.value;

    desc.value = () => {
      try {
        method();
      } catch {
        console.log(errorMessage);
      }
    };
  };
}
