// 1.))  Дан массив let a = ['lorem', 123, true, 'ipsum'].  Вывести длинну массива.

let a = ['lorem', 123, true, 'ipsum'];
console.log(a.length);


//2.))Для того же массива выведите первый элемент и последний элемент (с учетом того, что количество элементов может меняться, а ваш код должен всегда работать)


let b = ['lorem', 123, true, 'ipsum'];
console.log(a[a.length -1]);
console.log(a[0]);


//3-4-5))Дан пустой массив let em = []; Заполните его 5-ю различными элементами. Используйте методы для работы с массивами



let em = [1200000, 'html',true, 'javaScript', false]
em.unshift('dskf',1244,'safsf');
em.shift();
em.pop();
em.pop();
  console.log(em);


  // 6.))Используя цикл вывести числа от 0 до 1000 в консоль.

for (let i = 0; i <= 1000; i++){
console.log(i);
}


//7.))Дан массив [“html”, “css”, “js”, “react”] . Напишите код, который принимает с помощью prompt() любое значение и будет добавлять его в конец массива. 


let t  = prompt (['html', 'css', 'js', 'react']);


console.log(t);


//8.))Используя цикл вывести все элементы предыдущего массива


for (let i = 0; i < t.length; i++){
    console.log(t[i]);
};


// 9.))Дан массив [10, 123, 13, 481, 1931]. Используя цикл вывести сумму элементов массива, т.е. 10+123+13… и т.д.

let add = [10,123,13,481,1931];
function arraySum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
arraySum(add);


//Дан массив [“frontend”, [“js”, “html”, “css”], “react”, [“node js”, “mysql”], “php”] - как вы видите сами являются массивами: подумайте, как можно вывести элементы вложенного массива, к примеру “js”, “css”, “mysql”.






let index = ['frontend', ['js', 'html', 'css'], 'react', ['node js', 'mysql'], 'php'];
 
    console.log(index[1][0]);
 console.log(index[1][2]);
 console.log(index[3][1]);