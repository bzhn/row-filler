function generate() {
    // Значения, на которые будут заменяться реплейсеры
    values = document.getElementById("valList").value;
    // Запрос, который обычно подаётся одной строкой
    query = document.getElementById("querySQL").value;
    // реплейсеры (каждый с новой строки)
    replaceMatch = document.getElementById("replaceMatch").value;
    // Готовый результат
    ready = document.getElementById("readySQL");
    // Чекбокс. true, если поставлена галочка
    useRegexp = document.getElementById("useRegexp").checked;
    // Регулярное выражение
    regexRule = document.getElementById("regexRule").value;

    // Делаем массив из значений для подмены
    rows = values.split("\n"); // TODO Можно ли сделать это на месте объявления values?

    // Строка с конечным результатом
    newrows = "";
    
    // Если задано регулярное выражение
    if (useRegexp && regexRule) {
        console.log(regexRule);
        // Здесь должны быть регулярные выражения с несколькими группами
        var re = new RegExp(regexRule, "i");

        // Проходимся по массиву с значениями для подмены элементов на совпадения
        for (x in rows) {
            // Если в строке (элементе массива) есть совпадения
            if (rows[x].match(re)){
                // Тут, наверное, нужно будет делать цикл (для нескольких реплейсеров) и массив с массивами, в котором по группам регулярного выражения будут распределены совпадения
                rows[x] = rows[x].match(re)[0];
            } else {
                // Перезаписываем значение элемента на пустое значение
                rows[x] = "";
            }
            console.log("cropping...");
        }
    }
    // Проходим по массиву с перезаписанными совпадениями и циклом заполняем запросы (query), записывая их в переменную с результатом 
    for (i in rows) {
        if (rows[i] != "") { 
        newrows += query.replaceAll(replaceMatch, rows[i]) + "\n";
        }
    }

    // Подставляем в текстовое поле созданные запросы
    ready.value = newrows;
}

// Показать/скрыть поле с регулярным выражением по нажатию на чекбокс
function showCropOptions() {

    
    regexRule = document.getElementById("regexRule");
    useRegexp = document.getElementById("useRegexp").checked;
    console.log(useRegexp);

    if (!useRegexp) {
        console.log('hide\n');
        regexRule.style.visibility = "hidden";
    }
    if (useRegexp) {
        console.log('show\n');
        regexRule.style.visibility = "visible";
    }
    
    // useRegexp = "";
}

/*
Когда пользователь добавляет новый реплейсер (%f, например),
программа должна определять количество таких реплейсеров и
искать столько же групп в регулярном выражении.
По сути, без групп программа не сможет работать и заменять
сразу на несколько значений. Группы можно проверить по количеству
открытых и закрытых скобок. Если их количество равно между
собой и равно количеству реплейсеров, то программа должна 
работать.
*/
