document.addEventListener("DOMContentLoaded", function() {
    // Task 1: Implement mouseover, mouseout and event.target, event.relatedTarget events
    
    // Apply to header
    const header = document.querySelector(".header");
    header.addEventListener("mouseover", function(event) {
        // Change style on mouseover
        this.style.backgroundColor = "rgba(139, 0, 0, 0.3)";
        console.log("Mouseover Target:", event.target);
        console.log("Mouseover Related Target:", event.relatedTarget);
    });
    
    header.addEventListener("mouseout", function(event) {
        // Reset style on mouseout
        this.style.backgroundColor = "rgba(139, 0, 0, 0.1)";
        console.log("Mouseout Target:", event.target);
        console.log("Mouseout Related Target:", event.relatedTarget);
    });
    
    // Task 2: Implement dragging an element using mousedown, mousemove, mouseup
    
    // Make the quote element draggable
    const quote = document.querySelector(".quote");
    
    // Add an indicator that the element is draggable
    const dragIndicator = document.createElement("div");
    dragIndicator.textContent = "Drag me";
    dragIndicator.style.position = "absolute";
    dragIndicator.style.top = "5px";
    dragIndicator.style.right = "5px";
    dragIndicator.style.color = "darkred";
    dragIndicator.style.fontSize = "12px";
    dragIndicator.style.cursor = "move";
    
    quote.style.position = "relative";
    quote.style.cursor = "move";
    quote.appendChild(dragIndicator);
    
    // Variables for tracking drag
    let isDragging = false;
    let offsetX, offsetY;
    
    // Mouse down event starts drag
    quote.addEventListener("mousedown", function(event) {
        isDragging = true;
        
        // Calculate the offset from the mouse position to the element's top-left corner
        const rect = quote.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
        
        // Change appearance while dragging
        quote.style.opacity = "0.8";
        
        // Prevent default text selection during drag
        event.preventDefault();
    });
    
    // Mouse move event updates position
    document.addEventListener("mousemove", function(event) {
        if (!isDragging) return;
        
        // Calculate the new position
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        
        // Update position
        quote.style.left = x + "px";
        quote.style.top = y + "px";
    });
    
    // Mouse up event ends drag
    document.addEventListener("mouseup", function() {
        if (isDragging) {
            isDragging = false;
            quote.style.opacity = "1";
        }
    });
});