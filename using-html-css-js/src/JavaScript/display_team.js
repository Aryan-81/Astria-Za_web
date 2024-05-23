
function changeHeading(event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Get the clicked year from the anchor tag's text content
    var clickedYear = event.target.textContent;

    // Update the h2 element with the clicked year
    document.getElementById('teamHeading').textContent = clickedYear;
  }