// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

(
    async () => {
        let apiData = await getApiData();
        const branches = apiData.map(o => o.branch);
        const revenues2020 = apiData.map(o => o.revenue2020);
        const revenues2019 = apiData.map(o => o.revenue2019);
        const revenues2018 = apiData.map(o => o.revenue2018);
        const colorPool = ["purple", "red", "green", "yellow", "blue"]

        const ctx = document.getElementById('myChart');
        const ctx1 = document.getElementById('myChart1');
        const ctx2 = document.getElementById('myChart2');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: branches,
                datasets: [
                    {
                        backgroundColor: "green",
                        label: "Revenue 2018",
                        data: revenues2018
                    },
                    {
                        backgroundColor: "red",
                        label: "Revenue 2019",
                        data: revenues2019
                    },
                    {
                        backgroundColor: "purple",
                        label: "Revenue 2020",
                        data: revenues2020
                    }
                ]
            },
            options: {
                responsive: true
            }
        });

        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: branches,
                datasets: [
                    {
                        backgroundColor: "green",
                        label: "Revenue 2018",
                        data: revenues2018
                    },
                    {
                        backgroundColor: "red",
                        label: "Revenue 2019",
                        data: revenues2019
                    },
                    {
                        backgroundColor: "purple",
                        label: "Revenue 2020",
                        data: revenues2020
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                responsive: true
            }
        });

        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: branches,
                datasets: [
                    {
                        backgroundColor: "green",
                        label: "Revenue 2018",
                        data: revenues2018
                    },
                    {
                        backgroundColor: "red",
                        label: "Revenue 2019",
                        data: revenues2019
                    },
                    {
                        backgroundColor: "purple",
                        label: "Revenue 2020",
                        data: revenues2020
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                responsive: true
            }
        });

        async function getApiData() {
            const apiResult = await fetch("https://chartjsapi.azurewebsites.net/branch/revenues");
            const json = await apiResult.json();
            return json;
        }
    }    
)();