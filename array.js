document.write("<h2>Arr  ays</h2>");
let arr =[50 ,"zia" , 70, 72 ,76, 77, "Shaheer"]
document.write(arr);
document.write("<p><b> different ways of arrays</b></p> ");
document.write("<h5> In Loops</h5>");
for( a= 0; a<=6;a++){
    document.write(arr[a] + "<br>")
};

document.write("<h4> list style</h4>");
document.write("<ol>");

for( a= 0; a<=6;a++){
    document.write("<li>"+ arr[a] + "</li>")
}
document.write("<ol>");
    document.write("<h2>Arrays part 2</h2>");
    let ary = new Array(2);
    ary[1]="shaheer"
    ary[2]="12345"
    for(a=0 ; a <= 2; a++){
        ary[a] = prompt("username");
        if(ary[1] == ary[a] && ary[2] == ary[a]){
            alert("login")
        }
    }