const TDT='sdfdsfsd sdf';
new Vue ({
    el:"#app",
    data: {
        loginName: '',
        pass: "",
        showuser: true,
        showpass: false,
        showmenu:true,
        testData2: "Petrov"
    },
    methods: {
        onEnterPass: function () {
            console.log('Вошел пользователь: ' + this.loginName + ' с паролем: ' + this.pass)
        },
        onEnterUser: function () {
            if (this.loginName.length<1)
            {
                this.showuser = true;
                this.showpass = false
            }
        }
    },
    computed:{
        appName: function () {
            return TDT //'Конфигуратор системы'
        },
        nameLenght: function () {
            return this.loginName.length
        },
        passLenght: function () {
            return this.pass.length
        }

    }
}),
new Vue ({
    el: "#Next",
    data: {
        loginName: 'Повторный ввод',
        pass: "",
        showuser: true,
        showpass: false,
        showmenu: true,
        testData2: "Petrov"
    }
})