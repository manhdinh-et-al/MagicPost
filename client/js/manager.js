// document.getElementById("list__1--title").addEventListener('click',function(){
//     var list1 = document.querySelector('.list__1');
//     list1.classList.toggle("show");
// });

// document.getElementById("list__1--icon").addEventListener('click',function(){
//     var list1 = document.querySelector('.list__1');
//     list1.classList.toggle("show");
// });
document.getElementById("list__1--title").addEventListener('click',function(){
   document.getElementById("table1").classList.remove("none");
   document.getElementById("piechart-manager").classList.add("none");
});

// document.getElementById("list__1--items-title2").addEventListener('click',function(){
//     var table2 = document.getElementById("table2");
//     table1.classList.add ("none")
//     table2.classList.remove("none");
// });
// document.getElementById("btn--add").addEventListener('click',function(){
//     var form1 = document.getElementById("form__create--user");
//     document.getElementById("change__background").classList.add("change__background");
//     form1.classList.remove("none");
// });
// document.getElementById("form__close").addEventListener('click',function(){
//     var form1 = document.getElementById("form__create--user");
//     document.getElementById("change__background").classList.remove("change__background");
//     form1.classList.add("none");
// });

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-user-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function SomeDeleteRowFunction(o) {
    //no clue what to put here?
    var p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);
   }


   document.getElementById("list__2--title").addEventListener('click',function(){
    document.getElementById("piechart-manager").classList.remove("none");
    var table1 = document.getElementById("table1")
    table1.classList.add("none");

  });



  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Thất bại',     50],
    ['Đã giao',      250],
    ['Thành công',  300],
    
  ]);

  var options = {
    title: 'Thống kê tình trạng giao hàng'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart-manager'));

  chart.draw(data, options);
}