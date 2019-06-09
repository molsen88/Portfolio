window.onload = function () {
    Particles.init( {
        selector: '.background'
    } );
};
document.addEventListener( 'DOMContentLoaded', function () {
    var elems = document.querySelectorAll( 'h4' );
    var instances = M.Sidenav.init( elems, instances );
} );