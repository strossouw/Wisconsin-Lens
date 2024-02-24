document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById("photoForm");

  // Get the button that opens the modal
  var btn = document.getElementById("submitPhotoBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Handle form submission
  document.getElementById("photoSubmissionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById("name").value;
    var photoLink = document.getElementById("photoLink").value;
    var description = document.getElementById("description").value;

    // Send email 
    var mailtoLink = "mailto:srossouw@uwm.edu" +
                     "?subject=New Photo Submission" +
                     "&body=Name: " + encodeURIComponent(name) +
                     "%0D%0APhoto Link: " + encodeURIComponent(photoLink) +
                     "%0D%0ADescription: " + encodeURIComponent(description);

    window.location.href = mailtoLink; // Open default email client with pre-filled details
  });
});