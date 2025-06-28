const API_KEY = "AIzaSyCFtlUTd3FJ9PPPo9IxebNc3lJqd1B_a-0"
const CHANNEL_ID = "UCKnMLdK7r4tlbH38heG8lUg"

// Construct the API URL
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

// Fetch subscriber data
fetch(url)
  .then(response => response.json())
  .then(data => {
    const subCount = data.items[0].statistics.subscriberCount;
    document.getElementById("subcount").textContent = Number(subCount).toLocaleString()
    console.log(subCount)
  })
  .catch(error => {
    console.error("Error fetching subscriber data:", error);
    document.getElementById("subcount").textContent = "Failed to load";
  });
  
