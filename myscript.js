function mysearch() {
    $("table tbody tr").show()
    $("table tbody tr td:nth-child(3)").filter(":not(:contains('" + ($("#search-grade").val()) + "'))").parent().hide();
    $("table tbody tr td:nth-child(1)").filter(":not(:contains('" + ($("#search-block").val()) + "'))").parent().hide();
    $("table tbody tr td:nth-child(2)").filter(":not(:contains('" + ($("#search-week").val()) + "'))").parent().hide();
    $("table tbody tr td:nth-child(4)").filter(":not(:contains('" + ($("#search-question").val()) + "'))").parent().hide();
}
// $("#search-grade").keyup(search);
// $("#search-block").keyup(search);
// $("#search-week").keyup(search);
// $("#search-question").keyup(search); 
// keyup();//这句一定要有。



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