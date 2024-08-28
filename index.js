//SHOW PASSWORD
function togglePassword(inputid, iconid) {
    const passwordInput = document.getElementById(inputid);
    const icon = document.getElementById(iconid);
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'password') {
        icon.src = 'eye-closed.svg'; 
    } else {
        icon.src = 'eye-icon.svg';     }
}

function toggleFAQ(faqId) {
    const faq = document.getElementById(`faq${faqId}`);
    faq.style.display = faq.style.display === 'none' || faq.style.display === '' ? 'block' : 'none';
}


function toggleEditOptions() {
    const editOptions = document.getElementById('edit-options');
    
    // Check if the edit options are currently displayed
    if (editOptions.style.display === 'block') {
        // Hide the options and remove the event listener
        editOptions.style.display = 'none';
        document.removeEventListener('click', hideEditOptions);
    } else {
        // Show the options and attach the event listener to detect clicks outside
        editOptions.style.display = 'block';
        document.addEventListener('click', hideEditOptions);
    }
}

function hideEditOptions(event) {
    const editOptions = document.getElementById('edit-options');
    const profilePic = document.getElementById('profilepic');
    const uploadBtn = document.querySelector('uploadbtn');
    const deleteBtn = document.querySelector('deletebtn');

    // Check if the click is outside the profile pic, edit options, upload button, or delete button
    if (!profilePic.contains(event.target) &&
        !editOptions.contains(event.target) &&
        event.target !== uploadBtn && event.target !== deleteBtn) {
        // Hide the edit options and remove the event listener
        editOptions.style.display = 'none';
        document.removeEventListener('click', hideEditOptions);
    }
}

function uploadImage() {
    alert("Upload image functionality coming soon!");
}

function deleteImage() {
    alert("Delete image functionality coming soon!");
}

function toggleAssignment(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }
  
  function toggleQuestions(id) {
    const questions = document.getElementById(id);
    questions.style.display = questions.style.display === 'block' ? 'none' : 'block';
  }
  
  // Optionally, add event listeners to handle clicks outside of the assignment content to close it
  document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.assignments').contains(event.target);
    if (!isClickInside) {
      document.querySelectorAll('.assignment-content').forEach(function(content) {
        content.style.display = 'none';
      });
      document.querySelectorAll('.questions').forEach(function(questions) {
        questions.style.display = 'none';
      });
    }
  });

  // Toggle resources visibility
function toggleResources(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  
  // Scroll horizontally
  function scrollCourses(direction) {
    const container = document.querySelector('.course-container');
    const scrollAmount = 300; // Adjust based on card width
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  
  // Initialize resource content visibility
  document.querySelectorAll('.resource-content').forEach((el) => {
    el.style.display = 'none';
  });
  
  // Function to populate profile data from the database
function loadProfileData(profileData) {
    document.getElementById('student-name').innerText = profileData.name;
    document.getElementById('student-id').innerText = profileData.id;
    document.getElementById('student-course').innerText = profileData.course;
    document.getElementById('student-year').innerText = profileData.year;
    document.getElementById('student-semester').innerText = profileData.semester;
    document.getElementById('student-group').innerText = profileData.group;
  }
  
 

  let x = document.getElementById('login');
  let y = document.getElementById('signup');

  function login(){
    x.style.left = "0px";
    y.style.left = "-520px";
  }

  function signup(){
    x.style.left = "-520px";
    y.style.left = "0px";

  }
