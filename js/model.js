 
var VisModal = document.getElementById('VisModal');
var staffModel = document.getElementById('staffModel');

 
var ModelBtnVis = document.getElementById("ModelBtnVis");
var ModelBtnStaff = document.getElementById("ModelBtnStaff");
 
var span = document.getElementsByClassName("close")[0];
var spanV = document.getElementsByClassName("close")[1];
  
ModelBtnStaff.onclick = function() {
    staffModel.style.display = "block";
}
ModelBtnVis.onclick = function() {
    VisModal.style.display = "block";
}
  
span.onclick = function() {
    staffModel.style.display = "none";
    $(".StaffError").html("");
}
spanV.onclick = function() {
    VisModal.style.display = "none";
    $(".VisError").html("");
}
 