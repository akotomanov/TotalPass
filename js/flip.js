$(".ico-info").bind("click",function(){
    var $this = $(this);
    var front = $this.parent();
    var back = front.siblings(".pass-back-side");
    var btnDone = back.children("header").children(".btn-done");
    var flipper = front.parent();

    $this.hide();
    btnDone.hide();
    $(flipper).flip({
        direction: "rl",
        speed: 300,
        onEnd: function(){
            front.hide();
            back.show();
            btnDone.show();
        }
    })
    return false;
});

$(".btn-done").bind("click",function(){
    var $this = $(this);
    var back = $this.parent().parent();
    var front = back.siblings(".pass-front-side");
    var icoInfo = front.children(".ico-info");
    var flipper = front.parent();

    $this.hide();
    icoInfo.hide();
    $(flipper).flip({
        direction: "lr",
        speed: 300,
        onEnd: function(){
            back.hide();
            front.show();
            icoInfo.show();
        }
    })
    return false;
});