# Hover Board with Watermark

This is a visually engaging **Hover Board** project built using **HTML**, **CSS**, and **JavaScript**. The board consists of 500 circles that light up with random colors when hovered over, and it features a watermark displaying the name **"TAHIR"** in the background for personalization.

## Features

1. **Dynamic Hover Effect**: 
   - Each circle changes its background color and displays a glowing effect when hovered over.
   - Smooth color transitions for an interactive experience.

2. **Watermark**:
   - The name **"TAHIR"** is displayed as a subtle, translucent watermark in the background of the board.
   - The watermark does not interfere with the hover functionality, ensuring a seamless user experience.

3. **Responsive Design**:
   - The board adapts to various screen sizes, maintaining a clean and centered layout.
   - Optimized for both desktop and mobile devices.

4. **Gradient Background**:
   - A visually appealing gradient background enhances the aesthetics of the application.

5. **Tab-Styled Container**:
   - The hover board is enclosed within a rounded, bordered tab for a polished look.
  
### Live Demo
[You can see a live demo of the project here.](https://imtahirnaseer.github.io/Hover-Board/)

## Technologies Used

- **HTML**: Structure of the page.
- **CSS**: Styling for layout, transitions, and responsive design.
- **JavaScript**: Logic for hover effects and color changes.

## How It Works

1. The board consists of 500 small circular elements created dynamically in JavaScript.
2. Each circle is assigned random colors from a predefined palette when hovered over.
3. The circles revert to their original state when the mouse is moved away.
4. The watermark is displayed using a `div` element styled with `pointer-events: none` to prevent interference with the hover effect.

## Project Structure

```plaintext
Hover Board
│
├── index.html       # HTML structure for the hover board
├── style.css        # Styling for the layout, hover effects, and watermark
└── script.js        # JavaScript logic for hover interactions
