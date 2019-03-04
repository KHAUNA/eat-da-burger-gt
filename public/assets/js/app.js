$("#add-burger").on("click", function(){
    event.preventDefault();
    var burgerName = $('input[name=burger_name]').val();
  alert(burgerName);

    $.ajax({
        url: "/add",
        method: POST,
        data: {
            burger_name: burgerName
        }
    }).then(function(){
        alert("burger added");
    }).catch(function(){
        console.log(" app.js no burger added");
    });
});

$(".eat").on("click", function(){
    
})