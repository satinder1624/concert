window.addEventListener("load", function() {

    var firstImage = document.getElementById("firstSlideImg");
    firstImage.addEventListener("click", function() {
        currentSlide(1);
    });

    var secondImage = document.getElementById("secondSlideImg");
    secondImage.addEventListener("click", function() {
        currentSlide(2);
    });

    var thirdImage = document.getElementById("thirdSlideImg");
    thirdImage.addEventListener("click", function() {
        currentSlide(3);
    });

    var slideIndex = 0;
    var slideIndex1 = 1;
    showSlides();
    showSlides1(slideIndex1);

    // Automatic Slide
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 10000); // Change image every 10 seconds
    }

    // Click Slide
    function plusSlides(n) {
        showSlides1(slideIndex1 += n);
    }

    function currentSlide(n) {
        showSlides1(slideIndex1 = n);
    }

    function showSlides1(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex1 = 1 }
        if (n < 1) { slideIndex1 = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex1 - 1].style.display = "block";
        dots[slideIndex1 - 1].className += " active";
    }
    // 

    // Hamburger Menu

    $('[dd-toggle]').on('click', function() {
        var menu_id = $(this).attr('dd-toggle');
        $('#' + menu_id).toggleClass('in');
        $(this).toggleClass('in');
    });


    // Color change when hamburger_speaker open and close
    var firstCheck_speaker = false;
    document.getElementById("spanID_speaker").addEventListener("click", function() {
        firstCheck_speaker ? close_speaker() : open_speaker();
    });

    function open_speaker() {
        document.getElementById("reviewMenuHeading_speaker").style.color = "#1FE1E9";
        firstCheck_speaker = true;
    };

    function close_speaker() {
        document.getElementById("reviewMenuHeading_speaker").style.color = "white";
        firstCheck_speaker = false;
    };

    // Audio Section
    var isPlaying = false;
    var audio = new Audio("music/Mymusic.mp3");
    document.getElementById("CLICK").style.display = "none";

    document.getElementById("here").addEventListener("mouseenter", function() {
        document.getElementById("CLICK").style.display = "display";
    });

    document.getElementById("here").addEventListener("mouseout", function() {
        document.getElementById("CLICK").style.display = "none";
    });

    document.getElementById("here").addEventListener("click", function() {
        isPlaying ? pause() : play();
    });

    function play() {
        audio.play();
        isPlaying = true;
    };

    function pause() {
        audio.pause();
        isPlaying = false;
    };

    //Click cursor
    const cursor = document.querySelector('.cursorType');
    document.getElementById("here").addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
    });


    // Yellow

    document.getElementById("area").addEventListener("mouseenter", function() {
        document.getElementById("REVEAL").style.display = "display";
    });

    document.getElementById("area").addEventListener("mouseout", function() {
        document.getElementById("REVEAL").style.display = "none";
    });

    const cursorDrag = document.querySelector('.dragType');
    document.getElementById("area").addEventListener('mousemove', e => {
        cursorDrag.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
    });

    var firstClick = false;
    if (firstClick) {
        firstClick = false;
    } else {
        document.querySelector('.back').addEventListener("click", function() {
            this.style.background = "transparent";
            document.querySelector('.commomColor').style.color = "#30EAEA";
            document.querySelector('.commomSColor').style.color = "#30EAEA";
            document.getElementById('yellowButoonChange').style.background = "transparent linear-gradient(90deg, #D34848 0%, #5E33D1 100%) 0% 0% no-repeat padding-box";
            document.getElementById('yellowButoonChange').style.color = "white";
        });
        firstClick = true;
    }

    var firstCheck_yellow = false;
    document.getElementById("spanID_yellow").addEventListener("click", function() {
        firstCheck_yellow ? close_row() : open_row();
    });

    function open_row() {
        document.getElementById("yellowHeading").style.color = "#FFB33F";
        firstCheck_yellow = true;
    };

    function close_row() {
        document.getElementById("yellowHeading").style.color = "white";
        firstCheck_yellow = false;
    };

    // Review
    var reviewFirstCheck = false;
    document.getElementById("spanID").addEventListener("click", function() {
        reviewFirstCheck ? close_review() : open_review();
    });

    function open_review() {
        document.getElementById("reviewMenuHeading").style.color = "#1FE1E9";
        reviewFirstCheck = true;
    };

    function close_review() {
        document.getElementById("reviewMenuHeading").style.color = "#FFF";
        reviewFirstCheck = false;
    };
});