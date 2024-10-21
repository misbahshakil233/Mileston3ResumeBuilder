document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("nameInput").value;
    const jobTitle = document.getElementById("jobTitleInput").value;
    const about = document.getElementById("aboutInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;
    const address = document.getElementById("addressInput").value;
    const languages = document.getElementById("languagesInput").value.split(",").map(lang => lang.trim());
    const expertise = document.getElementById("expertiseInput").value.split(",").map(exp => exp.trim());
    const hobbies = document.getElementById("hobbiesInput").value.split(",").map(hobby => hobby.trim());
    const skills = document.getElementById("skillsInput").value.split(",").map(skill => skill.trim());
    const workExperience = document.getElementById("workExperienceInput").value;
    const education = document.getElementById("educationInput").value;

    // Display profile image
    const profileImageInput = document.getElementById("profileImageInput");
    const profileImage = document.getElementById("profileImage");
    const file = profileImageInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
            profileImage.style.display = "block"; // Show the image
        }
        reader.readAsDataURL(file);
    }

    // Update the resume information
    document.getElementById("name").innerText = name;
    document.getElementById("jobTitle").innerText = jobTitle;
    document.getElementById("about").innerText = about;

    // Update contact information
    const contactInfo = document.getElementById("contactInfo");
    contactInfo.innerHTML = `
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <li>Address: ${address}</li>
    `;

    // Update languages
    const languagesList = document.getElementById("languages");
    languagesList.innerHTML = languages.map(lang => `<li>${lang}</li>`).join("");

    // Update expertise
    const expertiseList = document.getElementById("expertise");
    expertiseList.innerHTML = expertise.map(exp => `<li>${exp}</li>`).join("");

    // Update hobbies
    const hobbiesList = document.getElementById("hobbies");
    hobbiesList.innerHTML = hobbies.map(hobby => `<li>${hobby}</li>`).join("");

    // Update skills
    const skillsList = document.getElementById("skillsList");
    skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join("");

    // Update work experience
    document.getElementById("workExperience").innerText = workExperience;

    // Update education
    document.getElementById("educationInfo").innerText = education;
});
