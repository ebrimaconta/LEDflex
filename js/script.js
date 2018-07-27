  $(document).ready(function() {


      $('#submitVis').click(function(e){
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        
        $.ajax({
            type: "POST",
            url: "php/vistor.php",
            dataType: "json",
            data: {name:name, email:email},
            success : function(data){
                if (data.code == "200"){
                 $(".formDetailVis").hide();
                 $(".successVis").html(data.msg);
                 $(".successVis").show();
                } else {
                    $(".error").html(data.msg);
                  
                }
            }
        });

      });

       $('#submitStaff').click(function(e){
        e.preventDefault();
        var passwords =  document.querySelectorAll(".password");
        var arr = [];
        passwords.forEach(function(e) {
            arr.push(e.value);
        }); 
        var joinArr = arr.join("");
        if(joinArr.length !== 4){
             $(".StaffError").html("Please fill all the fields");
        } else{
        console.log(joinArr);
        $.ajax({
            type: "POST",
            url: "php/staff.php",
            dataType: "json",
            data: {pin:joinArr},
            success : function(data){
                if (data.code == "200"){
                    $(".formDetailStaff").hide();
                    $(".successStaff").css('display','block');
                    $(".nameFrmDb").html("<h1> &nbsp;"+data.msg+" </h1>");
  

                } else {
                    $(".StaffError").html(data.msg);
                  
                }
            }
        });


        }
        $(".Arrived").click(function(){
            $(".Leaving").hide();
            $(".Arrived").hide();
            $(".EYD").show();
            $(".circleForm").css('background-color','#39c680');
        });
        $(".Leaving").click(function(){
            $(".Leaving").hide();
            $(".Arrived").hide();
            $(".EYD").show();
            $(".circleForm").css('background-color','#39c680');

        });
      });

  });