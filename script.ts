document.addEventListener("DOMContentLoaded", function () {
  function buildResume(): void {
    // Get form values with proper types
    const name: string = document.getElementById("name")
      ? (document.getElementById("name") as HTMLInputElement).value
      : "";
    const email: string = document.getElementById("email")
      ? (document.getElementById("email") as HTMLInputElement).value
      : "";
    const phone: string = document.getElementById("phone")
      ? (document.getElementById("phone") as HTMLInputElement).value
      : "";
    const address: string = document.getElementById("address")
      ? (document.getElementById("address") as HTMLInputElement).value
      : "";
    const dob: string = document.getElementById("dob")
      ? (document.getElementById("dob") as HTMLInputElement).value
      : "";
    const nationality: string = document.getElementById("nationality")
      ? (document.getElementById("nationality") as HTMLInputElement).value
      : "";

    // Gender selection with null check
    const genderElement: HTMLInputElement | null = document.querySelector(
      'input[name="gender"]:checked'
    );
    const gender: string = genderElement
      ? genderElement.value
      : "Not Specified";

    const education: string = document.getElementById("education")
      ? (document.getElementById("education") as HTMLInputElement).value
      : "";
    const experience: string = document.getElementById("experience")
      ? (document.getElementById("experience") as HTMLInputElement).value
      : "";
    const skills: string = document.getElementById("skills")
      ? (document.getElementById("skills") as HTMLInputElement).value
      : "";

    // Profile picture handling with null check
    const profilePicInput: HTMLInputElement | null = document.getElementById(
      "profilePic"
    ) as HTMLInputElement;
    const resumePic: HTMLImageElement = document.createElement("img");
    resumePic.style.width = "150px";
    resumePic.style.height = "auto";
    resumePic.style.borderRadius = "50%";
    resumePic.style.marginBottom = "10px";
    resumePic.style.objectFit = "cover";

    if (profilePicInput && profilePicInput.files && profilePicInput.files[0]) {
      const reader: FileReader = new FileReader();
      reader.onload = function (e: ProgressEvent<FileReader>) {
        resumePic.src = e.target?.result as string;
        document.getElementById("resume")?.prepend(resumePic);
      };
      reader.readAsDataURL(profilePicInput.files[0]);
    } else {
      resumePic.style.display = "none";
    }

    // Build resume HTML
    const resumeHTML: string = `
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

    const resumeElement: HTMLElement | null = document.getElementById("resume");
    if (resumeElement) {
      resumeElement.innerHTML = resumeHTML;
      resumeElement.style.animation = "slideInFromRight 0.5s ease-out";
      resumeElement.style.color = "Black";
    }
  }

  // Add event listener to the button
  const button: HTMLButtonElement | null = document.querySelector(
    'button[type="button"]'
  );
  if (button) {
    button.addEventListener("click", buildResume);
  }
});
