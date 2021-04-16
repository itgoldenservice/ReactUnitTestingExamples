 import {forEachExample, returnValue} from './MockFunction';
 describe('MockFunctions', () => {
     test('MockFunctions', () => {
        const mockCallback = jest.fn(x => 42 + x);
        forEachExample([0, 1], mockCallback);
        
        // The mock function is called twice
        expect(mockCallback.mock.calls.length).toBe(2);
        
        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);
        
        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);
        
        // The return value of the first call to the function was 42
        expect(mockCallback.mock.results[0].value).toBe(42);
     });

     test('Mock return value', () => {
        const doSomethingWithFourthIndex = jest.fn();

        // Make the mock return `true` for the first call,
        // and `false` for the second call
        doSomethingWithFourthIndex.mockReturnValueOnce('Got forth index');
        
        const result = returnValue([11, 12, 13, 14, 15], doSomethingWithFourthIndex);
        
        expect(result).toBe('Got forth index');
        expect(doSomethingWithFourthIndex).toHaveBeenCalled();
     })
 })