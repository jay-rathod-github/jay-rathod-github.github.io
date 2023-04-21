(function() {
    var follower, init, mouseX, mouseY, positionElement, printout, timer;
  
    follower = document.getElementById('follower');
  
    printout = document.getElementById('printout');
  
    mouseX = (event) => {
      return event.clientX;
    };
  
    mouseY = (event) => {
      return event.clientY;
    };
  
    positionElement = (event) => {
      var mouse;
      mouse = {
        x: mouseX(event),
        y: mouseY(event)
      };
      follower.style.top = mouse.y + 'px';
      return follower.style.left = mouse.x + 'px';
    };
  
    timer = false;
  
    window.onmousemove = init = (event) => {
      var _event;
      _event = event;
      return timer = setTimeout(() => {
        return positionElement(_event);
      }, 1);
    };
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxlQUFBLEVBQUEsUUFBQSxFQUFBOztFQUFBLFFBQUEsR0FBVyxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4Qjs7RUFDWCxRQUFBLEdBQVcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEI7O0VBRVgsTUFBQSxHQUFTLENBQUMsS0FBRCxDQUFBLEdBQUE7QUFDUCxXQUFPLEtBQUssQ0FBQztFQUROOztFQUdULE1BQUEsR0FBUyxDQUFDLEtBQUQsQ0FBQSxHQUFBO0FBQ1AsV0FBTyxLQUFLLENBQUM7RUFETjs7RUFHVCxlQUFBLEdBQWtCLENBQUMsS0FBRCxDQUFBLEdBQUE7QUFDbEIsUUFBQTtJQUFFLEtBQUEsR0FBUTtNQUNOLENBQUEsRUFBRyxNQUFBLENBQU8sS0FBUCxDQURHO01BRU4sQ0FBQSxFQUFHLE1BQUEsQ0FBTyxLQUFQO0lBRkc7SUFJUixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQWYsR0FBcUIsS0FBSyxDQUFDLENBQU4sR0FBVTtXQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLElBQWYsR0FBc0IsS0FBSyxDQUFDLENBQU4sR0FBVTtFQU5oQjs7RUFRbEIsS0FBQSxHQUFROztFQUNSLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLElBQUEsR0FBTyxDQUFDLEtBQUQsQ0FBQSxHQUFBO0FBQzVCLFFBQUE7SUFBRSxNQUFBLEdBQVM7V0FDVCxLQUFBLEdBQVEsVUFBQSxDQUFXLENBQUEsQ0FBQSxHQUFBO2FBQ2pCLGVBQUEsQ0FBZ0IsTUFBaEI7SUFEaUIsQ0FBWCxFQUVOLENBRk07RUFGa0I7QUFsQjVCIiwic291cmNlc0NvbnRlbnQiOlsiZm9sbG93ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sbG93ZXInKVxucHJpbnRvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbnRvdXQnKVxuXG5tb3VzZVggPSAoZXZlbnQpID0+XG4gIHJldHVybiBldmVudC5jbGllbnRYXG5cbm1vdXNlWSA9IChldmVudCkgPT5cbiAgcmV0dXJuIGV2ZW50LmNsaWVudFlcblxucG9zaXRpb25FbGVtZW50ID0gKGV2ZW50KSA9PlxuICBtb3VzZSA9IHtcbiAgICB4OiBtb3VzZVgoZXZlbnQpXG4gICAgeTogbW91c2VZKGV2ZW50KVxuICB9XG4gIGZvbGxvd2VyLnN0eWxlLnRvcCA9IG1vdXNlLnkgKyAncHgnXG4gIGZvbGxvd2VyLnN0eWxlLmxlZnQgPSBtb3VzZS54ICsgJ3B4J1xuXG50aW1lciA9IGZhbHNlXG53aW5kb3cub25tb3VzZW1vdmUgPSBpbml0ID0gKGV2ZW50KSA9PlxuICBfZXZlbnQgPSBldmVudFxuICB0aW1lciA9IHNldFRpbWVvdXQgPT5cbiAgICBwb3NpdGlvbkVsZW1lbnQoX2V2ZW50KVxuICAsIDEiXX0=
  //# sourceURL=coffeescript

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Back-end developer working in Spring boot",],
        typeSpeed: 30,
        backSpeed: 20,
        loop: true
    });

    // var typed = new Typed(".typing-2", {
    //   strings: ["Skilled backend developer with 2 years of experience in developing scalable and efficient applications using Spring Boot framework. At Simform Solutions, I have designed and implemented RESTful APIs, integrated with various third-party services, and maintained robust codebases to support mission-critical business operations. I am passionate about delivering high-quality software solutions that meet business requirements and strive to continuously improve my skills and knowledge in the ever-evolving technology landscape."],
    //   typeSpeed: 10,
    //   backSpeed: 5,
    //   loop: false,


     
    //   preStringTyped: function() {
    //     var element = document.querySelector(".typing-2");
    //     element.style.background = "-webkit-linear-gradient(right, crimson, white)";
    //     element.style.webkitBackgroundClip = "text";
    //     element.style.webkitTextFillColor = "transparent";
    //   }
      
      
    // });
    

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//mouse pointer code

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})



//  puppy eyeball movement code
// let eyeBall = document.querySelector(".eyeball"),
//     Lpupil = document.querySelector(".l-pupil"),
//     Rpupil = document.querySelector(".r-pupil"),
//     eyeArea = eyeBall.getBoundingClientRect(),
//     LpupilArea = Lpupil.getBoundingClientRect(),
//     RpupilArea = Rpupil.getBoundingClientRect(),
//     R = eyeArea.width/2,
//     rL = LpupilArea.width/2,
//     rR = RpupilArea.width/2,
//     centerX = eyeArea.left + R,
//     centerY = eyeArea.top + R;
// console.log(eyeArea, centerX, centerY);

// document.addEventListener("mousemove", (e)=>{
//   let x = e.clientX - centerX,
//       y = e.clientY - centerY,
//       theta = Math.atan2(y,x),
//       angle = theta*180/Math.PI + 360;
  
  
//   Lpupil.style.transform = `translateX(10px) rotate(${angle + "deg"})`;
//   Rpupil.style.transform = `translateX(7px) rotate(${angle + "deg"})`;
//   // pupil.style.transformOrigin = `10px center`;
// });

