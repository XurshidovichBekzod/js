{
    //1
    function repeat(soz) {
        return soz.repeat(3)
    }
    console.log(repeat("Salom "));
}


{
    //2
    function foo(soz) {
        return soz.slice(0, 5)
    }
    console.log(foo("Salom dunyo"));
}

{
    //4
    function findCharIndex(str, char) {
        return str.indexOf(char)
    }
    console.log(findCharIndex("Ass0lamu", "0"));
}

{
    //5
    function foo(soz) {
        return soz.replace("bugundan", "ertadan")
    }
    console.log(foo("bugundan dars qilishni boshlayman "));
}

{
    //6
    function kotta(soz) {
        return soz.slice(-3).toUpperCase();
    }
    console.log(kotta("salom"));
}

{
    //8
    function raqam(soz) {
        return soz.padStart(4, "0").repeat(2)
    }
    console.log(raqam("23"));
}

{
    //9
     function boshJoy(soz){
         return soz.replace(/-/, " ").split(" ").join(" ")
     }
     console.log( boshJoy("Assalomu-Alaykum 33") );
    
}

{
    // 10
    function email(soz){
        let a = soz.indexOf("@")
        return `user${soz.slice(a)}`
    }
    console.log( email("odilovbekzod@gmail.com"))
}