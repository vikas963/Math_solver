//this we are creating Function to redirect to the search page
document.getElementById('backButton').addEventListener('click', redirectToSearch);
function redirectToSearch() {
    window.location.href = 'index.html';
}

function saveToStorage(category, expression, result) {
    let res = localStorage.getItem("history");
    let arr = [];

    if (res) {
        arr = JSON.parse(res);
    }

    arr.push({ category, expression, result });
    localStorage.setItem("history", JSON.stringify(arr));
}

document.addEventListener("DOMContentLoaded", () => {
    let history = localStorage.getItem("history");

    if (history) {
        let histories = JSON.parse(history);

        for (let history of histories) {
            displayResultCard(history.category, history.expression, history.result);
        }
    }
});
