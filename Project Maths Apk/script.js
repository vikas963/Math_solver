
document
  .getElementById("historyButton")
  .addEventListener("click", () => (window.location.href = "history.html"));

document
  .getElementById("searchButton")
  .addEventListener("click", () =>
    performAPISearch(
      document.getElementById("categorySelect").value,
      document.getElementById("expressionInput").value
    )
  );

//I used Function to perform API search fetch Functionality
const performAPISearch = async (category, expression) =>{
  fetch(
    `https://newton.vercel.app/api/v2/${category}/${encodeURIComponent(
      expression
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      displayResultCard(expression, category, data.result);
      saveToLocalStorage({
        operation: category,
        expression,
        result: data.result,
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
  };
// I use Function to display a result cards
const displayResultCard = (expression, category, result) => {
  const resultCard = document.createElement("div");
  resultCard.className = "result-card";
  resultCard.innerHTML = `<p><strong>Category:</strong> ${category}</p><p><strong>Expression:</strong> ${expression}</p><p><strong>Result:</strong> ${result}</p>`;
  document.getElementById("resultsSection").appendChild(resultCard);
};

// document
//   .getElementById("searchButton")
//   .addEventListener("click", () => (window.location.href = "index.html"));



// -----------------------------------------

//I used Event listener for the history button

//I Used Event listener for the search button
// document.addEventListener("DOMContentLoaded", function () {---searchSearchedProblemsButton
//     const historyBtn = document.getElementById("historyBtn");
//     const searchBtn = document.getElementById("searchBtn");
//     const expressionInput = document.getElementById("expressionInput");
//     const categorySelect = document.getElementById("categorySelect");
//     const solutionCardContainer = document.getElementById("solutionCardContainer");

//     historyBtn.addEventListener("click", function () {
//         // Redirect to history page or implement logic based on your requirements
//         // For now, we'll just log a message
//         console.log("History button clicked");
//     });

//     searchBtn.addEventListener("click", function () {
//         const expression = encodeURIComponent(expressionInput.value);
//         const category = categorySelect.value;

//         // Make API request
//         const apiUrl = `https://newton.vercel.app/api/v2/${category}/${expression}`;
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 // Handle the response and create a solution card
//                 const solutionCard = createSolutionCard(expression, category, data.result);
//                 solutionCardContainer.appendChild(solutionCard);

//                 // Save data to local storage
//                 saveToLocalStorage(category, expression, data.result);
//             })
//             .catch(error => console.error('Error:', error));
//     });

//     // Function to create a solution card
//     function createSolutionCard(expression, category, result) {
//         const card = document.createElement("div");
//         card.className = "solution-card";
//         card.innerHTML = `
//             <p><strong>Category:</strong> ${category}</p>
//             <p><strong>Expression:</strong> ${expression}</p>
//             <p><strong>Result:</strong> ${result}</p>
//             <button onclick="deleteCard(this)">Delete</button>
//         `;
//         return card;
//     }

//     // Function to save data to local storage
//     function saveToLocalStorage(category, expression, result) {
//         const problems = JSON.parse(localStorage.getItem("problems")) || [];
//         problems.push({ category, expression, result });
//         localStorage.setItem("problems", JSON.stringify(problems));
//     }

//     // Function to load history from local storage
//     function loadHistoryFromLocalStorage() {
//         const problems = JSON.parse(localStorage.getItem("problems")) || [];

//         problems.forEach(problem => {
//             const solutionCard = createSolutionCard(problem.expression, problem.category, problem.result);
//             solutionCardContainer.appendChild(solutionCard);
//         });
//     }

//     // Load history when the page loads
//     loadHistoryFromLocalStorage();

//     // Function to delete a solution card
//     window.deleteCard = function (button) {
//         const card = button.parentElement;
//         solutionCardContainer.removeChild(card);

//         // Remove data from local storage
//         const expression = card.querySelector("p:nth-child(2)").textContent.split(":")[1].trim();
//         const category = card.querySelector("p:first-child").textContent.split(":")[1].trim();
//         removeFromLocalStorage(category, expression);
//     };

//     // Function to remove data from local storage
//     function removeFromLocalStorage(category, expression) {
//         const problems = JSON.parse(localStorage.getItem("problems")) || [];

//         // Find and remove the problem from the array
//         const updatedProblems = problems.filter(problem => !(problem.category === category && problem.expression === expression));

//         // Save the updated array back to local storage
//         localStorage.setItem("problems", JSON.stringify(updatedProblems));
//     }
// });
