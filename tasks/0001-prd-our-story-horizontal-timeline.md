# PRD: Our Story Horizontal Timeline Section

**Document ID:** 0001-prd-our-story-horizontal-timeline
**Feature Name:** OurStoryHorizontal Component
**Date:** December 30, 2025
**Status:** Ready for Implementation

---

## 1. Introduction/Overview

Create a horizontal scrolling timeline section that showcases Clifton Canady's professional journey. The design is adapted from Prompt Advisers' "Our Story" section, featuring interactive milestone cards with background images, hover effects, and GSAP scroll animations.

**Problem Solved:** Currently, the website lacks a compelling visual narrative of Clifton's career evolution. This timeline will establish credibility and guide visitors through his multi-disciplinary expertise.

---

## 2. Goals

1. **Engagement:** Create an interactive timeline that keeps visitors engaged
2. **Storytelling:** Visually communicate Clifton's professional journey
3. **Credibility:** Establish authority through milestone achievements
4. **Mobile-Friendly:** Provide smooth carousel experience on touch devices
5. **Brand Consistency:** Use existing brand colors (Primary #3D4E76, Accent #F66733)

---

## 3. User Stories

1. **As a potential client**, I want to see Clifton's career progression so I can understand his expertise and trust his services.

2. **As a mobile user**, I want to swipe through timeline cards so I can easily explore his journey on my phone.

3. **As a desktop user**, I want to hover over cards and see engaging animations so the experience feels premium and interactive.

4. **As a visitor**, I want the timeline to load quickly and animate smoothly so I have a positive experience.

---

## 4. Functional Requirements

### 4.1 Section Structure
1. The section MUST display a label/tagline ("THE JOURNEY" or similar)
2. The section MUST display a main heading ("My Story")
3. The section MUST contain 5 milestone cards in chronological order
4. The section MUST use brand colors (Primary blue, Accent orange)

### 4.2 Milestone Cards
Each milestone card MUST include:
1. Date/year (2015, 2018, 2020, 2022, 2024)
2. Title headline
3. Description paragraph (2-3 sentences)
4. Background image from existing site images

### 4.3 Milestone Content
| Date | Title | Description | Image |
|------|-------|-------------|-------|
| 2015 | WordPress Development Begins | Started building custom WordPress sites, developing expertise in theme development and plugin architecture. | `/images/web-developer-code.jpg` |
| 2018 | Content Writing Services Launch | Expanded offerings to include SEO-optimized content writing, technical writing, and copywriting services. | `/images/clifton-canady-content-creator.jpg` |
| 2020 | Speaking & Seminars | Started delivering keynotes and workshops on WordPress development, digital marketing, and web strategy. | `/images/speaking-seminars.jpg` |
| 2022 | Photography Services | Added professional photography services including corporate headshots, event photography, and product photography. | `/images/clifton-canady-photography.jpg` |
| 2024 | Multi-Disciplinary Expert | Integrated all services into a cohesive brand offering complete digital solutions for businesses. | `/images/Team-Corporate-Consulting.png` |

### 4.4 Hover Effects (Desktop)
1. Card MUST lift upward (-8px translateY) on hover
2. Card MUST show enhanced shadow (shadow-2xl) on hover
3. Card border MUST change to accent color on hover
4. Background image MUST zoom slightly (scale 1.05) on hover
5. All hover transitions MUST be 300ms ease-out

### 4.5 Scroll Animations (GSAP)
1. Cards MUST fade in and slide up on scroll into view
2. Cards MUST stagger their entrance (0.15s delay between each)
3. Animation MUST trigger when section is 80% in viewport
4. Section header MUST animate before cards

### 4.6 Mobile Carousel (Swiper.js)
1. On mobile (<768px), timeline MUST use touch-friendly swiper
2. Swiper MUST show 1.25 cards at a time (peek next card)
3. Swiper MUST have pagination dots
4. Swiper MUST support touch/swipe gestures

### 4.7 Responsive Design
1. Desktop (1024px+): Horizontal scroll with 280px cards
2. Tablet (768px-1023px): Horizontal scroll with 250px cards
3. Mobile (<768px): Swiper carousel with full-width cards

---

## 5. Non-Goals (Out of Scope)

1. **NOT** implementing a vertical timeline (use existing OurStory.astro for that)
2. **NOT** adding video content to milestones
3. **NOT** creating a CMS-editable milestone system
4. **NOT** adding filtering or search functionality
5. **NOT** implementing dark mode (can be added later)

---

## 6. Design Considerations

### 6.1 Visual Style
- **Background:** White to light gray gradient
- **Card Background:** White with subtle shadow
- **Primary Text:** #3D4E76 (foreground)
- **Accent Color:** #F66733 (orange for highlights)
- **Typography:** Poppins for headings, default for body

### 6.2 Layout
- Horizontal scroll container with overflow-x: auto
- Cards are 280px wide (flex-shrink: 0)
- 24px gap between cards
- Full-bleed section extending to edges

### 6.3 Suggested Header Text
- **Tagline:** "THE JOURNEY"
- **Heading:** "My Story"

---

## 7. Technical Considerations

### 7.1 Dependencies
- **GSAP + ScrollTrigger:** For scroll animations (already in project)
- **Swiper.js:** For mobile carousel (needs to be added)

### 7.2 File Structure
```
src/
├── components/
│   └── OurStoryHorizontal.astro
├── styles/
│   └── our-story-horizontal.css (or inline Tailwind)
```

### 7.3 Integration
- Component will replace OurStory and MyServices on test page
- Uses existing images from `/public/images/`
- Follows existing Astro component patterns

### 7.4 Performance
- Lazy load milestone images
- Use `loading="lazy"` and `decoding="async"`
- Minimize JS bundle with conditional Swiper loading

---

## 8. Success Metrics

1. **Engagement:** Users scroll through at least 3 milestone cards
2. **Performance:** Section loads in <1 second
3. **Mobile:** Touch swipe works smoothly on iOS/Android
4. **Accessibility:** Passes WCAG 2.1 AA standards
5. **Visual:** Hover animations run at 60fps

---

## 9. Open Questions

1. ~~What specific dates/years to use for milestones?~~ **RESOLVED:** 2015, 2018, 2020, 2022, 2024
2. ~~Which images to use for each milestone?~~ **RESOLVED:** Using existing site images
3. ~~What title/tagline for section header?~~ **RESOLVED:** "THE JOURNEY" / "My Story"
4. Should milestone cards link to dedicated pages? **DECISION:** No, keep as display-only for MVP

---

## 10. Implementation Checklist

- [ ] Install Swiper.js dependency
- [ ] Create OurStoryHorizontal.astro component
- [ ] Add CSS styles (Tailwind or custom CSS file)
- [ ] Implement GSAP scroll animations
- [ ] Implement Swiper for mobile breakpoint
- [ ] Add to test page for preview
- [ ] Test hover effects on desktop
- [ ] Test swiper on mobile devices
- [ ] Verify lazy loading images
- [ ] Run Lighthouse audit
- [ ] Commit and push changes

---

**Approved By:** User
**Implementation Target:** Immediate
