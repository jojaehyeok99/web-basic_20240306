/*
  배열 고차 함수
  - 배열의 불변성을 최대한 보장하여 부수 효과를 제거한 메서드 
*/
const array = [7, 11, 20, 1, 8, 3, 16, 2, 19, 9, 10, 4, 13, 12, 14, 17, 15, 5, 18, 6];

/*
  sort(비교 함수) : 배열의 요소를 적절하게 정렬
  - 단순하게 .sort()로 정렬하면 사전식 정렬(아스키 코드)을 하게됨.
*/
// array.sort();
// console.log(array);

// 오름차순 정렬
// array의 요소를 x,y에 대입하여 뺐을때 음수면 y를 앞으로 양수면 그대로 해서 정렬
const asc = function (x,y){
  return x- y; 
}
array.sort(asc);
console.log(array);

// 내림차순 정렬
array.sort(function(x,y){return y-x});
console.log(array);

const objects = [
  {x:9, y:-5},
  {x:-2, y:0},
  {x:0, y:-3},
  {x:6, y:5}
];
console.log(objects);

// x 기준으로 오름차순 정렬
objects.sort(function(a,b){
  return a.x - b.x
});
console.log(objects);

// y 기준으로 오름차순 정렬
objects.sort(function(a,b){
  return a.y - b.y
});
console.log(objects);

console.log('==============================');

/*
  forEach(콜백 함수) : for문 대신 사용
  - 배열을 순회하면서 각 배열의 요소와 인덱스를 사용할 수 있도록 함
  - 원본 배열 변경 X
  - break, continue, ... 부가적인 작업을 추가 X
  - for문보다 성능이 떨어지지만, 가독성이 좋고 편리하므로 자주 사용
  - async await 작업은 forEach문으로 사용 불가
*/
array.forEach(function(item, index){
  console.log(`index : ${index}, item : ${item}`);
});

console.log('==============================');

/*
  map(콜백 함수) : 콜백 함수의 반환값들로 이루어진 새로운 배열 생성해서 반환
  - 원본 배열 변경 X
  - forEach 요소는 단순히 요소를 가지고 작업만 진행 (반환 값X),
    map 요소를 가지고 작업한 결과로 배열 새로 만듦 (반환 값O)
*/
const mapArray = array.map(function(item, index){
  console.log(`index : ${index}, item : ${item}`);
  return item * item;
});
console.log(mapArray);
console.log(array);

console.log('==============================');

/*
  filter(콜백 함수) : 콜백 함수의 반환 값이 true인 배열의 요소의 값만을 추가한 새로운 배열을 생성
  - 배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을 때 사용
  - 원본 배열 변경 X
*/
const filterArray = array.filter(function(item,index){
  return item%2 === 1;
});
console.log(filterArray);
console.log(array);

console.log('==============================');

/*
  find(콜백 함수) : 콜백 함수 결과가 true인 첫번째 요소를 반환 
*/
const findResult = array.find(function(item, index){
  return item%2 === 1;
});
console.log(findResult);

console.log('==============================');

/*
  findIndex(콜백 함수) : 콜백 함수 결과가 true인 첫번째 요소의 인덱스를 반환
*/
const findIndexResult = array.findIndex(function(item, index){
  return item%2 === 1;
});
console.log(findIndexResult);

console.log('==============================');