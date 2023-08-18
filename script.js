document.addEventListener("DOMContentLoaded", function () {
    const checkButton = document.getElementById("checkButton");
    const walletAddressInput = document.getElementById("walletAddress");
    const resultsDiv = document.getElementById("results");

    checkButton.addEventListener("click", async () => {
        const walletAddress = walletAddressInput.value;

        // Fetch and process CSV data
        const csvData = await fetch("https://github.com/1xNFT/1x/blob/main/test.csv").then(response => response.text());
        const rows = csvData.split("\n");
        
        let rewards = "Not Found";
        
        // Search for the wallet address in the CSV data
        for (const row of rows) {
            const [address, reward] = row.split(",");
            if (address === walletAddress) {
                rewards = reward;
                break;
            }
        }

        // Display the results
        resultsDiv.textContent = `Wallet Address: ${walletAddress}\nRewards: ${rewards}`;
    });
});
