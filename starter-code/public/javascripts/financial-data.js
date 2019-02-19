const baseURL = 'http://api.coindesk.com/v1/bpi/historical/close.json';

function drawChart(e){

 // console.log(e, this.id, this.value)
  let startRange = document.getElementById('start').value;
  let endRange= document.getElementById('end').value;
  let url = `${baseURL}?start=${startRange}&end=${endRange}`
  //console.log(startRange, endRange, url)
  axios.get(url).then((res)=>{
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(res.data.bpi),
        datasets: [{
            label: 'Bitcoin Price Index',
            data: Object.values(res.data.bpi),
            borderWidth: 1
        }]
      }
    })
  })
}
                 // For all major browsers, except IE 8 and earlier
document.getElementById('start').addEventListener("change", drawChart);
document.getElementById('end').addEventListener("change", drawChart);

drawChart();
