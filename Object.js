        document.write("<h3> Object </h3>")
        var a ={
            name : 'zia',
            fname : 'Khalid',
            age : 21,
            living : {
                city : 'TandoAllahyar',
                country : 'Pakistan',
                province : 'Sindh',

            },
            Acadmics : 'Under-graduate',
            favSports : ['cricket','football','volleyBall'],
            fullname : function(){
                return(this.name+" "+this.fname)
            }
        }
        document.write(a.living.city+ "<br><br>")
        document.write(a.favSports+ "<br><br>")
        document.write("<h5> Function in Object </h5>")
        document.write(a.fullname());