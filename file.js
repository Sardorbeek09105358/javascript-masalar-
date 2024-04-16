// let a = prompt("raqam kirit");
// if (a % 2 == 0) {
//   console.log("a soni juft son");
// } else {
//   console.log("a soni toq son");
// }
// let a = parseInt(Math.random() * 20);
// console.log(a, 'random son');
// if(a % 5 == 0){
//     console.log(`${a} soni 5 ga bo'linadi`);
// } else if (a % 3 == 0){
//     console.log(`${a} soni 3 ga bo'linadi`);
// } else if(a % 3 == 0 && a % 5 == 0) {
//     console.log(`${a} soni 3 ga va 5 ga bo'linadi`);
// } else {
//     console.log(`${a} soni 3 va 5 ga bo'linmaydi`);
// }

// let a = +prompt('a sonini kirit')
// let b = +prompt('b sonini kirit')

// if(a > 10 && a < 20){
//     console.log(`${a} soni 5 ga uzoq`);
// } else {
//     console.log(`${a} soni 5 ga yaqn`);
// }

// if(b > 10 && b < 20){
//     console.log(`${b} soni 5 ga uzoq`);
// } else {
//     console.log(`${b} soni 5 ga yaqn`);
// }

// let nums = [2, 2, 3, 4, 5];

// if (nums[0] % 2 === 1) {
//   nums[0]++;
// } else {
//   nums[0]--;
// }
// console.log(nums);

// let obj = {name: 'gentra', price: 13000, position: 'tashkent'}

// obj.name = 'cobalt'
// obj.name = null
// console.log(obj).name;

// Ixtiyoriy "n" ta sondan iborat arrayi olinsin. Shu arrayning ichidagi nechta juft va nechta toq son borligi aniqlansin. == //

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// for(let i = 0; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// let inputWord = 'Beautiful';
// let result = myVovels(inputWord);

// task4

// function myVovels(word) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;

//     for (let i = 0; i < word.length; i++) {
//       if (vowels.includes(word[i].toLowerCase())) {
//         vowelCount++;
//       }
//     }
//     return vowelCount;
// }
// console.log('Unli harflar soni:', result);

// task5 [5, 16,  7,  4, 10,  3,  4,  4, 14,  5, 14,  4,  44,  4] shu arraydan 4 soni olib tashlansin.

// let arr = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];
// console.log(arr);
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);


// let arr = [2, 3, 4, 5, 6, 7];
// console.log(arr);
// let n = 2;
// let result = [];

// function fn() {
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] === n) {
//       result.push(arr[i]);
//     }
//   }
//   return n;
// }
// console.log(result);

// fn();

// 3 . Berilgan arrayni barcha elementlarini qo'shib string hosil qiluvchi dastur tuzing.
// Masalan:
// Berilgan qiymat: ['You', 'should', 'study', 'hard']
// Natija: 'You should study hard'

// let arr = ['you', 'should', 'study', 'hard']
// let total = Array.from(arr.toString()).join("");
// console.log(total);

// 5. Berilgan n sonidan kichik bo'lgan barcha tub sonlarni ro'yxatini chiqaruvchi dastur tuzing.
// Masalan:
// Berilgan qiymat: 10
// Natija: 2, 3, 5, 7

// function myFunc(number) {
//   if (number < 2) {
//     return false;
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// function fn(n) {
//   const result = [];

//   for (let i = 2; i < n; i++) {
//     if(myFunc(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// const n = 10;
// const num = fn(n);
// console.log(num);

// list1 = [1,2,4], list2 = [1,3,4] ikkita array birlashmasini o'sish tartibida joylashtiring

// let list1 = [1,2,4];
// let list2 = [1,3,7,5];
// let arr = list1.concat(list2).sort()
// console.log(arr);

// nums = [1,3,2,4,5,6,99,102], target = 5, o'sish va kamayish tartibli array ichida target qiymati array ichida nechinchi qiymatda turganini aniqlang== //

// let arr = [1,3,2,4,5,6,99,102]
// console.log(arr);
// let target = 5;

// nums = [4,5,6,7,0,1,2], target = 0 => mana shu nums array ichida target teng bo'lgan qiymatning nechinchi index da turganini aniqlang
// rasult => [ index ]

// const nums = [4, 5, 6, 7, 0, 1, 2];
// const target = 0

// function findTargetIndex(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findTargetIndex(nums, target));

// Funksiya, narx oraliqni hisoblash uchun

// function myFunc(min, max) {
//   let narx = Math.random() * (max - min) + min;
//   return narx;
// }

// let minNarx = 0.1;
// let maxNarx = 0.9;
// console.log("1 kg konfet narxi: ", myFunc(minNarx, maxNarx).toFixed(2));

// Ixtiyoriy sonlardan iborat array olinsin va uning ichidagi sonlar yig'indisi topilsin 2 xil yo'l bilan

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let total = arr.reduce((a,b) =>(a + b));
// console.log(total);

// Ixtiyoriy 3 ta key dan iborat bo'lgan 3 ta object birlashmasi topilsin

// let obj = { name: "john" };
// let obj2 = { age: 18 };
// let obj3 = { adress: "mirobod" };
// let total = Object.assign(obj, obj2, obj3);
// console.log(total);


// ixtiyoriy object yaratilsin va key va value si kamida 4 ta bo'lsin 1. key larini ro'yxati chiqarilsin 2. value larining ro'yxati chiqarilsin

// let obj = {name: 'gentra', price: 23000, color: 'black', address: 'chilonzor'}
// let keys = Object.keys(obj)
// let value = Object.values(obj)
// console.log('keys',keys);
// console.log('value', value);

// Ixtiyoriy object yaratilsin key va value lari 6 tadan kam bo'lmasin

// 1. value lar ro'yxati chiqarilsin
// 2. value larining yig'indisi topilsin
// 3. value lar o'sish tartibida joylashsin
// 4 value lar kamayish tartibida joylashsin

// let obj = {name: 10, price: 20, color: 30, address: 40};

// let result = Object.values(obj).reduce((a,b) => a + b, 0)
// let result2 = Object.values(obj).sort((a,b) => a + b)
// let result3 = Object.values(obj).sort((a,b) => {return b - a})
// console.log("O'sish tartibi", result2);
// console.log("Kamayish tartibi trartibi", result3);
// console.log("valuelar yig'indisi", result);

// nums = [4,5,6,7,0,1,2], target = 0 => mana shu nums array ichida target teng bo'lgan qiymatning nechinchi index da turganini aniqlang

// let nums = [4,5,6,7,0,1,2];
// let target = 0;
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] === target){
//         console.log(i);;
//     }
// }

// 2 ta 4 tadan element dan mavjud bo'lgan object yaratilsin

// 1. ularning birlashmasi topilsin
// 2. birlashmasining key  i topilsin
// 3. birlashmasining value si topilsin
// 4. birlashmasining valuelarining yig'indisi topilsin

// let obj = {name: 10, age: 20}
// let obj2 = {address: 20, price: 40}

// let assign = Object.assign(obj, obj2)
// let birlash = Object.keys(assign);
// let value = Object.values(assign).reduce((a,b) => a + b)

// console.log("keys", birlash);
// console.log("values", value);
// console.log("Assign", assign);

// Ixtiyoriy array va random son yarating agar random son array ichida mavjud bulsa o'sha sonning index ni chiqaring agar yo'q bo'lsa bu son yo'q degan xabar chiqsin

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let random = parseInt(Math.random() * 15) 
// console.log(arr);
// console.log("random", random);
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === random){
//         console.log(`randomdagi ${random} soni array ichida ${i} indexda`);
//     }
// }

// 2. Berilgan arraydagi sonlarni 3-eng kichigini qaytaruvchi funksiya yozing.

// let arr = [13, 15, 2, 34, 5, 40, 67];
// console.log(arr);
// let total = Math.min(...arr)
// console.log(total);

// Ixtiyoriy sonlar arrayi yaratilsin. Shunday funksiya yaratinki shu funksiya parametri sifatida berilgan son array ichida bor yoki yo'qligi aniqlasin.

// const fn = (num) => {
//   let arr = [1, 2, 3, 4, 5, 6, 7];
//   console.log(arr);
//   if (arr.includes(num)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// fn(1);

// Parametr sifatida  istalgancha son qabul qiladigan funksiya yarating. Bu funksiyada shu sonlarning yig'indisi hisoblansin.

// const fn = (...num) =>{
//     return num.reduce((a, b) => a + b, 0)
// }
// let result = fn(1,2,3,4,5)

// console.log(`sonlar yig'indisi ${result} ga teng`);


// So'zlardan iborat array berilgan bo'lsin. So'zlarning ichidan funksiya parametri sifatida berilgan so'zni bor yoki yo'qligi aniqlansin.
// Array : ["olma","davlat","xalq","dasturchi","dasturlash","google","boolean"]

// let arr =  ["olma","davlat","xalq","dasturchi","dasturlash","google","boolean", "salom"]
// function say(write){
//     for(let i = 0; i < arr.length; i++){
//         if(arr.includes(write)){
//             console.log("bunday so'z bor");
//         }  else {
//             console.log("bunday so'z yo'q");
//         }
//     }
// }
// say('salom')

// Ixtiyoriy function yarating va unga berilgan paramater o'sish va kamayish tartibida joylashtiring

// function sayHello(...num){
//     let result = num.sort((a, b) => a - b, 0)
//     console.log(result);
// }
// sayHello(1,5,3,1,2,6);


// . 1-mashq function argumentiga berilgan arrayning ichidagi takrorlanmagan element yoki elementlarni chiqaring misol uchun 4 soni 4 1 marta ishtirok etgani uchun javob 4 chiqishi kerak==//

// function singleNumber(arr) {
//   const count = {};
//   for (let num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }
//   const result = [];
//   for (let num in count) {
//     if (count[num] === 1) {
//       result.push(parseInt(num));
//     }
//   }
//   return result;
// }
// const arr = [4, 1, 2, 1, 2, 9];
// const result = singleNumber(arr);
// console.log(result);



// 1. array ichidagi juft va toq sonlarni  sonlarni topish===//

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = oddNumber(num);
// function oddNumber(arr){
//     let oddCount = 0;
//     let evenCount = 0;
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] % 2 === 0){
//             evenCount++
//         } else {
//             oddCount++
//         }
//     }
//     return [evenCount, oddCount]
// } 
// console.log('juft sonlar', result[0]);
// console.log('toq sonlar', result[1]);

// 2. array ichidagi 2ga bo'linadigan sonlarni topish bu mashqni else holatiga nma yozishni bilmadim==//

// let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function myArray(){
//     for(let i = 0; i < count.length; i++){
//         if(count[i] % 2 == 0){
//             console.log(`Arraydagi ${count[i]} ikkiga bo'linadi`);
//         }
//     }
// }
// myArray()

// bu holatda nma bo'lgan: yani array yaratib olib keyi function ichiga for(loop)yozamiz uni ichiga if(agarda)array[i] % 2 == 0 bo'lsa consolega bigint malumot turidan foydalanb chiqaramiz dollar ichiga arra[i]yoziladi

//========3. nechta unli harf borligini topish 3-mashq=====//

// let inputWord = 'Beautiful';
// let result = countVowels(inputWord);

// function countVowels(word) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;

//     for (let i = 0; i < word.length; i++) {
//       if (vowels.includes(word[i].toLowerCase())) {
//         vowelCount++;
//       }
//     }
//     return vowelCount;

// }
// console.log('Unli harflar soni:', result);



// // fetch("https://reqres.in/api/users",{
// //  method: "post",
// //  body: JSON.stringify({
// //     name: 'user 1'
// //  })

// // })
// // .then(res => res.json())

// // .then(data => console.log(data))

// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then((res) => res.json())
// .then((data) => console.log(data))
// .fetch("https://jsonplaceholder.typicode.com/posts")

const request = new XMLHttpRequest()

request.open("get", "https://jsonplaceholder.typicode.com/todos/")

console.log(request);








