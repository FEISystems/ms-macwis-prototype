//Absolute positions a footer container to the bottom of it's parent container. Parent container must have position="relative"

var macwis = macwis || {};

macwis.stickyFooter = function (targetElement, options) {
    var parentContainer = $(targetElement).parent();

    //Calculate position top to add to footer.
    function getTopMargin(parentContainer, targetElement) {



        //Add padding-bottom to parent conatiner to make room for the footer.
        var elementHeight = $(targetElement).outerHeight();
        $(parentContainer).css({
            "padding-bottom": elementHeight
        });

        function getParentVisibleHeight(parentContainer) {

            var containerHeight = $(parentContainer).prop('scrollHeight'),
                topOffset = $(parentContainer).scrollTop(),
                bottomOffset = containerHeight - (topOffset + $(parentContainer).height()),
                parentVisibleHeightNoPad = containerHeight - bottomOffset,
                parentContainerPaddingTop = parseInt($(parentContainer).css('padding-top')),
                parentVisibleHeight = parentVisibleHeightNoPad + parentContainerPaddingTop;
            
            return parentVisibleHeight;
        }


        var parentVisibleHeight = getParentVisibleHeight(parentContainer),
            elementHeight = $(targetElement).outerHeight(),
            topMargin = parentVisibleHeight - 35;

        return topMargin;
    }

    //Recalculate and add new position top to footer.
    function pinToBottom(parentContainer, targetElement) {
        var newTopMargin = getTopMargin(parentContainer, targetElement);

        $(targetElement).css({
            "top": newTopMargin
        });
    }


    //Initiate sticky footer.
    pinToBottom(parentContainer, targetElement);
    $(targetElement).show();

    //Re-initiate sticky footer on window resize.
    $(window).on("resize", function () {
        pinToBottom(parentContainer, targetElement);
    });

    //Re-initiate sticky footer on parent container scroll.
    $(parentContainer).on("scroll", function () {
        pinToBottom(parentContainer, targetElement);
    });

};