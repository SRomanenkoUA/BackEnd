var fss = require('fs');
const configFile = 'table.json';
var configApp = JSON.parse(fss.readFileSync(configFile, 'utf8'));
this.TDT = "Тестовое приложение руками";//configApp.applicationName.toString();
//console.log(configApp.applicationName);