# Jon Williams - Professional Resume Website

A modern, responsive resume website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, clean, and professional design
- 🌓 Dark/Light mode toggle with localStorage persistence
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js App Router
- 🎨 Smooth animations and transitions
- 📧 Contact form
- 📄 Downloadable resume PDF option
- 🔍 SEO optimized
- ♿ Accessible navigation

## Sections

- **Hero** - Introduction with name, title, and quick links
- **About** - Professional summary
- **Experience** - Work history with timeline
- **Skills** - Categorized technical and soft skills
- **Projects** - Featured projects with technologies
- **Education** - Academic background and certifications
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd jonwilliams_resume
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

Edit the file `src/data/resume-data.ts` to customize all content:

- Personal information (name, email, phone, location, social links)
- Professional summary
- Work experience
- Education
- Skills
- Projects
- Certifications

### Add Your Resume PDF

1. Add your PDF resume file to the `public` folder as `resume.pdf`
2. The "Download Resume" button will automatically link to it

### Customize Colors

The design uses Tailwind CSS. To change the color scheme:

1. Edit component files to change color classes
2. Main accent color is `blue-600` - search and replace with your preferred color

### Modify Sections

Components are located in `src/components/`:

- `Header.tsx` - Navigation and dark mode toggle
- `Hero.tsx` - Landing section
- `About.tsx` - About section
- `Experience.tsx` - Work experience
- `Skills.tsx` - Skills display
- `Projects.tsx` - Projects showcase
- `Education.tsx` - Education and certifications
- `Contact.tsx` - Contact form
- `Footer.tsx` - Footer with links

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `.next` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `.next`

### Other Platforms

You can deploy to any platform that supports Node.js applications (AWS, Azure, DigitalOcean, etc.)

## Technologies Used

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** Geist (via next/font)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
jonwilliams_resume/
├── public/              # Static files (add resume.pdf here)
├── src/
│   ├── app/            # Next.js app router pages
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── resume-data.ts  # Resume content (EDIT THIS!)
├── .github/
│   └── copilot-instructions.md
├── package.json
└── README.md
```

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS

