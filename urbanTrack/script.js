const modal = document.getElementById("myModal");
const btnDropdown = document.getElementById("btn-dropdown");
const closeBtn = document.getElementsByClassName("close")[0];
const content = document.getElementById("content");
const btnAddImg = document.getElementById("btn-add-img");
const complainInput = document.getElementById("complain-input");
const issueLabel = document.getElementById("issue-label");
const imgPreviewContainer = document.createElement("div");
const image = [
  "urban-track-road1.jpg",
  "urban-track-road2.jpg",
  "urban-track-garbage1.jpg",
];

imgPreviewContainer.style.marginTop = "10px";
imgPreviewContainer.id = "img-preview-container";

let currentImageIndex = 0;

function updateImage() {
  const imgGlance = document.getElementById("img-glance");
  imgGlance.src = `images/${image[currentImageIndex]}`;
}

document.getElementById("btn-left").onclick = function () {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateImage();
  }
};

document.getElementById("btn-right").onclick = function () {
  if (currentImageIndex < image.length - 1) {
    currentImageIndex++;
    updateImage();
  }
};

btnDropdown.onclick = function () {
  modal.style.display = "block";
  content.style.filter = "blur(5px)";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  content.style.filter = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    content.style.filter = "none";
  }
};

function goBack() {
  modal.style.display = "none";
  content.style.filter = "none";
}

function setIssue(issue) {
  issueLabel.textContent = issue;
  modal.style.display = "none";
  content.style.filter = "none";
}

document.getElementById("btn-select-location").onclick = function () {
  const address = " (Pointed Address)"; // Placeholder for the actual address logic
  complainInput.value += address;
};

btnAddImg.onclick = function () {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.onchange = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.style.width = "100%";
      img.style.borderRadius = "10px";
      img.style.marginTop = "10px";
      imgPreviewContainer.innerHTML = "";
      imgPreviewContainer.appendChild(img);
    };

    if (file) {
      reader.readAsDataURL(file);
      complainInput.parentNode.appendChild(imgPreviewContainer);
    }
  };
  fileInput.click();
};

document.getElementById("btn-submit").onclick = function () {
  alert("Complaint raised");
};

// Add vote buttons dynamically
const voteButtonsContainer = document.createElement("div");
voteButtonsContainer.className = "vote-buttons";

const upvoteButton = document.createElement("button");
upvoteButton.className = "vote-button";
upvoteButton.textContent = "Upvote";
upvoteButton.onclick = function () {
  alert("Upvoted!");
};

const downvoteButton = document.createElement("button");
downvoteButton.className = "vote-button";
downvoteButton.textContent = "Downvote";
downvoteButton.onclick = function () {
  alert("Downvoted!");
};

voteButtonsContainer.appendChild(upvoteButton);
voteButtonsContainer.appendChild(downvoteButton);

const glanceDiv = document.querySelector(".glance");
glanceDiv.appendChild(voteButtonsContainer);
