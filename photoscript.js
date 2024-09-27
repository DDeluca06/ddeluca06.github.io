// Like/Dislike handling
document.querySelectorAll(".like, .dislike").forEach((button) => {
    button.addEventListener("click", function () {
      const photoCard = this.closest('.photo-card');
      const likeButton = photoCard.querySelector('.like');
      const dislikeButton = photoCard.querySelector('.dislike');
      const countSpan = this.querySelector(".count");
  
      if (countSpan) {
        if (this.classList.contains('active')) {
          // If already active, deactivate
          this.classList.remove('active');
          this.style.backgroundColor = '';
          this.style.color = '';
          this.style.fontWeight = '';
          // This sets us back to "like" instead of staying "liked" when we unclick!
          countSpan.textContent = '';
          console.log(this.classList.contains('like') ? "Unliked" : "Undisliked");
        } else {
          // If not active, activate this and deactivate the other
          [likeButton, dislikeButton].forEach(btn => {
            btn.classList.remove('active');
            btn.style.backgroundColor = '';
            btn.style.color = '';
            btn.style.fontWeight = '';
            btn.querySelector(".count").textContent = '';
          });
  
          this.classList.add('active');
          countSpan.textContent = 'd';
          
          if (this.classList.contains('like')) {
            this.style.backgroundColor = '#4CAF50'; // Make it green
            this.style.color = 'white';
            console.log("Liked");
          } else if (this.classList.contains('dislike')) {
            this.style.backgroundColor = '#F44336'; // Make it red
            this.style.color = 'white';
            console.log("Disliked");
          }
  
          // Bold the liked text
          this.style.fontWeight = 'bold';
        }
  
        // Add a transition for smooth color change
        this.style.transition = 'background-color 0.53s, color 0.53s';
      }
    });
  });
  
  // Comment functionality
  document.querySelectorAll(".comment-form").forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const textarea = this.querySelector("textarea");
      const commentText = textarea.value.trim();
      if (commentText) {
        const commentList = this.closest(".comments").querySelector(".comment-list");
        // Create new element underneath existing placeholder comments
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        textarea.value = "";
      }
    });
  });
  
  // Share functionality (simulated)
  document.querySelectorAll(".share").forEach((button) => {
    button.addEventListener("click", function () {
      alert("Sharing functionality would be implemented here, if this was an actual site.");
    });
  });
  
  // Report functionality (simulated)
  document.querySelectorAll(".report").forEach((button) => {
    button.addEventListener("click", function () {
      alert("Report submitted. We will review this content.");
    });
  });
  
  // Site feedback functionality
  document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const textarea = this.querySelector("textarea");
    const feedbackText = textarea.value.trim();
    if (feedbackText) {
      alert("Thank you for your feedback!");
      textarea.value = "";
      // If we had a server, send this back and ruin an engineer's day
    }
  });
