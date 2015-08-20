

  var app = {
    server: 'http://127.0.0.1:3000' ,

    init: function(){
        console.log("in inint");
        $(document).on('click', '#submit', function(e){
            e.preventDefault();
            var userReqUrl = $('#userUrl').val();
            console.log(userReqUrl);
            app.send(userReqUrl);
            console.log('submitted');
        });

    },

    send: function(message){
        $.ajax({
            type:'POST',
            url:app.server,
            data:message.toString(),
            contentType: "text/html",
            success:function(data){
                console.log('Success: data sent to server ',data)
            },
            error:function(data){
                console.log('error: on client side ',data)
            }
        })
    },

    // fetch: function(){
    //     $.ajax({
    //         type:'GET',
    //         url:app.server,
    //         data:JSON.stringify(message),
    //         contentType: "text/html",
    //         success:function(data){
    //             console.log('Success: data sent to server ',data)
    //         },
    //         error:function(data){
    //             console.log('error: on client side ',data)
    //         }
    //     })


    // }

//use if not using for action and post
    // handleSubmit: function(e){

    // }

  }
app.init();
console.log("end of file");
