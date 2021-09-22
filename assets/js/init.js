
function init() {
    if(document.body.clientWidth && document.body.clientWidth < 768){
        console.log("The width of the document is " + document.body.clientWidth  + " pixels.");
        var controlKey= document.getElementById('navbarButton');
        if(!controlKey.classList.contains("close-sidebar"))
            controlKey.classList.add('close-sidebar')
    }

}
init();

//------------------------sidebar
function handleMenu(){
    var controlKey= document.getElementById('navbarButton');
    if(controlKey.classList.contains("close-sidebar"))
    {
        controlKey.classList.remove('close-sidebar')
    }else
    controlKey.classList.add('close-sidebar')
}


//------------------------collapse
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, options);
// });
$(document).ready(function(){
    $('.collapsible').collapsible();
});


//------------------------dropdown
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, {constrainWidth:false});
// });

// Or with jQuery

$('.dropdown-trigger').dropdown();


//------------------------select
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
// });

// Or with jQuery

$(document).ready(function(){
    $('select').formSelect();
});
//------------------------modal
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, options);
// });

// Or with jQuery

$(document).ready(function(){
    $('.modal').modal();
});

//------------------------tabs
// var instance = M.Tabs.init(el, options);

// Or with jQuery

$(document).ready(function(){
    $('.tabs').tabs();
});

//------------------------datepicker
$(document).ready(function(){
    $('.datepicker').datepicker();
});
