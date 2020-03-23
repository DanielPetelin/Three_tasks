// Задача первая
var yearAgo = 2006;
var yearNow = 2020;
var yourYears = yearNow - yearAgo;

document.getElementById('out').innerHTML = 'Ваш возраст: ' + yourYears

// задача два
document.getElementById('push').onclick = function() {
    var yourNum = document.getElementById('numbers').value;
    var cost = document.getElementsByClassName('cost').value;
    var yourAge = document.getElementById('yourAge').value;

    console.log(yourNum + ' ' + cost + ' ' + yourAge);
    // console.log();
};