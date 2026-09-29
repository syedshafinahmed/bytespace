<div align="center">
  <img alt="ByteSpace Logo" width="160" src="public/images/logo/Header_Logo.png" />
  
  ## **Digital Learning & Creator Marketplace**

  [![Next.js](https://img.shields.io/badge/Next.js-16.3.6-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📖 Overview

**ByteSpace** is an online course and digital asset learning marketplace for digital creators, designers, and developers. The application delivers a platform to discover, learn, and master creative and technical disciplines including UI/UX design, marketing, data, development, and entrepreneurship.

The platform includes a landing experience, searchable and filterable course catalog, curriculum detail pages with module breakdowns and review systems, creator profiles, authentication views, element-based skeleton loaders, comprehensive SEO metadata, and fully responsive layouts across mobile, tablet, and desktop viewports.

---

## ✨ Implemented Features

### 🏠 Landing Page (`/`)
- **Hero Banner**: Stylized 3D decorative assets with floating metric cards, responsive mobile layout, and direct CTA actions.
- **Partner Marquee**: Brand partnership logo showcase strip.
- **Course Exploration Grid**: Featured course cards showing thumbnail, category, student count, ratings, and price tags.
- **Growth & Value Section**: Creator milestone highlights and platform statistics.
- **Call-to-Action (CTA)**: Lead-generation banner connecting aspiring learners with instructors.
- **Student Testimonials**: Community review cards with ratings and learner feedback.
- **Global Navigation & Footer**: Responsive navbar with animated mobile slide-out drawer, navigation links, search, and footer directory.

### 📚 Course Catalog (`/courses`)
- **Category Filtering**: Filter by disciplines including UI/UX Design, Animation, Marketing, Social Media, Drawing & Painting, Music, and Cooking.
- **Search & Sort**: Real-time search bar combined with level and sorting filter controls.
- **Course Grid**: Responsive multi-column grid rendering course metadata badges (difficulty level, ratings, review count, active students).
- **Pagination**: Numbered pagination controls for multi-page course navigation.

### 🎓 Course Details (`/courses/[id]`)
- **Course Hero**: Dynamic title, author attribution with profile link, meta badges, and native Web Share API / clipboard sharing.
- **Video Preview Player**: Video thumbnail card with centered play button overlay and responsive aspect ratios.
- **Tabbed Course Information**:
  - **About Tab**: In-depth course overview, 4-column visual sneak peek image gallery, and checklist of key learning outcomes.
  - **Lesson Tab**: Comprehensive syllabus listing module titles, video durations, lesson descriptions, and a learning progress completion tracker.
  - **Reviews Tab**: Aggregate score card (4.7 rating), 5-star distribution progress bars, star filter pills, and individual learner review cards with user avatars.
- **Sticky Enrollment Sidebar**: Desktop-sticky checkout card detailing total lessons, watch hours, pricing ($25/lifetime), feature inclusions list, and creator profile card with link to full portfolio.

### 👤 Creator Profile (`/creators`)
- **Instructor Overview**: Creator banner with avatar, bio, total courses count, student count, average ratings, and interactive Follow toggle.
- **Published Courses**: Filterable catalog of courses created by the instructor.

### ⚡ Element-Based Skeleton Loaders
- **Zero-CLS Loading Experience**: Element-based skeleton layouts designed to match exact page geometries rather than generic spinning indicators.
- **Catalog Skeleton (`CoursesPageSkeleton`)**: Replicates search bar, category pills, level filters, course card grids, and pagination controls.
- **Creator Skeleton (`CreatorPageSkeleton`)**: Replicates creator avatar, header copy, metrics counters, follow action, and published course card grid.
- **Course Details Skeleton (`CourseDetailsSkeleton`)**: Mirrors hero background, title/author placeholders, badges, video preview player, tabs, modules, and sticky checkout sidebar.
- **Route-Level Streaming & Fallback**: Standardized Next.js App Router `loading.tsx` fallbacks combined with client mount state transitions for smooth navigation across all devices.

### 🔍 Comprehensive SEO & Social Metadata
- **Dynamic Metadata & Title Templating**: Base URL configuration via `metadataBase`, descriptive page titles with `%s | ByteSpace` pattern, and curated keywords for search indexing.
- **Social Sharing Previews**: Open Graph and Twitter `summary_large_image` cards for rich previews across platforms.
- **Schema.org Structured Data**: Embedded `EducationalOrganization` JSON-LD schema providing structured context on branding, logo, and organization metadata.
- **Web App Manifest & Favicons**: Integrated `site.webmanifest` with brand theme color (`#003BE2`), multiple PNG favicon dimensions (16x16, 32x32), and Apple touch icons.
- **Environment-Driven Configuration**: Fully decoupled site URL and OG image endpoints via `.env`.

### 🔐 Authentication (`/login`, `/signup`)
- **Shared Auth Layout**: Split-screen design featuring promotional branding panel alongside form container.
- **Sign In (`/login`)**: Email and password input fields, sign-in action, and social authentication buttons (Google, Facebook).
- **Registration (`/signup`)**: Full name, email, and password registration workflow with routing to login.

### ⚠️ Error Handling (`/not-found`)
- **Custom 404 Page**: Responsive gradient typography, error explanation, and one-click return to homepage.

---

## 🛠️ Tech Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | Next.js 16.3.6 | App Router, Server and Client Components, Streaming `loading.tsx` |
| **UI Library** | React 19.2.8 | Latest React release with React Compiler (`babel-plugin-react-compiler`) |
| **Language** | TypeScript 5 | Strict static typing across components, skeletons, and data interfaces |
| **Styling** | TailwindCSS 4 | PostCSS engine (`@tailwindcss/postcss`), custom design tokens |
| **Icons** | React Icons 5.7.0 | Material Design (`md`), Ionicons (`io5`), FontAwesome (`fa`), Feather (`fi`) |
| **Typography** | Next Font | Poppins (Google Fonts) & Satoshi (Local Font) |
| **SEO & OpenGraph** | Next Metadata API | Schema.org JSON-LD, Open Graph, Twitter Cards, Web Manifest |

---

## 📁 Project Structure

```
bytespace/
├── .env.example                              # Environment variable template
├── public/
│   ├── favicon.png                           # Standard brand favicon
│   ├── site.webmanifest                      # Web application manifest
│   └── images/
│       ├── auth/                             # Authentication illustrations & brand assets
│       ├── banner/                           # Hero 3D decorative shapes & frames
│       ├── courses/                          # Course thumbnails, previews & gallery shots
│       ├── creator/                          # Creator profile pictures & badges
│       ├── cta/                              # Call to action graphics
│       ├── explore/                          # Course catalog preview cards
│       ├── growth/                           # Growth section graphics
│       ├── logo/                             # Header, footer & icon brand logos
│       ├── marquee/                          # Partner & brand logos
│       └── testimonials/                     # Student avatar photos
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── layout.tsx                    # Dual-panel split layout for auth pages
│   │   │   ├── login/page.tsx                # Sign in page
│   │   │   └── signup/page.tsx               # Registration page
│   │   ├── courses/
│   │   │   ├── [id]/
│   │   │   │   ├── loading.tsx               # Course details route skeleton fallback
│   │   │   │   └── page.tsx                  # Course details, curriculum & reviews
│   │   │   ├── loading.tsx                   # Course catalog route skeleton fallback
│   │   │   └── page.tsx                      # Course catalog with filters & search
│   │   ├── creators/
│   │   │   ├── loading.tsx                   # Creator profile route skeleton fallback
│   │   │   └── page.tsx                      # Creator profile & instructor catalog
│   │   ├── globals.css                       # Tailwind v4 import & theme variables
│   │   ├── icon.png                          # Favicon asset
│   │   ├── layout.tsx                        # Root HTML shell with fonts, SEO & JSON-LD
│   │   ├── not-found.tsx                     # Custom 404 error page
│   │   └── page.tsx                          # Home landing page
│   ├── components/
│   │   ├── auth/
│   │   │   └── AuthLayout.tsx                # Branded authentication template
│   │   ├── home/
│   │   │   ├── Banner.tsx                    # Responsive hero section
│   │   │   ├── CTA.tsx                       # Promotional conversion banner
│   │   │   ├── ExploreSection.tsx            # Course discovery preview grid
│   │   │   ├── Footer.tsx                    # Site footer with directory links
│   │   │   ├── GrowthSection.tsx             # Platform impact & statistics
│   │   │   ├── MarqueeSection.tsx            # Brand partners ticker
│   │   │   ├── Navbar.tsx                    # Header with mobile sliding drawer
│   │   │   └── Testimonial.tsx               # Learner reviews & feedback
│   │   ├── layout/
│   │   │   └── PublicLayout.tsx              # Layout wrapper (Navbar + Content + Footer)
│   │   ├── skeletons/
│   │   │   ├── CourseCardSkeleton.tsx        # Reusable course card loader
│   │   │   ├── CourseDetailsSkeleton.tsx     # Detailed course view skeleton
│   │   │   ├── CoursesPageSkeleton.tsx       # Course catalog page skeleton
│   │   │   └── CreatorPageSkeleton.tsx       # Creator profile page skeleton
│   │   └── ui/
│   │       ├── CourseBadges.tsx              # Course difficulty, rating & student pills
│   │       ├── CourseCard.tsx                # Reusable course card component
│   │       ├── CourseInclusions.tsx          # Sidebar course feature checklist
│   │       ├── CourseLessonsList.tsx         # Sidebar lesson breakdown list
│   │       └── ReviewCard.tsx                # User review & testimonial card
│   └── fonts/
│       └── Satoshi-Regular.otf               # Local font binary for Satoshi typography
├── next.config.ts                            # Next.js configuration
├── package.json                              # Project dependencies and npm scripts
├── postcss.config.mjs                        # PostCSS plugin pipeline
└── tsconfig.json                             # TypeScript compiler options
```

---

## 🌐 Routes

### Public Pages
| Route | Description |
|---|---|
| `/` | Landing page featuring hero, course explorer, growth metrics, and reviews |
| `/courses` | Searchable course catalog with category tabs, level filters, pagination, and skeleton loading |
| `/courses/[id]` | Detailed course syllabus, video preview, tabbed content, enrollment sidebar, and skeleton loading |
| `/creators` | Creator profile page with bio, stats, instructor courses, and skeleton loading |
| `/not-found` | Custom 404 page for non-existent routes |

### Auth Pages
| Route | Description |
|---|---|
| `/login` | User sign-in with email/password and social login shortcuts |
| `/signup` | New user registration form |

---

## 🎨 Design System

- **Color Palette**:
  - Primary Blue: `#003BE2` (used in headers, accents, brand badges, and theme)
  - Volt Accent: `#D4FB20` (used in primary buttons, rating badges, active pills)
  - Neutral Dark: `#242528` (used for headings, dark card text)
  - Slate Gray: `#4B4C53` / `#82868E` (used for secondary body text)
  - Soft Light: `#F5F5F6` / `#F1F4FE` (used for card backgrounds and pills)
- **Typography**:
  - Headings: `Poppins` (weights 300, 400, 500, 600, 700, 800)
  - Body & UI: `Satoshi` (variable local font)
- **Responsiveness**: Fluid layout scaling across mobile (360px+), tablet, and desktop (1024px, 1280px, 1440px) without horizontal scrolling.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18 or higher (v20+ recommended)
- **Package Manager**: npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/syedshafinahmed/bytespace.git
   cd bytespace
   ```

2. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```
   Configure your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_OG_IMAGE_URL=https://your-image-host.com/og-image.png
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```

5. **View in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Next.js development server with hot-reloading |
| `npm run build` | Compiles the production application bundle with Next.js & React Compiler |
| `npm run start` | Boots the compiled production server |
| `npm run lint` | Runs ESLint checks across project files |

---

<div align="center">
  <p><strong>ByteSpace — Digital Learning & Creator Marketplace</strong></p>
</div>
