function dialogWithUser() {
    // Variables for the dialog
    let userName = prompt("Hello! What's your name?", "Guest");
    
    // Conditional branching
    if (userName === null || userName.trim() === "") {
        alert("You didn't enter a name. Let's call you 'Movie Fan'!");
        userName = "Movie Fan";
    }
    
    // More interactive prompts
    let favoriteMovie = prompt(`Hello, ${userName}! What's your favorite Audrey Hepburn movie?`, "Breakfast at Tiffany's");
    
    // Another conditional branch
    if (favoriteMovie === null || favoriteMovie.trim() === "") {
        alert("You didn't specify a favorite movie. We'll assume it's 'Breakfast at Tiffany's'.");
        favoriteMovie = "Breakfast at Tiffany's";
    }
    
    // Confirmation dialog
    let wantsFacts = confirm(`${userName}, would you like to learn some facts about Audrey Hepburn?`);
    
    // Conditional branching 
    if (wantsFacts) {
        // Array of facts for the loop
        const facts = [
            "Audrey Hepburn's real name was Audrey Kathleen Ruston.",
            "She was born on May 4, 1929, in Brussels, Belgium.",
            "She won an Academy Award for her role in 'Roman Holiday'.",
            "Besides acting, she was a humanitarian who worked with UNICEF.",
            "She was fluent in several languages, including English, Dutch, Italian, French, and Spanish."
        ];
        
        // Loop to display facts
        let factsToShow = 0;
        let showMore = true;
        
        while (showMore && factsToShow < facts.length) {
            alert(`Fact #${factsToShow + 1}: ${facts[factsToShow]}`);
            factsToShow++;
            
            if (factsToShow < facts.length) {
                showMore = confirm("Would you like to see another fact?");
            } else {
                alert("You've seen all the facts about Audrey Hepburn!");
            }
        }
        
        alert(`Thank you for learning about Audrey Hepburn, ${userName}! Enjoy exploring her filmography.`);
    } else {
        alert(`That's okay, ${userName}! Enjoy exploring the page about Audrey Hepburn anyway!`);
    }
    
    // Final message with user's favorite movie
    alert(`By the way, ${userName}, '${favoriteMovie}' is an excellent choice!`);
}