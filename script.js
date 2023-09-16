// Simulated visit tracking (replace with actual tracking logic)
let visitCount = 0;

// Function to update and display the visit count
function updateVisitCount() {
    visitCount++;
    document.getElementById('visit-count').textContent = visitCount;
}

// Call the updateVisitCount function when the page loads
window.onload = updateVisitCount;
