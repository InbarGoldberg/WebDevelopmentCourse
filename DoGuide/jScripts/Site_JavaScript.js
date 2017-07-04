

function replace(dogNum) {
    document.getElementById('dog1').src = "images/" + dogNum + ".png";
    if (dogNum == 1) {

        //ברירת מחדל
        document.getElementById('p1').innerText = "בחרו את השלב המתאים לכם כמגדלי גורי נחייה כדי להתחיל";
        document.getElementById('h11').hidden = false;
        document.getElementById('p1').style.marginTop = "0";
        document.getElementById('p1').style.marginLeft = "0";

        $('#bone').removeClass('dog-icons-hover');
        $('#food').removeClass('dog-icons-hover');
        $('#home').removeClass('dog-icons-hover');
        $('#collar').removeClass('dog-icons-hover');
        $('#arrow1').removeClass('dog-icons-hover');
        $('#arrow2').removeClass('dog-icons-hover');
        $('#arrow3').removeClass('dog-icons-hover');
        $('#arrow4').removeClass('dog-icons-hover');

    }

    if (dogNum == 2) {
        //מעבר עצם
        document.getElementById('p1').innerText = "אז אתם רוצים לגדל אחד כמוני? בואו נראה אם אתם מתאימים!";
        document.getElementById('h11').hidden = "hidden";
        document.getElementById('p1').style.marginTop = "30px";
        document.getElementById('p1').style.marginLeft = "20px";
        $('#food').addClass('dog-icons-hover');
        $('#home').addClass('dog-icons-hover');
        $('#collar').addClass('dog-icons-hover');
        $('#arrow2').addClass('dog-icons-hover');
        $('#arrow3').addClass('dog-icons-hover');
        $('#arrow4').addClass('dog-icons-hover');

    }

    if (dogNum == 3) {
        //מעבר אוכל
        document.getElementById('p1').innerText = "החלטתם לאמץ? מזל טוב! כמה דברים שחשוב שתדעו לפני שאני מגיע אליכם";
        document.getElementById('h11').hidden = "hidden";
        document.getElementById('p1').style.marginTop = "30px";
        $('#bone').addClass('dog-icons-hover');
        $('#home').addClass('dog-icons-hover');
        $('#collar').addClass('dog-icons-hover');
        $('#arrow1').addClass('dog-icons-hover');
        $('#arrow3').addClass('dog-icons-hover');
        $('#arrow4').addClass('dog-icons-hover');
    }

    if (dogNum == 4) { //מעבר מלונה 

        document.getElementById('p1').innerText = "אנחנו ידועים כאכלנים לא קטנים, ואף פעם לא נאמר לא לאוכל ולממתקים. כדאי שתזכרו את זה!";
        document.getElementById('h11').hidden = "hidden";
        document.getElementById('p1').style.marginTop = "20px";
        $('#bone').addClass('dog-icons-hover');
        $('#food').addClass('dog-icons-hover');
        $('#collar').addClass('dog-icons-hover');
        $('#arrow1').addClass('dog-icons-hover');
        $('#arrow2').addClass('dog-icons-hover');
        $('#arrow4').addClass('dog-icons-hover');
    }

    if (dogNum == 5) { //מעבר קולר
        document.getElementById('p1').innerText = "אתם חמודים והכל, אבל הגיע הזמן שאתחיל למלא את תפקידי נאמנה!";
        document.getElementById('h11').hidden = "hidden";
        document.getElementById('p1').style.marginTop = "20px";
        $('#bone').addClass('dog-icons-hover');
        $('#food').addClass('dog-icons-hover');
        $('#home').addClass('dog-icons-hover');
        $('#arrow1').addClass('dog-icons-hover');
        $('#arrow2').addClass('dog-icons-hover');
        $('#arrow3').addClass('dog-icons-hover');

       
    }

}



var num = 108; 

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');

    } else {
        $('.menu').removeClass('fixed');
    }
});


var $window = $(window);
$window.on("scroll", function (e) {

    

    if ($window.scrollTop() > $("#doifitDiv").offset().top) {
       
        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('unActiveAndHover');
        $('#doifitA').addClass('activeAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    else {
      
        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    if ($window.scrollTop() > $("#beforeAdoptingDiv").offset().top) {
     

        $('#beforeAdoptingA').removeClass('unActiveAndHover');
        $('#beforeAdoptingA').addClass('activeAndHover');
        $('#duringA').removeClass('activeAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').removeClass('activeAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    if ($window.scrollTop() > $("#duringDiv").offset().top) {
      
        $('#beforeAdoptingA').removeClass('activeAndHover');
        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').removeClass('unActiveAndHover');
        $('#duringA').addClass('activeAndHover');
        $('#afterA').removeClass('activeAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    if ($window.scrollTop() > $("#afterDiv").offset().top) {
      
        $('#beforeAdoptingA').removeClass('activeAndHover');
        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').removeClass('activeAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').removeClass('unActiveAndHover');
        $('#afterA').addClass('activeAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('activeAndHover');
        $('#contactA').addClass('unActiveAndHover');
    }

    if ($window.scrollTop() > $("#contactDiv").offset().top) {
      
        $('#beforeAdoptingA').removeClass('activeAndHover');
        $('#beforeAdoptingA').addClass('unActiveAndHover');
        $('#duringA').removeClass('activeAndHover');
        $('#duringA').addClass('unActiveAndHover');
        $('#afterA').removeClass('activeAndHover');
        $('#afterA').addClass('unActiveAndHover');
        $('#doifitA').removeClass('activeAndHover');
        $('#doifitA').addClass('unActiveAndHover');
        $('#contactA').removeClass('unActiveAndHover');
        $('#contactA').addClass('activeAndHover');
    }

});


function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");
   
     for(var i = 0, len = navA.length; i < len; i++){
       navA[i].addEventListener("focus",function(event) {
       var innerUl = event.target.parentElement.querySelector("ul")
           if(innerUl) innerUl.style.display = "block";
      }, true);
     }
      
       for(var i = 0, len = navInner.length; i < len; i++){
         if(navInner[i].parentElement.nextElementSibling === null){
           navInner[i].addEventListener("blur",function(event) {
               event.target.parentElement.parentElement.style.display = "none";
           },true);
         }
       }
  }


