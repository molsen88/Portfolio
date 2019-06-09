window.onload = function () {
    Particles.init( {
        selector: '.background'
    } );
};
document.addEventListener( 'DOMContentLoaded', function () {
    var elems = document.querySelectorAll( '.modal' );
    var instances = M.Modal.init( elems, instances );
} );