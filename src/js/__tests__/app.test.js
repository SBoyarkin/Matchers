import {sortHealth} from '../app'

let originalArray = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]


let sortedArray = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]

test('check sort', () => {
  const result = sortHealth(originalArray)
expect(result).toEqual(sortedArray)
})
