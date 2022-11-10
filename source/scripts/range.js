$(".range").slider({
    min: 0,
    max: 15000,
    values: [5000, 10000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        let str = String(ui.values[0]);
        $(".span__range-left").html(str.replace(/(\d{0,2})(\d{3})/g, '$1 $2')+"₽ - ");
        let str2 = String(ui.values[1]);
        $(".span__range-right").html(' '+str2.replace(/(\d{0,2})(\d{3})/g, '$1 $2')+"₽");
    }    
});
let str1 = String($(".range").slider("values", 0));
$(".span__range-left").html(str1.replace(/(\d{0,2})(\d{3})/g, '$1 $2')+"₽ - ");
let str3 = String($(".range").slider("values", 1));
$(".span__range-right").html(str3.replace(/(\d{0,2})(\d{3})/g, '$1 $2')+"₽");
