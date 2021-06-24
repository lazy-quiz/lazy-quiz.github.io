function delay(fn, ms) {
    let timer = 0
    return function(...args) {
      clearTimeout(timer)
      timer = setTimeout(fn.bind(this, ...args), ms || 0)
    }
  }

function mysearch() {
    
    $("table tbody tr").show()
    var grade = $("#search-grade").val()
    // var block = $("#search-block").val()
    var week = $("#search-week").val()
    var question = $("#search-question").val()
    if (grade) {
    $("table tbody tr td:nth-child(3)").filter(":not(:contains('" + grade + "'))").parent().hide();}
    // if (block) {
    // $("table tbody tr td:nth-child(1)").filter(":not(:contains('" + block + "'))").parent().hide();}
    if (week) {
    $("table tbody tr td:nth-child(2)").filter(":not(:contains('" + week + "'))").parent().hide();}
    if (question) {
    $("table tbody tr td:nth-child(4)").filter(":not(:contains('" + question + "'))").parent().hide();}
}

$(document).ready(function () {
    $("#search-grade").keyup(delay(mysearch,500));
    $("#search-block").keyup(delay(mysearch,500));
    $("#search-week").keyup(delay(mysearch,500));
    $("#search-question").keyup(delay(mysearch,500));
    // keyup();//这句一定要有。
})






// //在每一个footer单元格中添加一个input输入框
// $('#myTable thead th').each(function () {
//     var title = $(this).text();
//     $(this).html(title +'<br><input type="text" placeholder="Search ' + title + '" />');
// });

// //获取DataTable对象
// var table = $('#myTable').DataTable({
//     "searching":true,
//     "ordering":false,

// });

// //根据footer输入框的内容进行搜索
// table.columns().every(function () {
//     var that = this;
//     $('input', this.header()).on('keyup change', function () {
//         if (that.search() !== this.value) {
//             that
//                 .search(this.value)
//                 .draw();
//         }
//     });
// });