 $(".burger").on("click", function() {
            $("header>nav ul").toggleClass("navActive");
            $(".burger").toggleClass("active");
        })