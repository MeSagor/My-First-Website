var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var t1 = [];
var t2 = [];
var t3 = [];
var Afinal = [];
var Dfinal = [];
var Rfinal = [];
var date = [];

Go();

async function getData(){
const response = await fetch("https://corona.lmao.ninja/v2/historical/Bangladesh?lastdays=800", requestOptions);
const result = await response.json();
    for (let x in result.timeline.cases) {
      t1.push(result.timeline.cases[x]);
      date.push(x);
    }
    for (let x in result.timeline.deaths) {
      t2.push(result.timeline.deaths[x]);
    }
    for (let x in result.timeline.recovered) {
      t3.push(result.timeline.recovered[x]);
    }
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
 t2.length=0;
 t3.length=0;
 Afinal.length=0;
 Dfinal.length=0;
 Rfinal.length=0;
 date.length=0;
 
 await getData();
 
   document.getElementById("newAffected").innerHTML = t1[t1.length-1] - t1[t1.length-2];
   document.getElementById("newDeath").innerHTML = t2[t2.length-1] - t2[t2.length-2];
   document.getElementById("newRecovery").innerHTML = t3[t3.length-1] - t3[t3.length-2];
   
  var s = 0;
  for(let i = 0; i < t1.length; i++){
      Afinal.push(t1[i]-s);
      s = t1[i];
  }
  var ss = 0;
  for(let i = 0; i < t2.length; i++){
      Dfinal.push(t2[i]-ss);
      ss = t2[i];
  }
  var sss = 0;
  for(let i = 0; i < t3.length; i++){
      Rfinal.push(t3[i]-sss);
      sss = t3[i];
  }
 
  var ctx = document.getElementById('myChartA').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: date,
        datasets: [{
            label: 'Affected History',
            data: Afinal,
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

 var ctx = document.getElementById('myChartD').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: date,
        datasets: [{
            label: 'Death History',
            data: Dfinal,
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

 var ctx = document.getElementById('myChartR').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: date,
        datasets: [{
            label: 'Recovery History',
            data: Rfinal,
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