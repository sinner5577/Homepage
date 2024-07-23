$(document).ready(function() {
    $(".toggle").click(function() {
        var sidebar = $("#sidebar");
        var main = $("#main");
        var header = $("header");
        var left = parseInt(sidebar.css("left"));

        if (left < 0) {
            sidebar.animate({
                left: '0px'
            }, 500);
            main.animate({
                marginLeft: '200px'
            }, 500);
            header.animate({
                marginLeft: '200px'
            }, 500);
            
        } else {
            sidebar.animate({
                left: '-200px'
            }, 500);
            main.animate({
                marginLeft: '0px'
            }, 500);
            header.animate({
                marginLeft: '0px'
            }, 500);
            
        }
    });

    $(".closebtn").click(function() {
        var sidebar = $("#sidebar");
        var main = $("#main");
        sidebar.animate({
            left: '-200px'
        }, 500);
        main.animate({
            marginLeft: '0px'
        }, 500);
    });

    $("#suchfeld").on('input', function () {
        sucheSportart();
    });

    $(".uebungen-tabelle-item").click(function () {
        var title = $(this).find("h3").text();
        var description = $(this).find(".uebungsbeschreibung").html();
        var imageSrc = $(this).find("img").attr("src");

        $("#myModal .modal-title").text(title);
        $("#myModal .modal-body").html(description + '<img src="' + imageSrc + '" class="detail-bild">');
        $("#myModal").modal('show');
    });

    function sucheSportart() {
        var suchbegriff = $("#suchfeld").val().toLowerCase();
        $(".uebungen-tabelle-item").each(function () {
            var titel = $(this).find('h3').text().toLowerCase();
            var beschreibung = $(this).find('.uebungsbeschreibung p').text().toLowerCase();

            if (titel.includes(suchbegriff) || beschreibung.includes(suchbegriff)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
});
function Sportarten() {
    window.open("/Finder/Sportarten.html", "_self");
}

function Übungen() {
    window.open("/Finder/Uebungen.html", "_self");
}

function Home() {
    window.open("/index.html", "_self");
}

function Mitwirken() {
    window.open("/Finder/Mitwirken.html", "_self");
}

function Kontakt() {
    window.open("/Finder/Kontakt.html", "_self");
}

function Impressum() {
    window.open("/Finder/Impressum.html", "_self");
}

function Alter_1113() {
    window.open("/Finder/Alter_1113.html", "_self");
}

function Alter_1416() {
    window.open("/Finder/Alter_1416.html", "_self");
}

function Alter_1719() {
    window.open("/Finder/Alter_1719.html", "_self");
}


$(document).ready(function() {
   

    $(".Denken5").click(function () {
        window.open("../Finder/Übungen5-7/Denken5-7.html", "_self");
    });

    $(".Laufen5").click(function () {
        window.open("../Finder/Übungen5-7/Laufen5-7.html", "_self");
    });

    $(".Entspannung5").click(function () {
        window.open("../Finder/Übungen5-7/Entspannung5-7.html", "_self");
    });

   

    $(".Denken8").click(function () {
        window.open("../Finder/Übungen8-10/Denken8-10.html", "_self");
    });

    $(".Laufen8").click(function () {
        window.open("../Finder/Übungen8-10/Laufen8-10.html", "_self");
    });

    $(".Entspannung8").click(function () {
        window.open("../Finder/Übungen8-10/Entspannung8-10.html", "_self");
    });

   

    $(".Denken11").click(function () {
        window.open("../Finder/Übungen11-13/Denken11-13.html", "_self");
    });

    $(".Laufen11").click(function () {
        window.open("../Finder/Übungen11-13/Laufen11-13.html", "_self");
    });

    $(".Entspannung11").click(function () {
        window.open("../Finder/Übungen11-13/Entspannung11-13.html", "_self");
    });
});


