# StateCraft: Mastering State Management with Redux & Context API

This project demonstrates three different approaches to state management in React applications by building an interactive counter application.

## Project Structure

The repository contains three implementations of the same counter application:

### 1. alx-project-0x04 - useState Hook Implementation
- **Files**: `pages/counter-app.tsx`
- **Description**: Simple state management using React's built-in `useState` hook
- **Features**: Local component state for counter functionality

### 2. alx-project-0x05 - Context API Implementation
- **Files**: 
  - `context/CountContext.tsx` - Context provider and hooks
  - `pages/_app.tsx` - Modified to wrap app with provider
  - `components/layouts/Header.tsx` - Updated to show counter in header
  - `pages/counter-app.tsx` - Updated to use context
- **Description**: Global state management using React Context API
- **Features**: 
  - Shared state between Header and Counter components
  - Custom hook for context consumption
  - TypeScript interfaces for type safety

### 3. alx-project-0x06 - Redux Implementation
- **Files**:
  - `store/store.ts` - Redux store configuration with Redux Toolkit
  - `pages/_app.tsx` - Modified to wrap app with Redux provider
  - `components/layouts/Header.tsx` - Updated to use Redux selectors
  - `pages/counter-app.tsx` - Updated to use Redux hooks
- **Description**: Enterprise-level state management using Redux Toolkit
- **Features**:
  - Redux slice for counter logic
  - TypeScript types for store and dispatch
  - Optimized re-renders with selectors

## Key Learning Outcomes

1. **useState**: Perfect for local component state
2. **Context API**: Ideal for sharing state across components without prop drilling
3. **Redux**: Best for complex applications with extensive state management needs

## Running the Projects

For any of the three implementations:

```bash
cd alx-project-0x04  # or alx-project-0x05 or alx-project-0x06
npm install
npm run dev -- -p 3000
```

Then visit `http://localhost:3000` and navigate to the Counter App to see the functionality.

## State Management Comparison

| Feature | useState | Context API | Redux |
|---------|----------|-------------|-------|
| Complexity | Low | Medium | High |
| Learning Curve | Easy | Moderate | Steep |
| Performance | Excellent | Good | Excellent |
| DevTools | Basic | Limited | Advanced |
| Best For | Local state | Medium apps | Large apps |

Each implementation showcases the same counter functionality but demonstrates different architectural approaches to state management in React applications.
