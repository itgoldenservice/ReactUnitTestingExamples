export function forEachExample(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
}

export function returnValue(items, doSomethingWithFourthIndex) {
    for (let index = 0; index < items.length; index++) {
       if(index === 4) {
        return doSomethingWithFourthIndex(items[index]);
       }
    }
}