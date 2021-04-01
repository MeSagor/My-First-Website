var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var t1 = [];
var final = [];
var date = [];

Go();

async function getData(){
const response = await fetch("https://corona.lmao.ninja/v2/historical/Bangladesh?lastdays=800", requestOptions);
const result = await response.json();
    for (let x in result.timeline.cases) {
      t1.push(result.timeline.cases[x]);
      date.push(x);
   }
   var nd = 0;
   var d = 0
    for (let x in result.timeline.deaths) {
      nd = result.timeline.deaths[x] - d;
      d = result.timeline.deaths[x]
   }
   document.getElementById("newAffected").innerHTML = t1[t1.length-1] - t1[t1.length-2];
   document.getElementById("newDeath").innerHTML = nd;
}
getData().catch(error=>{
    console.log('Error!!!');
    console.log(error);
});

var randomColorGenerator = function () { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};

async function Go(){
 t1.length=0;
 final.length=0;
 date.length=0;
 await getData();

  var s = 0;
  for(let i = 0; i < t1.length; i++){
      final.push(t1[i]-s);
      s = t1[i];
  }
 
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: date,
        datasets: [{
            label: 'Affected History',
            data: final,
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: randomColorGenerator(),
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    maxTicksLimit: 20
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