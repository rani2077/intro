
// height:auto

$(".sc-index .group-btn").click(function(){
    $(".sc-index .group-btn").toggleClass("on");
    $(".sc-index .group-btn .btn").toggleClass("on");
    $(".sc-index .group-index").toggleClass("on");

});

let el = $(".sc-index .group-index")
let elLength = el.children(".index").length //애니메이션을 부여할 개체의 자식요소의 갯수
const curHeight = el.children(".index").height()*el.children(".index").length; //자식요소 1개의 높이 * 애니메이션을 부여할 개체의 자식요소 갯수 
console.log(elLength)
$(".sc-index .group-btn").click(function(){
    let nowClass = $(".sc-index .group-index").hasClass("on") 
    if(nowClass){
        el.animate({
            height:curHeight
        },500)    
        console.log("뭐야** 돌려줘요")
    }else{
        console.log("이것이 당신의 클래스입니다")
        el.animate({
            height:0
        },500)
    }
})



// 인덱스 선택
$(".sc-index .index").click(function(e){
    e.preventDefault()
    let filterNum = $(this).data('filter');

    $(".sc-index .index").removeClass("on");
    $(this).addClass("on");

    $(".sc-section.section"+filterNum).addClass("on");
    $(".sc-section").not($(".section"+filterNum)).removeClass("on")

})