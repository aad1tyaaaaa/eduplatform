# EduPlatform

This is a modern educational platform built with React and Tailwind CSS. It features a clean, responsive design with interactive UI components and smooth animations.

## Features

- **Custom Cursor:** A smooth, animated custom cursor with a trailing water drop effect for enhanced user experience.
- **Stats Section:** Beautifully styled statistics section showcasing key platform metrics.
- **Courses Section:** Displays popular courses with detailed information and an interactive "View All Courses" button.
- **Footer:** Enhanced footer with improved hover effects and visual styling.
- **Routing:** Client-side routing with React Router for seamless navigation.
- **Responsive Design:** Fully responsive layout optimized for all screen sizes.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd eduplatform/learn-tailwind-page-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Project Structure

- `src/components/` - Reusable UI components including `CustomCursor`, `Courses`, `Stats`, `Footer`, etc.
- `src/pages/` - Application pages like `Index`, `GetStartedFree`, and `NotFound`.
- `src/App.tsx` - Main application component with routing and global providers.
- `public/` - Static assets like images and icons.
- `tailwind.config.ts` - Tailwind CSS configuration.
- `vite.config.ts` - Vite build tool configuration.

## Custom Cursor

The custom cursor is implemented in `src/components/CustomCursor.tsx`. It features:
- A main cursor circle that follows the mouse pointer.
- Multiple trailing circles creating a water drop effect.
- Smooth animations using `requestAnimationFrame`.
- Interaction effects on clicks and when hovering over links and buttons.

## Styling

Tailwind CSS is used extensively for styling, with custom animations and gradients to create a modern and engaging UI.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
