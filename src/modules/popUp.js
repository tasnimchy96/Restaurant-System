// const toggleDisplay = () => {
//   const toggleButton = document.querySelector(".btn");
//   const targetElement = document.querySelector("#pop-up");
//   const overlay = document.querySelector("#blur-overlay");

//   // Add a click event listener to toggle the display property
//   toggleButton.addEventListener("click", () => {
//     // Check the current display property
//     const currentDisplay = getComputedStyle(targetElement).display;

//     // Toggle the display property
//     if (currentDisplay === "none") {
//       targetElement.style.display = "block";
//       overlay.style.display = "block";
//     } else {
//       targetElement.style.display = "none";
//     }
//   });
// };

// // Export the arrow function
// export { toggleDisplay };

// // Function to open the popup
// export const openPopup = () => {
//   const overlay = document.querySelector("#blur-overlay");
//   const popup = document.querySelector("#pop-up");

//   overlay.style.display = 'block';
//   popup.style.display = 'block';
// };

// // Function to close the popup
// export const closePopup = () => {
//   const overlay = document.querySelector("#blur-overlay");
//   const popup = document.querySelector("#pop-up");

//   overlay.style.display = 'none';
//   popup.style.display = 'none';
// };
