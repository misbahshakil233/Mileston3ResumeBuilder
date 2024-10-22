document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("nameInput").value;
    const jobTitle = document.getElementById("jobTitleInput").value;
    const about = document.getElementById("aboutInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;
    const address = document.getElementById("addressInput").value;
    const expertise = document.getElementById("expertiseInput").value.split(",").map(exp => exp.trim());
    const hobbies = document.getElementById("hobbiesInput").value.split(",").map(hobby => hobby.trim());
    const skills = document.getElementById("skillsInput").value.split(",").map(skill => skill.trim());
    const workExperience = document.getElementById("workExperienceInput").value;
    const education = document.getElementById("educationInput").value;

    // Profile Image Handling
    const profileInput = document.getElementById("profileImageInput");
    const profileImage = document.getElementById("profileImage");

    if (profileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.style.display = "block";
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(profileInput.files[0]);
    }

    // Dynamic Content Assignment
    document.getElementById("name").textContent = name;
    document.getElementById("jobTitle").textContent = jobTitle;
    document.getElementById("about").textContent = about;
    const contactInfo = `<li>Email: ${email}</li><li>Phone: ${phone}</li><li>Address: ${address}</li>`;
    document.getElementById("contactInfo").innerHTML = contactInfo;
    document.getElementById("expertise").innerHTML = expertise.map(exp => `<li>${exp}</li>`).join("");
    document.getElementById("hobbies").innerHTML = hobbies.map(hobby => `<li>${hobby}</li>`).join("");
    document.getElementById("skillsList").innerHTML = skills.map(skill => `<li>${skill}</li>`).join("");
    document.getElementById("workExperience").textContent = workExperience;
    document.getElementById("educationInfo").textContent = education;

    // Add horizontal lines after sections
    document.querySelectorAll(".resume hr").forEach(hr => hr.remove());
    document.getElementById("contactInfo").insertAdjacentHTML('afterend', '<hr>');
    document.getElementById("expertise").insertAdjacentHTML('afterend', '<hr>');
    document.getElementById("hobbies").insertAdjacentHTML('afterend', '<hr>');
    document.getElementById("about").insertAdjacentHTML('afterend', '<hr>');
    document.getElementById("workExperience").insertAdjacentHTML('afterend', '<hr>');
});
