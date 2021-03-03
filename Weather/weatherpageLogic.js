const city_id = 1337233;
const api_url = 'https://api.openweathermap.org/data/2.5/onecall?lat=24.557663&lon=89.502233&units=metric&exclude=minutely,daily,alerts&appid=d12df384e504558e0a7db7841f96679b'

const temperature = [];
const time = [];

var randomColorGenerator = function () { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};

Chartit();
async function Chartit(){
    await getData();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: time,
        datasets: [{
            label: 'Temperature',
            data: temperature,
//            fill:false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: randomColorGenerator(),
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    callback: function(value, index, values) {
                        return value + '°C';
                    }
                }
            }]
        },
        layout: {
            padding: {
                left: 100,
                right: 100,
                top: 50,
                bottom: 50
            }
        }
    }
 });
}

 async function getData(){
   const response = await fetch(api_url);
   const data = await response.json();
   hourly = data.hourly;
   current = data.current.temp;
   sunrise = data.current.sunrise;
   sunset = data.current.sunset;

   var sunR = new Date(sunrise*1000);
   Rhours = sunR.getHours();
   Rminutes = "0" + sunR.getMinutes();
   Rtime = Rhours + ':' + Rminutes.substr(-2);
   document.getElementById("sunRise").innerHTML=Rtime;

   var sunS = new Date(sunset*1000);
   Shours = (sunS.getHours())%12;
   Sminutes = sunS.getMinutes();
   Stime = Shours + ':'+Sminutes;
   document.getElementById("sunSet").innerHTML=Stime;

   document.getElementById("text").innerHTML = current;

   hourly.forEach(function(item) {
       temperature.push(item.temp);
       var date = new Date((item.dt) * 1000);
       hour = date.getHours();
       if(hour<12){
           let amhour = hour;
           if(amhour == 0) amhour = 12;
           let str = amhour.toString();
           let final = str.concat("AM");
           time.push(final);
       } else{
           let pmhour = hour % 12;
           if(pmhour == 0) pmhour = 12;
           let str = pmhour.toString();
           let final = str.concat("PM");
           time.push(final);
       }
   });
}

getData().catch(error=>{
    console.log('Error!!!');
    console.log(error);
});


