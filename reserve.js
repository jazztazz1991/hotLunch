var currentTables = [];
var waitingList = [];

$("#add-btn").on("click", function(){
    var newReservation = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        phone: $("#number").val().trim(),
        id: $("#unique-id").val().trim()
      };

    
    
    if(currentTables.length < 5){
        currentTables.push(newReservation);
    }else{
        waitingList.push(newReservation);
    }
    
    $.post("/api/new", newReservation)
      .done(function(data) {
        console.log(data);
      });
})