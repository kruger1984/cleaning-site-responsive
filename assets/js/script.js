
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


/**
 * ******************
 *    MENU
 * ******************
 * 
 */

let btnOpenMenu = document.querySelector('#openMenu');
let btnCloseMenu = document.querySelector('#closeMenu');

    btnOpenMenu.onclick = function(e) {
        e.preventDefault();
        let sidebarMenu = document.querySelector('.sidebar-menu');
        //console.log(sidebarMenu);
        sidebarMenu.classList.add('opened');
        $('html, body').css('overflow', 'hidden'); // відключення скрола
    }

    btnCloseMenu.onclick = function(e) {
        e.preventDefault();
        let sidebarMenu = document.querySelector('.sidebar-menu');
        sidebarMenu.classList.remove('opened');
        $('html, body').css('overflow', ''); // включення скролла
    }

/**
 *  ********************************************************
 *      Функція яка закриває меню при натисканні не на меню
 */
    $(function($){
      $(document).mouseup( function(e){ 
        var div = $( ".sidebar-menu" ); 
        if ( !div.is(e.target) // якщо клік не по меню
            && div.has(e.target).length === 0 ) { // та не по його дочірнім елементам
          div.removeClass('opened'); 
          $('html, body').css('overflow', '');
        }
      });
    });
/**
 *    Slider
 */

// let sliderNav = document.querySelectorAll('.slider-nav li');

// for(let i = 0; i < sliderNav.length; i++) {

//   sliderNav[i].onclick = function(e) {
//     e.preventDefault();
//     document.querySelector('.slider-nav li.active').classList.remove('active');
//     document.querySelector('.slider-item.active').classList.remove('active');
//     e.target.classList.add('active');
//     let id = e.target.dataset.id;

//     document.querySelector('.slider-item[data-id="' + id + '"]').classList.add('active');

//   }
// }


/**
 * 1.Видалити клас active у інших елементів
 * 2. Додати клас active елементу по якому клікнули
 * 3. Отримати дата id і знайти слайд з необхідним data id
 * 4. Видалити клас active у слайдера
 * 5. Додайте клас active елементу з data id
 */
// if ($('.slider-nav li').hasClass('active')){
  
// }



$('.slider-nav li').on('click', function(e){
  e.preventDefault();
  let id = $(this).data('id');
  let clickedItem = $('.slider-nav li[data-id="' + id + '"]');


  if(clickedItem.hasClass('active') == false){
    $('.slider-nav li.active').removeClass('active');
  
    $('.slider-item.active').fadeOut(200, function() {
        $(this).removeClass('active');
        clickedItem.addClass('active');
        $('.slider-item[data-id="' + id + '"]').fadeIn("slow", function(){
            $(this).addClass('active');
        })
    })
  }
   
});