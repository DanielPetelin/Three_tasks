// ==========================
// Задача первая
var yearAgo = 2006;
var yearNow = 2020;
var yourYears = yearNow - yearAgo;

document.getElementById('out').innerHTML = 'Ваш возраст: ' + yourYears

// ==========================
// задача два
document.getElementById('push').onclick = function() {
    var yourNum = document.getElementById('numbers').value;
    var yourAge = document.getElementById('yourAge').value;
    var cost = document.getElementsByName('cost');
    // if (yourAge == '') {
    //     alert('заполните поле возраста!');
    // };
    for (var i = 0; i < cost.length; i++) {
        if (cost[i].type == "radio" && cost[i].checked) {
            console.log('Your num: ' + yourNum + ';   Cost: ' + cost[i].value + ';   Your age: ' + yourAge);
        };
    };
    // console.log();
};

// ==========================
// задача 3
document.getElementById('bgColor').onclick = function() {
    var bgColor = document.querySelector('.bgColor').value;
    var page = document.querySelector('body');

    page.style.backgroundColor = bgColor;
};

// document.getElementById('bgColor').onclick = function() {
//     var bgColor = document.getElementById('bgColor').value;
//     var page = document.querySelector('body');

//     page.style.backgroundColor = bgColor;
// };