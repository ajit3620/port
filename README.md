# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 13+, React, and Tailwind CSS. This portfolio website features a clean design with sections for showcasing your projects, skills, and contact information.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 💅 Styled with Tailwind CSS
- 🔥 Smooth animations and transitions

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information
Edit the following files to customize the content:

- `app/components/Hero.tsx`: Update your name and introduction
- `app/components/About.tsx`: Modify your about section and skills
- `app/components/Projects.tsx`: Add your own projects
- `app/components/Contact.tsx`: Update your contact information

### Styling
- Global styles are in `app/globals.css`
- The color scheme can be modified in the Tailwind classes
- Component-specific styles are within their respective files

### Projects
In `app/components/Projects.tsx`, update the `projects` array with your own projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    imageUrl: "/projects/your-image.jpg",
    githubUrl: "https://github.com/yourusername/project"
  },
  // Add more projects...
];
```

## Deployment

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and create optimal build settings

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 