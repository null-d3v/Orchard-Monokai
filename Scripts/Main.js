$(function()
{
    var $header = $("#header");
    var $window = $(window);

    var headerHeight = $header.outerHeight();
    var headerY = $header.outerHeight();
    var scrollY = $window.scrollTop();

    $window.scroll(function()
    {
        headerY += scrollY - $window.scrollTop();
        if (headerY > headerHeight)
        {
            headerY = headerHeight;
        }
        else if (headerY < 0)
        {
            headerY = 0;
        }
        $header.css(
        {
            position: "fixed",
            top: headerY - headerHeight,
        });
        scrollY = $window.scrollTop();
    });
});