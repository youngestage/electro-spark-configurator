# Wireless Magnetic Generator Power (WMGP) Configurator

A modern web application for configuring and visualizing custom wireless magnetic generator power units. This tool allows users to explore different configurations of WMGP generators with various power outputs and specifications.

## Features

- Interactive 3D visualization of generator models
- Real-time configuration updates
- Responsive design for all device sizes
- Detailed specifications and performance metrics
- Export configuration as PDF

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **3D Rendering**: Three.js
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Context API
- **3D Model Loading**: GLTFLoader
- **Animation**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd electro-spark-configurator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build locally
- `test` - Run tests
- `lint` - Run ESLint

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── lib/           # Utility functions and configurations
  ├── models/        # 3D model configurations
  ├── styles/        # Global styles and Tailwind config
  └── App.tsx        # Main application component
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is proprietary and confidential. All rights reserved.
