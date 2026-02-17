# Hulash Chand Donempudi - Portfolio

Personal portfolio website built with Next.js, showcasing projects in data engineering, cloud architecture, and full-stack development.

🌐 **Live Site**: [www.hulash.com](https://www.hulash.com)

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 About Me

Data Engineer specializing in scalable data systems, cloud platforms (AWS), and full-stack development. Currently based in London, UK, building solutions in healthcare technology and financial trading algorithms.

### Skills & Technologies

**Data Engineering:**
- Python, SQL
- AWS (S3, Lambda, Glue, Redshift)
- ETL Pipelines & Data Modeling
- Oracle & AWS Certifications (in progress)

**Full-Stack Development:**
- Next.js, React, TypeScript
- Tailwind CSS
- REST APIs, WebSockets
- Database Design

## 🚀 Featured Projects

### 1. **LeetJourney** - Coding Interview Prep
- Comprehensive Obsidian-based notes for data structures and algorithms
- Organized by patterns and difficulty levels
- Technologies: Obsidian, Markdown

### 2. **System Design Architecture**
- Architecture patterns for scalable systems
- Real-world examples and case studies
- Technologies: System Design, Architecture Patterns

### 3. **TechEdge Academy** (In Progress)
- Educational technology platform
- Technologies: Next.js, React, Tailwind CSS

### 4. **Healthcare Scheduling App** (In Progress)
- Unified Nourish/PASS platform for healthcare management
- Technologies: Full-Stack, Database Design

### 5. **NASDAQ Trading Algorithm** (In Progress)
- Momentum-based trading strategy
- Technologies: Python, Financial APIs

## 🛠️ Tech Stack

This portfolio is built with:

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) / [Vercel](https://vercel.com/)
- **Version Control:** Git & GitHub

## 📁 Project Structure

```
hulash-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Homepage
│   │   ├── info/
│   │   │   └── page.tsx     # About/Info page
│   │   ├── projects/
│   │   │   └── page.tsx     # Projects listing
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ProjectGrid.tsx  # Project grid component
│   │   └── Header.tsx       # Navigation header
│   └── data/
│       └── projects.ts      # Project data
├── public/
│   └── content/             # Images and assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hulashc/hulash-portfolio.git
   cd hulash-portfolio
   ```

2. **Switch to the Next.js migration branch**
   ```bash
   git checkout nextjs-migration
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

### Export Static Site (for GitHub Pages)

```bash
npm run export
```

This creates an `out/` directory with static files ready for deployment.

## 📦 Deployment

### Option 1: GitHub Pages

1. Build and export the static site:
   ```bash
   npm run export
   ```

2. Deploy the `out/` directory to GitHub Pages

### Option 2: Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Option 3: Netlify

1. Connect your GitHub repository to [Netlify](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `.next`

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.ts` and add your project:

```typescript
{
  id: 'your-project',
  title: 'Project Title',
  subtitle: 'Project Subtitle',
  date: 'Month Year',
  color: '#hexcolor',
  image: '/path/to/image.png',
  link: '/projects/your-project/',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
}
```

### Modifying Styles

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind utility classes

### Updating Content

- About page: `src/app/info/page.tsx`
- Homepage: `src/app/page.tsx`
- Metadata: `src/app/layout.tsx`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **GitHub:** [@hulashc](https://github.com/hulashc)
- **Website:** [www.hulash.com](https://www.hulash.com)
- **Location:** London, England, UK

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

⭐ If you find this portfolio helpful, consider giving it a star on GitHub!
