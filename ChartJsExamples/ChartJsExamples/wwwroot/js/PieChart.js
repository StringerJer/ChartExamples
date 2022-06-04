(
    async function getPieChart() {
        let apiData = await getApiData();
        const branches = apiData.map(o => o.branch);
        const revenues2020 = apiData.map(o => o.revenue2020);
        const revenues2019 = apiData.map(o => o.revenue2019);
        const revenues2018 = apiData.map(o => o.revenue2018);
        const colorPool = ["purple", "red", "green", "yellow", "blue"]

        const ctx3 = document.getElementById('myChart3');

        new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: branches,
                datasets: [
                    {
                        backgroundColor: colorPool,
                        label: "Revenue 2018",
                        data: revenues2018
                    },
                    {
                        backgroundColor: colorPool,
                        label: "Revenue 2019",
                        data: revenues2019
                    },
                    {
                        backgroundColor: colorPool,
                        label: "Revenue 2020",
                        data: revenues2020
                    }
                ]
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

        async function getApiData() {
            const apiResult = await fetch("https://chartjsapi.azurewebsites.net/branch/revenues");
            const json = await apiResult.json();
            return json;
        }
    }
)();