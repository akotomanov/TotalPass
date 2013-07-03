$(".ico-info").bind("click",function(){
    var $this = $(this);
    var front = $this.parent();
    var back = front.siblings(".pass-back-side");
    var btnBack = back.children(".btn-back");
    var flipper = front.parent();

    $this.hide();
    btnBack.hide();
    $(flipper).flip({
        direction: "rl",
        onEnd: function(){
            front.hide();
            back.show();
            btnBack.show();
        }
    })
    return false;
});

$(".btn-back").bind("click",function(){
    var $this = $(this);
    var back = $this.parent();
    var front = back.siblings(".pass-front-side");
    var icoInfo = front.children(".ico-info");
    var flipper = front.parent();

    $this.hide();
    icoInfo.hide();
    $(flipper).flip({
        direction: "lr",
        onEnd: function(){
            back.hide();
            front.show();
            icoInfo.show();
        }
    })
    return false;
});