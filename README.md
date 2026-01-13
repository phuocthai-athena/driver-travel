# Personal Travel Driver & Local Guide - Landing Page

A modern, high-converting landing page for a personal travel driver and local guide service built with Next.js, Tailwind CSS, and Lucide React icons.

## Features

- **Hero Section**: Eye-catching hero with scenic background, compelling headline, and clear CTAs
- **About Me**: Driver profile with experience, safety rating, languages, and vehicle details
- **Featured Tour Packages**: Grid of tour cards with images, duration, highlights, and pricing
- **Why Choose Me**: Feature highlights showcasing unique value propositions
- **Testimonials**: Social proof with star ratings from satisfied customers
- **Contact & Booking**: Quick inquiry form and multiple contact methods (Phone, WhatsApp, Zalo)
- **Mobile Sticky Footer**: Fixed bottom bar on mobile with Call and Zalo buttons

## Design System

- **Color Palette**:

  - Deep Ocean Blue (#0066cc) - Trust and professionalism
  - White (#FFFFFF) - Cleanliness and clarity
  - Golden Yellow (#FFD700) - Highlights and CTAs

- **Typography**:

  - Headings: Poppins (Bold, Modern)
  - Body: Open Sans (Readable, Professional)

- **Theme**: Trustworthy, professional, and inviting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update City Name

Edit the city name in `components/Hero.tsx`:

```tsx
<span className="text-gold-400">Da Nang</span>
```

### Update Contact Information

Update phone numbers and links in:

- `components/Contact.tsx` - Contact section
- `components/MobileFooter.tsx` - Mobile footer

### Modify Tour Packages

Edit the `tours` array in `components/TourPackages.tsx` to add, remove, or modify tour packages.

### Update Driver Information

Modify the content in `components/AboutMe.tsx` to reflect your actual experience and details.

### Change Testimonials

Update the `testimonials` array in `components/Testimonials.tsx` with real customer reviews.

## Project Structure

```
driver-travel/
├── app/
│   ├── globals.css       # Global styles and fonts
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── AboutMe.tsx      # Driver profile
│   ├── TourPackages.tsx # Tour packages grid
│   ├── WhyChooseMe.tsx  # Features section
│   ├── Testimonials.tsx # Customer reviews
│   ├── Contact.tsx      # Contact form
│   └── MobileFooter.tsx # Sticky mobile footer
├── package.json
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
