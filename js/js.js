/**
 * Created by MSI on 04.03.2016.
 */

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });
});


function square_equation() {
    var a = document.square.square_a.value;
    var b = document.square.square_b.value;
    var c = document.square.square_c.value;
    var sol = document.getElementById("square_sol");

    var d = b * b - 4 * a * c;
    if ( d < 0 ) {
        string = "a pair of complex conjugate roots<br>x<sub>1</sub> = (";
        string += - b / ( 2 * a );
        string += ", ";
        string += Math.sqrt( -d ) / ( 2 * a );
        string += "), x<sub>2</sub> = (";
        string += - b / ( 2 * a);
        string += ", ";
        string += - Math.sqrt( -d ) / ( 2 * a );
        string += ").";
    } else {
        if ( d == 0 ) {
            string = "two equal real roots:<br>x<sub>1</sub> = x<sub>2</sub> = ";
            string += -b / ( 2 * a );
            string += ".";
        } else {
            string = "two different real roots:<br>x<sub>1</sub> = ";
            string += -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
            string += ", x<sub>2</sub> = ";
            string += -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
            string += ".";
        }
    }
    sol.innerHTML = string;
}