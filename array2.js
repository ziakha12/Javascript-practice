        document.write("<h2> Methods Of Array </h2>");
        document.write("<h4> push & Unshift </h4>");

        var a =["shaheer", "zia ", 19 , "asim"];
        document.write(a + "</br> </br>");
        a.unshift("shahmir");
        document.write(a + "</br> </br>");

        a.push("shuja");
        document.write(a);

        document.write("<h4> concate & Join </h4>");
        var a =["shaheer", "zia ", 19 , "asim"];
        var k =[19,20]
          var d=  a.concat(k)
        document.write(d +"</br> </br>");

        var d=  a.join(" ")
        document.write(d);

        document.write("<h4> IS array() & Includes </h4>");
        l= a.includes("khazada")
        document.write(l);

        document.write("<h4> Some & Every </h4>");
        var k =[10,20,30,40]
        var f = k.some(zia);
        document.write(f +"</br> </br>");
        function zia(k){
            return k >= 10;
        };

        var k =[10,20,30,40]
        var f = k.every(zia);
        document.write(f +"</br> </br>");
        function zia(k){
            return k >= 10;
        };