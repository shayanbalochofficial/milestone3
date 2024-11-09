document.addEventListener("DOMContentLoaded", function () {
  function buildResume() {
    var name = document.getElementById("name")
      ? document.getElementById("name").value
      : "";
    var email = document.getElementById("email")
      ? document.getElementById("email").value
      : "";
    var phone = document.getElementById("phone")
      ? document.getElementById("phone").value
      : "";
    var address = document.getElementById("address")
      ? document.getElementById("address").value
      : "";
    var dob = document.getElementById("dob")
      ? document.getElementById("dob").value
      : "";
    var nationality = document.getElementById("nationality")
      ? document.getElementById("nationality").value
      : "";

    // Gender selection with null check
    var genderElement = document.querySelector('input[name="gender"]:checked');
    var gender = genderElement ? genderElement.value : "Not Specified";

    var education = document.getElementById("education")
      ? document.getElementById("education").value
      : "";
    var experience = document.getElementById("experience")
      ? document.getElementById("experience").value
      : "";
    var skills = document.getElementById("skills")
      ? document.getElementById("skills").value
      : "";

    // Profile picture handling with null check
    var profilePicInput = document.getElementById("profilePic");
    var resumePic = document.createElement("img");
    resumePic.style.width = "150px";
    resumePic.style.height = "auto";
    resumePic.style.borderRadius = "50%";
    resumePic.style.marginBottom = "10px";
    resumePic.style.objectFit = "cover";

    if (profilePicInput && profilePicInput.files && profilePicInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        resumePic.src = e.target.result;
        document.getElementById("resume").prepend(resumePic);
      };
      reader.readAsDataURL(profilePicInput.files[0]);
    } else {
      resumePic.style.display = "none";
    }

    // Build resume HTML
    var resumeHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Nationality:</strong> ${nationality}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;

    var resumeElement = document.getElementById("resume");
    resumeElement.innerHTML = resumeHTML;
    resumeElement.style.animation = "slideInFromRight 0.5s ease-out";
    resumeElement.style.color = "Black";
  }

  // Add event listener to the button
  document
    .querySelector('button[type="button"]')
    .addEventListener("click", buildResume);
});
