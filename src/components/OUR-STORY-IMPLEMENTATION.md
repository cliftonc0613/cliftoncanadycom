# Our Story Section - Implementation Guide
## Complete Extraction & Integration for Clifton Canady Website

**Source:** https://www.promptadvisers.com/about-us
**Date:** December 30, 2025
**Framework Target:** Astro + Tailwind CSS + React Components

---

## Table of Contents

1. [Overview](#overview)
2. [Timeline Content](#timeline-content)
3. [HTML Structure](#html-structure)
4. [CSS Styling & Animations](#css-styling--animations)
5. [Implementation for Astro](#implementation-for-astro)
6. [Step-by-Step Integration Guide](#step-by-step-integration-guide)
7. [Responsive Design](#responsive-design)
8. [Performance Considerations](#performance-considerations)

---

## Overview

The "Our Story" section is a **horizontal scrolling timeline** that showcases company milestones with:
- 5 milestone cards with dates, titles, and descriptions
- Background imagery with gradient overlay
- Card hover effects (lift, shadow, border glow)
- Image zoom animations on hover
- Mobile-responsive carousel using Swiper.js
- Professional typography and spacing

**Why This Design Works:**
- Tells a compelling narrative of company growth
- Interactive cards keep users engaged
- Horizontal scroll is intuitive for timeline storytelling
- Mobile-friendly with touch-optimized carousel
- Professional appearance with subtle animations

---

## Timeline Content

### Full Milestone Data

```json
{
  "milestones": [
    {
      "date": "Nov 2022",
      "title": "The Inception of Innovation",
      "description": "Just days after OpenAI's GPT-3.5 was unveiled, we at Prompt Advisers recognized the monumental shift it would bring to AI and business. With Mark Kashef's masterful expertise in AI and specialization in NLP, we saw a future redefined by generative AI.",
      "image": "/images/milestones/nov-2022.jpg"
    },
    {
      "date": "Feb 2023",
      "title": "Pioneers of Prompt Engineering",
      "description": "We transitioned from visionaries to educators, guiding individuals and businesses in harnessing the power of conversational AI. Our workshops on how to effectively utilize ChatGPT set a new standard for user interaction and system design.",
      "image": "/images/milestones/feb-2023.jpg"
    },
    {
      "date": "Jul 2023",
      "title": "Crafting Custom AI Solutions",
      "description": "As our expertise deepened, so did our services. We began creating basic applications, focusing on the art of prompt engineering to develop AI that could perform specific tasks with unmatched precision.",
      "image": "/images/milestones/jul-2023.jpg"
    },
    {
      "date": "Oct 2023",
      "title": "Expanding Horizons",
      "description": "Our journey led to the development of wide-scale applications and sophisticated web platforms. This evolution marked our entry into a realm where complex challenges met cutting-edge AI solutions, tailored to the needs of a diverse clientele.",
      "image": "/images/milestones/oct-2023.jpg"
    },
    {
      "date": "March 2025",
      "title": "The AI Integration Specialists",
      "description": "Today, we stand at the forefront of practical AI implementation, offering strategic consulting, custom solution development, and specialized educational programs. Our experience across 500+ projects provides unparalleled insight into successful AI adoption pathways.",
      "image": "/images/milestones/march-2025.jpg"
    }
  ]
}
```

### Adapt for Clifton Canady

Replace the above with Clifton's journey:

```json
{
  "milestones": [
    {
      "date": "2015",
      "title": "WordPress Development Begins",
      "description": "Started building custom WordPress sites, developing expertise in theme development and plugin architecture.",
      "image": "/images/milestones/wordpress-start.jpg"
    },
    {
      "date": "2018",
      "title": "Content Writing Services Launch",
      "description": "Expanded offerings to include SEO-optimized content writing, technical writing, and copywriting services.",
      "image": "/images/milestones/content-writing.jpg"
    },
    {
      "date": "2020",
      "title": "Speaking & Seminars",
      "description": "Started delivering keynotes and workshops on WordPress development, digital marketing, and web strategy.",
      "image": "/images/milestones/speaking.jpg"
    },
    {
      "date": "2022",
      "title": "Photography Services",
      "description": "Added professional photography services including corporate headshots, event photography, and product photography.",
      "image": "/images/milestones/photography.jpg"
    },
    {
      "date": "2024",
      "title": "Multi-Disciplinary Expert",
      "description": "Integrated all services into a cohesive brand offering complete digital solutions for businesses.",
      "image": "/images/milestones/integrated-services.jpg"
    }
  ]
}
```

---

## HTML Structure

### Original Webflow Structure

```html
<!-- Our Story Section Container -->
<section class="our-story-section">
  <div class="container">
    <!-- Section Label -->
    <div class="section-label">always Committed to our clients</div>

    <!-- Section Title -->
    <h2 class="section-title">Our Story</h2>

    <!-- Background Image -->
    <img src="/images/timeline-background.jpg" alt="Timeline Background" class="timeline-bg-image">

    <!-- Timeline Items Container -->
    <div class="timeline-container">

      <!-- Timeline Item 1 -->
      <div class="timeline-item" data-date="Nov 2022">
        <div class="timeline-date">Nov 2022</div>
        <div class="timeline-content">
          <h3 class="timeline-title">The Inception of Innovation</h3>
          <p class="timeline-description">
            Just days after OpenAI's GPT-3.5 was unveiled, we at Prompt Advisers recognized the monumental shift it would bring to AI and business...
          </p>
        </div>
        <div class="timeline-image">
          <img src="/images/nov-2022-milestone.jpg" alt="The Inception of Innovation" class="milestone-photo">
        </div>
      </div>

      <!-- Timeline Item 2 -->
      <div class="timeline-item" data-date="Feb 2023">
        <div class="timeline-date">Feb 2023</div>
        <div class="timeline-content">
          <h3 class="timeline-title">Pioneers of Prompt Engineering</h3>
          <p class="timeline-description">
            We transitioned from visionaries to educators, guiding individuals and businesses in harnessing the power of conversational AI...
          </p>
        </div>
        <div class="timeline-image">
          <img src="/images/feb-2023-milestone.jpg" alt="Pioneers of Prompt Engineering" class="milestone-photo">
        </div>
      </div>

      <!-- Repeat for remaining items -->

    </div>
    <!-- End Timeline Container -->
  </div>
</section>
```

---

## CSS Styling & Animations

### Complete CSS Code

```css
/* ========================================
   OUR STORY SECTION - MAIN STYLES
   ======================================== */

/* Section Container */
.our-story-section {
  position: relative;
  padding: 80px 40px;
  background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
  overflow: hidden;
}

/* Section Label (Eyebrow Text) */
.section-label {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 20px;
}

/* Section Title */
.section-title {
  font-size: 48px;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 60px;
  font-family: "Plus Jakarta Sans", "Poppins", sans-serif;
  line-height: 1.2;
}

/* Background Image */
.timeline-bg-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}

/* Timeline Container - Horizontal Scroll */
.timeline-container {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 20px 0;
  scroll-behavior: smooth;
  position: relative;
  z-index: 1;
  /* Remove scrollbar for cleaner appearance */
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f3f4f6;
}

.timeline-container::-webkit-scrollbar {
  height: 8px;
}

.timeline-container::-webkit-scrollbar-track {
  background: #f3f4f6;
}

.timeline-container::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}

.timeline-container::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* Individual Timeline Item Card */
.timeline-item {
  flex: 0 0 280px;
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* ⭐ HOVER EFFECT - Card Lift */
.timeline-item:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-8px);
  border-color: #3b82f6;
}

/* Active/Focus State */
.timeline-item:focus-within {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Timeline Date */
.timeline-date {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  font-family: "Plus Jakarta Sans", "Poppins", sans-serif;
}

/* Timeline Content Wrapper */
.timeline-content {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

/* Timeline Title */
.timeline-title {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
  line-height: 1.4;
  font-family: "Plus Jakarta Sans", "Poppins", sans-serif;
}

/* Timeline Description */
.timeline-description {
  font-size: 14px;
  line-height: 1.6;
  color: #6b7280;
  margin: 0;
  flex-grow: 1;
}

/* Timeline Image Container */
.timeline-image {
  margin-top: 16px;
  border-radius: 8px;
  overflow: hidden;
  height: 200px;
}

/* Milestone Photo */
.milestone-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* ⭐ HOVER EFFECT - Image Zoom */
.timeline-item:hover .milestone-photo {
  transform: scale(1.05);
}

/* ========================================
   ANIMATIONS (KEYFRAMES)
   ======================================== */

/* Card Lift Animation */
@keyframes cardLift {
  0% {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    transform: translateY(0);
  }
  100% {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-8px);
  }
}

/* Image Zoom Animation */
@keyframes imageZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

/* Border Glow Animation */
@keyframes borderGlow {
  0% {
    border-color: #e5e7eb;
  }
  100% {
    border-color: #3b82f6;
  }
}

/* Fade In Animation (for initial load) */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-item {
  animation: fadeInUp 0.6s ease-out;
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */

/* Tablet Breakpoint */
@media (max-width: 991px) {
  .our-story-section {
    padding: 60px 24px;
  }

  .section-title {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .timeline-item {
    flex: 0 0 250px;
    padding: 20px;
  }

  .timeline-date {
    font-size: 16px;
  }

  .timeline-title {
    font-size: 16px;
  }

  .timeline-description {
    font-size: 13px;
  }
}

/* Mobile Breakpoint */
@media (max-width: 767px) {
  .our-story-section {
    padding: 40px 16px;
  }

  .section-label {
    font-size: 12px;
    margin-bottom: 16px;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .timeline-item {
    flex: 0 0 280px;
    padding: 16px;
  }

  .timeline-date {
    font-size: 16px;
  }

  .timeline-title {
    font-size: 16px;
  }

  .timeline-image {
    height: 180px;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .our-story-section {
    padding: 30px 12px;
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .timeline-item {
    flex: 0 0 270px;
    padding: 12px;
    gap: 8px;
  }

  .timeline-date {
    font-size: 14px;
  }

  .timeline-title {
    font-size: 14px;
  }

  .timeline-description {
    font-size: 12px;
  }

  .timeline-image {
    height: 160px;
    margin-top: 12px;
  }
}
```

---

## Implementation for Astro

### Step 1: Create the Astro Component

**File:** `src/components/OurStory.astro`

```astro
---
// OurStory.astro
import "../styles/our-story.css";

interface Milestone {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface Props {
  heading?: string;
  subtitle?: string;
  milestones: Milestone[];
  backgroundColor?: string;
}

const {
  heading = "Our Story",
  subtitle = "Our Journey So Far",
  milestones,
  backgroundColor = "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
} = Astro.props;
---

<section
  class="our-story-section"
  style={`background: ${backgroundColor};`}
>
  <div class="container">
    {subtitle && <div class="section-label">{subtitle}</div>}
    <h2 class="section-title">{heading}</h2>

    <div class="timeline-container">
      {
        milestones.map((milestone) => (
          <div class="timeline-item" data-date={milestone.date}>
            <div class="timeline-date">{milestone.date}</div>
            <div class="timeline-content">
              <h3 class="timeline-title">{milestone.title}</h3>
              <p class="timeline-description">{milestone.description}</p>
            </div>
            <div class="timeline-image">
              <img
                src={milestone.image}
                alt={milestone.title}
                class="milestone-photo"
                loading="lazy"
              />
            </div>
          </div>
        ))
      }
    </div>
  </div>
</section>
```

### Step 2: Create Tailwind CSS Version

**File:** `src/components/OurStoryTailwind.astro`

```astro
---
// OurStoryTailwind.astro - Using Tailwind CSS instead of custom CSS

interface Milestone {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface Props {
  heading?: string;
  subtitle?: string;
  milestones: Milestone[];
}

const {
  heading = "Our Story",
  subtitle = "Our Journey So Far",
  milestones,
} = Astro.props;
---

<section class="relative py-20 px-6 bg-gradient-to-br from-white to-gray-100 overflow-hidden md:py-24 md:px-10">
  <div class="container mx-auto max-w-7xl">
    {subtitle && (
      <div class="text-sm font-semibold tracking-widest text-gray-600 uppercase mb-5">
        {subtitle}
      </div>
    )}
    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 font-sans">
      {heading}
    </h2>

    <!-- Timeline Container with Horizontal Scroll -->
    <div class="flex gap-6 overflow-x-auto pb-4 scroll-smooth relative z-10 -mx-6 px-6 md:-mx-10 md:px-10">
      {
        milestones.map((milestone) => (
          <div
            class="flex-shrink-0 w-72 bg-white rounded-lg p-6 shadow-md border border-gray-200 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500 flex flex-col"
            data-date={milestone.date}
          >
            {/* Date */}
            <div class="text-lg font-bold text-gray-900 mb-3">
              {milestone.date}
            </div>

            {/* Content */}
            <div class="flex-grow">
              <h3 class="text-lg font-bold text-gray-900 mb-4 leading-snug">
                {milestone.title}
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>

            {/* Image */}
            <div class="mt-4 rounded-lg overflow-hidden h-48">
              <img
                src={milestone.image}
                alt={milestone.title}
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))
      }
    </div>
  </div>
</section>
```

### Step 3: Create CSS File

**File:** `src/styles/our-story.css`

```css
/* Copy the complete CSS code from the "CSS Styling & Animations" section above */

.our-story-section {
  position: relative;
  padding: 80px 40px;
  background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
  overflow: hidden;
}

/* ... rest of CSS ... */
```

### Step 4: Create React Component (Alternative)

**File:** `src/components/OurStory.tsx`

```typescript
import React from 'react';
import '../styles/our-story.css';

interface Milestone {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface OurStoryProps {
  heading?: string;
  subtitle?: string;
  milestones: Milestone[];
  backgroundColor?: string;
}

export const OurStory: React.FC<OurStoryProps> = ({
  heading = "Our Story",
  subtitle = "Our Journey So Far",
  milestones,
  backgroundColor = "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
}) => {
  return (
    <section
      className="our-story-section"
      style={{ background: backgroundColor }}
    >
      <div className="container">
        {subtitle && <div className="section-label">{subtitle}</div>}
        <h2 className="section-title">{heading}</h2>

        <div className="timeline-container">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item" data-date={milestone.date}>
              <div className="timeline-date">{milestone.date}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
              <div className="timeline-image">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="milestone-photo"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Step 5: Use in Your Page

**File:** `src/pages/about.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import OurStory from '../components/OurStory.astro';

// Define your milestones
const milestones = [
  {
    date: "2015",
    title: "WordPress Development Begins",
    description: "Started building custom WordPress sites, developing expertise in theme development and plugin architecture.",
    image: "/images/milestones/wordpress-start.jpg"
  },
  {
    date: "2018",
    title: "Content Writing Services Launch",
    description: "Expanded offerings to include SEO-optimized content writing, technical writing, and copywriting services.",
    image: "/images/milestones/content-writing.jpg"
  },
  {
    date: "2020",
    title: "Speaking & Seminars",
    description: "Started delivering keynotes and workshops on WordPress development, digital marketing, and web strategy.",
    image: "/images/milestones/speaking.jpg"
  },
  {
    date: "2022",
    title: "Photography Services",
    description: "Added professional photography services including corporate headshots, event photography, and product photography.",
    image: "/images/milestones/photography.jpg"
  },
  {
    date: "2024",
    title: "Multi-Disciplinary Expert",
    description: "Integrated all services into a cohesive brand offering complete digital solutions for businesses.",
    image: "/images/milestones/integrated-services.jpg"
  }
];
---

<Layout title="About Clifton Canady">
  <OurStory
    heading="Our Story"
    subtitle="My Journey"
    milestones={milestones}
  />
</Layout>
```

---

## Step-by-Step Integration Guide

### Phase 1: Preparation (30 minutes)

1. **Gather Your Images**
   - Collect 5 high-quality images representing your journey milestones
   - Optimize images (WebP format recommended)
   - Store in `/public/images/milestones/`

   ```bash
   # Create directory structure
   mkdir -p public/images/milestones
   ```

2. **Define Your Milestones**
   - Write compelling titles and descriptions
   - Keep descriptions 2-3 sentences (readability)
   - Use active voice and storytelling language

3. **Choose Implementation Method**
   - **Option A:** Pure Astro component (recommended)
   - **Option B:** Tailwind CSS version
   - **Option C:** React component for more interactivity

### Phase 2: Implementation (1-2 hours)

1. **Create Component**
   ```bash
   # Create the component file
   touch src/components/OurStory.astro
   ```

2. **Add Styles**
   ```bash
   # Create styles directory if needed
   mkdir -p src/styles
   touch src/styles/our-story.css
   ```

3. **Copy Code**
   - Copy the component code from Step 1
   - Copy the CSS code from the CSS section
   - Update image paths to match your setup

4. **Create Milestone Data**
   - Create `src/data/milestones.ts` for data management

   ```typescript
   // src/data/milestones.ts
   export const cliftonMilestones = [
     // ... your milestones array
   ];
   ```

5. **Add to Page**
   - Import component in your about page
   - Pass milestones data as props
   - Test on desktop and mobile

### Phase 3: Customization (1-2 hours)

1. **Colors**
   - Update gradient background
   - Change hover border color (#3b82f6 is blue)
   - Adjust shadow colors if needed

   ```css
   /* Customize in our-story.css */
   .our-story-section {
     background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%);
   }

   .timeline-item:hover {
     border-color: #your-accent-color;
   }
   ```

2. **Typography**
   - Update font families to match your brand
   - Adjust font sizes for your design system

   ```css
   .section-title {
     font-family: "Your Font", sans-serif;
     font-size: 48px; /* Adjust as needed */
   }
   ```

3. **Spacing**
   - Adjust padding/margins for your layout
   - Change gap between cards (currently 24px)
   - Modify card width (currently 280px)

4. **Animations**
   - Adjust hover translate distance (-8px is current)
   - Change image zoom scale (1.05 is 5% zoom)
   - Modify transition duration (0.3s is current)

### Phase 4: Testing (30 minutes)

1. **Desktop Testing**
   - Horizontal scroll works smoothly
   - Hover effects work correctly
   - Images load properly
   - No layout shifts

2. **Mobile Testing**
   - Timeline scrolls horizontally on mobile
   - Cards are properly sized
   - Images display correctly
   - Touch interactions feel smooth

3. **Performance**
   - Use DevTools to check load times
   - Verify images are lazy-loaded
   - Check Lighthouse scores

4. **Accessibility**
   - Test with keyboard navigation
   - Verify color contrast
   - Test with screen readers

### Phase 5: Optimization (Optional)

1. **Add Swiper.js for Mobile** (if native scroll isn't enough)

   ```bash
   npm install swiper
   ```

   ```typescript
   // Add this to your component for touch-optimized carousel
   import Swiper from 'swiper';
   import 'swiper/css';

   document.addEventListener('DOMContentLoaded', () => {
     if (window.innerWidth < 991) {
       new Swiper('.timeline-container', {
         slidesPerView: 1.25,
         spaceBetween: 24,
         grabCursor: true,
       });
     }
   });
   ```

2. **Add Analytics Tracking**
   - Track which milestones users interact with
   - Monitor scroll engagement

3. **SEO Optimization**
   - Add schema.org markup for timeline
   - Optimize image alt text

---

## Responsive Design

### Breakpoints

| Breakpoint | Width | Changes |
|-----------|-------|---------|
| Desktop | 1024px+ | Full design, 280px cards |
| Tablet | 768px - 1023px | 250px cards, adjusted padding |
| Mobile | < 767px | 280px cards, smaller typography |
| Small | < 480px | 270px cards, reduced spacing |

### Mobile Considerations

1. **Touch-Friendly**
   - Larger touch targets (cards are 280px wide)
   - Adequate spacing between cards (24px gap)
   - Smooth horizontal scrolling

2. **Performance**
   - Lazy load images
   - Optimize image sizes
   - Use WebP with fallbacks

3. **Orientation**
   - Test in both portrait and landscape
   - Adjust card width if needed

---

## Performance Considerations

### Image Optimization

```astro
<!-- Use responsive images -->
<img
  src={milestone.image}
  alt={milestone.title}
  class="milestone-photo"
  loading="lazy"
  width="280"
  height="200"
  decoding="async"
/>
```

### CSS Optimization

1. **Minimize Repaints**
   - Use `transform` for animations (not positioning)
   - Use `opacity` instead of color transitions where possible

2. **Reduce Bundling**
   - Keep CSS in separate file
   - Use CSS Grid/Flexbox (no libraries needed)

3. **Lazy Load Content**
   - Use Intersection Observer for animations
   - Load images on demand

### JavaScript Optimization

- Minimal JS required (pure CSS for hover effects)
- Only add Swiper.js if needed for mobile
- Use event delegation for click handlers

---

## Customization Examples

### Example 1: Dark Theme

```css
.our-story-section {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
}

.section-title {
  color: #ffffff;
}

.timeline-item {
  background: #374151;
  border-color: #4b5563;
}

.timeline-item:hover {
  border-color: #60a5fa;
  background: #4b5563;
}

.timeline-description {
  color: #d1d5db;
}
```

### Example 2: Minimal Style

```css
.our-story-section {
  background: #ffffff;
  padding: 60px 40px;
}

.timeline-item {
  border: none;
  box-shadow: none;
  padding: 20px;
  border-bottom: 2px solid #e5e7eb;
}

.timeline-item:hover {
  border-bottom-color: #3b82f6;
  box-shadow: none;
  transform: none;
}
```

### Example 3: Card-Based Layout

```css
.timeline-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  overflow: visible;
}

.timeline-item {
  flex: none;
}
```

---

## SEO & Accessibility

### Schema Markup

```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "{milestone.title}",
  "description": "{milestone.description}",
  "startDate": "{milestone.date}",
  "image": "{milestone.image}"
}
</script>
```

### Accessibility

```html
<!-- Add ARIA labels -->
<section
  class="our-story-section"
  aria-label="Company history timeline"
>
  <div class="timeline-container" role="region" aria-label="Timeline milestones">
    <!-- Timeline items -->
  </div>
</section>

<!-- Keyboard navigation -->
<div class="timeline-item" tabindex="0" role="button">
  <!-- Content -->
</div>
```

---

## Troubleshooting

### Issue: Horizontal scroll not working on mobile

**Solution:**
- Ensure parent container has `overflow-x: auto`
- Check that child items have `flex-shrink: 0`
- Test with actual mobile device (not just DevTools)

### Issue: Images not loading

**Solution:**
- Verify image paths are correct
- Check image dimensions
- Use absolute paths (e.g., `/images/milestones/...`)

### Issue: Hover effects not working

**Solution:**
- Check CSS is imported correctly
- Verify class names match
- Clear browser cache
- Check for CSS specificity conflicts

### Issue: Poor performance on mobile

**Solution:**
- Reduce image file sizes
- Add `loading="lazy"` to images
- Use WebP format with fallbacks
- Test with Lighthouse

---

## File Structure

```
src/
├── components/
│   ├── OurStory.astro
│   ├── OurStoryTailwind.astro
│   └── OurStory.tsx (if using React)
├── styles/
│   └── our-story.css
├── data/
│   └── milestones.ts
└── pages/
    └── about.astro

public/
└── images/
    └── milestones/
        ├── milestone-1.jpg
        ├── milestone-2.jpg
        ├── milestone-3.jpg
        ├── milestone-4.jpg
        └── milestone-5.jpg
```

---

## Quick Start Checklist

- [ ] Gather and optimize 5 milestone images
- [ ] Write compelling milestone titles and descriptions
- [ ] Create `src/components/OurStory.astro`
- [ ] Create `src/styles/our-story.css`
- [ ] Add milestones data to your about page
- [ ] Test on desktop (Chrome, Safari, Firefox)
- [ ] Test on mobile (iOS Safari, Chrome Android)
- [ ] Verify images load with proper aspect ratios
- [ ] Check hover effects work smoothly
- [ ] Validate HTML and CSS
- [ ] Run Lighthouse audit
- [ ] Deploy and monitor performance

---

## References

**Original Design:** https://www.promptadvisers.com/about-us
**Extraction Date:** December 30, 2025
**Framework:** Astro 4.0+ with Tailwind CSS
**Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)

---

## Next Steps

1. **Implement the component** following the Phase 1-5 guide
2. **Customize colors and typography** to match your brand
3. **Add your milestone data** with compelling narratives
4. **Test thoroughly** on all devices
5. **Monitor analytics** to see user engagement
6. **Iterate and improve** based on feedback

Good luck! This timeline section will be a powerful addition to your about page.
