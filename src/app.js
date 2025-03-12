document.addEventListener("DOMContentLoaded", function() {
        // definimos los arregleos con las palabras.

        let item1 = ["Mi perro ", "Una iguana ", "Un alien ", "Elion Musk ", "Un meteorito "];
        let item2 = ["se comió ", "exterminó ", "atemorizó ", "orinó ", "aspiró "] ;
        let item3 = ["los apuntes ", "la bicicleta " , "el ordenador " , "la mesa " , "la puerta "] ;
        let item4 = ["súbitamente.", "esta mañana." , "en el salón de estar." , "de forma inquietante."] ;

        //funcion par seleccionar los items random.
        let rand1 = Math.floor(Math.random() * item1.length) ;
        let rand2 = Math.floor(Math.random() * item2.length) ;
        let rand3 = Math.floor(Math.random() * item3.length) ;
        let rand4 = Math.floor(Math.random() * item4.length) ;



        //escribibos en la etiqueta del id excusa.
        document.querySelector("#excusa").innerHTML = item1[rand1] + item2[rand2] + item3[rand3] + item4[rand4] ;


    }
)
