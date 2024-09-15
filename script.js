// Sample log data
const logs = [
    { timestamp: "2024-06-29T12:00:00Z", event: "Login attempt failed", source: "Firewall" },
    { timestamp: "2024-06-29T12:05:00Z", event: "Malware detected", source: "Antivirus" },
    { timestamp: "2024-06-29T12:10:00Z", event: "Unauthorized access", source: "IDS" },
    // Add more log entries as needed
];

// Function to display logs
function displayLogs(logs) {
    const logList = document.getElementById('log-list');
    logs.forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.classList.add('log-entry');
        logEntry.innerText = `[${log.timestamp}] ${log.event} - ${log.source}`;
        logList.appendChild(logEntry);
    });
}

// Sample data for chart
const eventData = {
    labels: ['Login Attempts', 'Malware', 'Unauthorized Access'],
    datasets: [{
        label: 'Security Events',
        data: [12, 19, 3], // Example data, replace with actual data
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

// Function to create chart
function createChart() {
    const ctx = document.getElementById('eventChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: eventData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    displayLogs(logs);
    createChart();
});
