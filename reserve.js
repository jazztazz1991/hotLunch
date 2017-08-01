$("#add-btn").on("click", function(){
    var newReservation = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        phone: $("#number").val().trim(),
        id: $("#unique-id").val().trim()
      };

    $.post("/api/new", newReservation)
      .done(function(data) {
        console.log(data);
      });
})