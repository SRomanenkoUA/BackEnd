/*
Формат файла *.scv
Параметр; значение
 */

// Открытие (парсинг *.scv) файла через окно выбора
let col = [];  // Виртуальный массив с считываемыми параметрами

var openFile = function () {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = function () {
        //console.log(this.files[0]) //this.value - полный путь к файлу
        var filereader = new FileReader();
        filereader.onload = function (info) {
            //console.log(info) // информация о файле
            text.innerHTML = info.target.result.toString().replace(/\n/g,'<br>').replace(/ /g,'&nbsp; ');
            processData(info.target.result.toString());
        };
        filereader.onerror = function () {
            alert("Не возможно открыть файл");
        };
        filereader.readAsText(this.files[0]);
    }
    input.click();
}
// Открытие (парсинг *.scv) файла через указание точного имени
function getFileAsText(fileToRead) {
    let reader = FileReader();
    reader.readAsText(fileToRead);
    reader.onload = loadHandler;
}
function loadHandler() {
    let csv = event.target.result.toString();
    processData(csv);
}
// Разбираю файл
function processData(csv) {
    let allTextLines = csv.split(/\r\n|\n/);

    for (var i = 0; i < allTextLines.length; i++){
        let row = allTextLines[i].split(';');
        col[i] =[];
        if (row.length>0){
            for (let j=0; j<row.length; j++){
                col[i][j]=row[j];
                if (j>0){
                    console.log(col[i][0].toString()
                        + row[j].toString()
                        + j.toString());
                }

            }
        }
    }
}