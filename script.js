//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    // Get the counter element and increment button
    var counterElement = document.getElementById("counter");
    var incrementBtn = document.getElementById("incrementBtn");

    // Set initial counter value
    var counterValue = 0;
    counterElement.textContent = counterValue;

    // Add click event listener to the increment button
    incrementBtn.addEventListener("click", function () {
        // Display alert with the current counter value before incrementing
        alert("Un-incremented value: " + counterValue);

        // Increment the counter value
        counterValue++;

        // Update the counter element with the new value
        counterElement.textContent = counterValue;
    });
});
