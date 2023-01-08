
                                                  //forEach

// 1-задание )) Дан массив с числами [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]. Вывести в консоль только нечетные числа. (Для этого вам необходимо использовать if и узнать оператор про оператор ‘остаток от деления’ - % 


let array = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
array.forEach(function(a,b,c){
    if ( a % 2){
        console.log(a);
    }


});


// 2-задание)) Дан массив со строчными элементами [ “lorem ipsum”, “javascript”, “php”, “css”, “react”, “git”, “html”, “mysql”]. Вывести в консоль элементы у которых кол-во символов не больше 4-х. 


let arr = ['lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql'];

arr.forEach(function(item,key){
  if (item.length > 4 ){
    console.log(item);
  }


});

console.log(arr);







                                                          
                                                          //   filter





//1.  Дан массив [1, -3, 5, 6, -7, 8, 9, -11]. Создайте новый массив в котором останутся только отрицательные элементы. 



let number = [1, -3, 5, 6, -7, 8, 9, -11];
let newNumber = number.filter(function(item,key){
  return item < 0;
});
console.log(newNumber);










// 2. Дан массив [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]. 
//Создать новый в котором будут только четные элементы этого массива. (Нужен оператор остаток от деления - %). 


let numbers =[10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
let newNumbers = numbers.filter(function(item,key) {
  if ( item % 2 == 0 ){
    console.log(item);
  }
  
});




// 3. Дан массив [ “lorem ipsum”, “javascript”, “php”, “css”, “react”, “git”, “html”, “mysql”] 
//создать новый массив состоящий только из элементов у которых длина строки не равна 3-м.



let lorem =[ 'lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql'];
let newLorem = lorem.filter(function(item,key){
  if(item.length <= 3){
    console.log(item);
  } 
  
});
console.log(lorem);
console.log(newLorem);





                                                
                                                        //Map



//Дан массив [5, 6, 7, 8, 9], сделайте из него массив состоящий из квадратов этих числе. (25, 36.. и тд)


let math = [5, 6, 7, 8, 9];
let pow = math.map(function(item, key,arr){
  arr[key]=item*item;
});
console.log(math);




//Дан массив с объектами [{а: 10, b: 5}, {а: 20, b: 22}, {a: 131, b:55}].
// Создать новый массив элементами которого буду сумма свойств объекта. Должно получится [15, 42, 186]



let  arre = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b:55}];
let arres = arre.map(function(item,key,arr){
  return item.a + item.b;

  
});
console.log(arres);





                                        //Reduce




//Дан массив [-13, 0, 12, 1662, -0.32, -102, -2]. 
//Посчитать сумму отрицательных элементов. (Нужно будет использовать filter и reduce)



let ar =[-13, 0, 12, 1662, -0.32, -102, -2];
let fil = ar.filter(function(item,key,ar){
  return item < 0;
 
      
});
let red = ar.reduce(function(sum, item, key, ar){
  return sum + item;

})

console.log(red);




//Да массив с объектами [ {x: 10, y: “lorem”}, {x: 21, y: “lorem”}, {x: -17, y: “lorem”}, {x: 156, y: “lorem”}];
// посчитать сумму свойств х всех объектов.



let rud = [ {x: 10, y: 'lorem'}, {x: 21, y: 'lorem'}, {x: -17, y: 'lorem'}, {x: 156, y: 'lorem'}];

let dod = rud.reduce(function(sum, item, index, arr){
  return sum + item.x
}, 0);

console.log(dod);