$(document).ready(function){
    $('submitWeather').click(function(){

        var city = $("#city").val();

        if city != ''){

            $.ajax({

                url: 'api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + "&APPID=983483eeba6bf5970c43d8dcf477e9b7",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log(data);

                }
            });
        }else{
            $("#error").html('Field cannot be empty');
        }

        }
    })
}