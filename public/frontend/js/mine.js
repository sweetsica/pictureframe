$('#options-type li').click(() => {
    $('#options-type li').removeClass('selected');
    console.log($(this));
    $(this).addClass('selected');
});

$(document).on("click", "#options-type li", function () {
    $("#options-type li").removeClass("selected");
    $(this).addClass("selected");
    console.log($("#options-type li"));
    $("#options-type li").each(function (index) {
        const name = `${$(this).attr('data-value')}`;
        console.log(name);
        // $("section#images").removeClass(className);
        // $("section#images").addClass(`size-${size}`);
    });
});

$(document).on("click", "#options-size li", function () {
    $("#options-size li").removeClass("selected");
    $(this).addClass("selected");
    var size = $(this).attr('data-value');
    $("#options-size li").each(function (index) {
        const className = `size-${$(this).attr('data-value')}`;
        $("section#images").removeClass(className);
        $("section#images").addClass(`size-${size}`);
    });
});

$(document).on("click", "#options-depth li", function () {
    $("#options-depth li").removeClass("selected");
    $(this).addClass("selected");
    console.log($(this));
});