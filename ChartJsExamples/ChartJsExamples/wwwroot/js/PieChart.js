(
    async () => {
        let apiData = await getApiData();
        const branches = apiData.map(o => o.branch);
        const revenues2020 = apiData.map(o => o.revenue2020);
        const revenues2019 = apiData.map(o => o.revenue2019);
        const revenues2018 = apiData.map(o => o.revenue2018);
        const colorPool = ["purple", "red", "green", "yellow", "blue"]

        let listOfCharts = document.getElementsByTagName("canvas"); //.getElementById('myChart3');

        for (canvas of listOfCharts) {
            if (canvas.dataset.year) {
                switch (canvas.dataset.year) {
                    case "2018": createChart(canvas, revenues2018);
                        break;
                    case "2019": createChart(canvas, revenues2019);
                        break;
                    case "2020": createChart(canvas, revenues2020);
                        break;
                    default: break;
                }
            }
        }

        async function getApiData() {
            const apiResult = await fetch("https://chartjsapi.azurewebsites.net/branch/revenues");
            const json = await apiResult.json();
            return json;
        }

        function clickHandler(evt) {

        }

        function createChart(canvas, data) {
            new Chart(canvas, {
                type: 'pie',
                data: {
                    labels: branches,
                    datasets: [{
                        backgroundColor: colorPool,
                        data: data
                    }, {
                            backgroundColor: colorPool,
                            data: data
                        }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "right"
                        }
                    }
                }
            });
        }
    }
)();