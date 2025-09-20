# AI Boardroom Page Componentization Plan

## Overview
Plan to convert the AI Boardroom landing page sections into reusable Astro components for better maintainability, reusability, and code organization.

## Benefits
- **Reusability**: Components can be used across multiple landing pages
- **Maintainability**: Single source of truth for each component
- **Testing**: Easier to test individual components
- **Organization**: Cleaner file structure and separation of concerns
- **Scalability**: Easy to extend and modify for future pages

## Component Architecture

### Phase 1 - High-Value Reusable Components
**Priority: High | Effort: ~3,000 tokens | Time: 20-30 minutes**

```
components/
├── landing/
│   ├── LandingHeader.astro      # Logo + CTA button with responsive design
│   ├── LandingCTA.astro         # Form section with pricing and contact form
│   └── IconGrid.astro           # Solutions section with icon + text grid
```

#### LandingHeader.astro
- **Current section**: Header Section
- **Props**: `logoSrc`, `logoAlt`, `ctaText`, `ctaLink`, `showCTAOnMobile`
- **Reusability**: Very high - perfect for any landing page
- **Complexity**: Simple

#### LandingCTA.astro  
- **Current section**: Email Capture / CTA Section
- **Props**: `title`, `subtitle`, `formFields[]`, `ctaText`, `pricing`, `scarcityElements[]`
- **Reusability**: Very high - form patterns are universal
- **Complexity**: Complex (form handling, pricing display)

#### IconGrid.astro
- **Current section**: The Solution Section (4-column icon grid)
- **Props**: `title`, `subtitle`, `items[]` (icon, title, description), `columns`
- **Reusability**: High - great for features, services, benefits
- **Complexity**: Medium

### Phase 2 - Common Layout Patterns
**Priority: Medium | Effort: ~4,000 tokens | Time: 30-40 minutes**

```
components/
├── sections/
│   ├── HeroSection.astro        # Full-screen hero with background image
│   ├── AuthoritySection.astro   # Image + bio + credentials layout
│   ├── CardGrid.astro           # What's Coming session cards
│   ├── ProblemSection.astro     # Problem identification with cards
│   └── LandingFooter.astro      # Custom footer with CTA and links
```

#### HeroSection.astro
- **Current section**: Hero Section
- **Props**: `backgroundImage`, `title`, `subtitle`, `ctaText`, `ctaLink`, `height`
- **Reusability**: High - hero patterns are common
- **Complexity**: Medium

#### AuthoritySection.astro
- **Current section**: Authority Section (Guide Credentials)
- **Props**: `image`, `name`, `quote`, `credentials[]`, `backgroundColor`
- **Reusability**: High - testimonial/authority patterns
- **Complexity**: Medium

#### CardGrid.astro
- **Current section**: What's Coming Section
- **Props**: `title`, `subtitle`, `cards[]` (icon, title, subtitle, features[])
- **Reusability**: High - service cards, feature cards
- **Complexity**: Medium

#### ProblemSection.astro
- **Current section**: The Problem Section
- **Props**: `title`, `subtitle`, `problemCards[]`
- **Reusability**: Medium - problem/solution pattern
- **Complexity**: Medium

#### LandingFooter.astro
- **Current section**: Custom Footer
- **Props**: `title`, `subtitle`, `email`, `ctaText`, `ctaLink`, `socialLinks[]`, `credit`
- **Reusability**: High - footer patterns
- **Complexity**: Medium

### Phase 3 - Specialized Components
**Priority: Low | Effort: ~2,000 tokens | Time: 15-20 minutes**

```
components/
├── specialized/
│   ├── UrgencyBanner.astro      # Scarcity/urgency messaging
│   ├── FAQSection.astro         # FAQ with accordion
│   └── SocialProofSection.astro # Testimonials/badges
```

#### UrgencyBanner.astro
- **Current section**: Urgency Section
- **Props**: `message`, `backgroundColor`, `textColor`
- **Reusability**: Medium - urgency/scarcity patterns
- **Complexity**: Simple

#### FAQSection.astro
- **Current section**: FAQ Section
- **Props**: `title`, `faqs[]` (question, answer)
- **Reusability**: High - FAQ patterns are universal
- **Complexity**: Simple (uses existing FAQAccordion component)

#### SocialProofSection.astro
- **Current section**: Social Proof Section
- **Props**: `title`, `subtitle`, `badges[]`, `testimonials[]`
- **Reusability**: High - social proof is common
- **Complexity**: Simple

## Implementation Strategy

### Step 1: Extract High-Value Components
1. **LandingHeader.astro** - Start simple to establish patterns
2. **LandingCTA.astro** - High complexity but high value
3. **IconGrid.astro** - Good middle ground for pattern validation

### Step 2: Refactor Main Page
- Import new components
- Replace sections with component calls
- Test responsive behavior and styling

### Step 3: Iterate Based on Feedback
- Adjust prop interfaces based on usage
- Refine styling and responsive behavior
- Document component APIs

### Step 4: Expand to Remaining Components
- Continue with Phase 2 components
- Add Phase 3 components as needed

## Resource Estimates

### Token Usage
- **Phase 1**: ~3,000 tokens (3 components)
- **Phase 2**: ~4,000 tokens (5 components)  
- **Phase 3**: ~2,000 tokens (3 components)
- **Integration & Testing**: ~2,000 tokens
- **Total**: ~11,000 tokens

### Time Estimates
- **Phase 1**: 20-30 minutes
- **Phase 2**: 30-40 minutes
- **Phase 3**: 15-20 minutes
- **Integration & Testing**: 15-25 minutes
- **Total**: 80-115 minutes

## Example Component Usage

```astro
---
// ai-boardroom-upstate-sc.astro
import Layout from '../layouts/Layout.astro';
import LandingHeader from '../components/landing/LandingHeader.astro';
import HeroSection from '../components/sections/HeroSection.astro';
import LandingCTA from '../components/landing/LandingCTA.astro';
---

<Layout title="AI Boardroom for Upstate SC Tech Leaders">
  <LandingHeader 
    logoSrc="/logo/SVG/AI-bordroom-logo.svg"
    logoAlt="AI Boardroom Logo"
    ctaText="Reserve Your Seat"
    ctaLink="#reserve"
    showCTAOnMobile={false}
  />
  
  <HeroSection 
    backgroundImage="/ai-boardroom.jpg"
    title="Is Your Tech Company Stuck Between Startup and Scale?"
    subtitle="Upstate, SC Tech Company Leaders: Break Through the Growth Plateau with AI-Powered Strategic Advisory Boards"
    ctaText="Reserve My Leadership Seat"
    ctaLink="#reserve"
    height="h-[70vh] md:h-[80vh]"
  />
  
  <LandingCTA 
    title="Reserve Your Company's Strategic Planning Seat"
    formFields={['company', 'name', 'email', 'revenue', 'challenge']}
    ctaText="Secure My Leadership Seat"
    pricing={{
      founding: { price: 125, description: "Founding Member Rate", limit: "first 12 leaders" },
      regular: { price: 297, description: "Regular Price", when: "Starting with second session" }
    }}
  />
</Layout>
```

## Benefits After Implementation

1. **Code Reusability**: Components can be shared across multiple landing pages
2. **Easier Maintenance**: Update component once, changes reflect everywhere
3. **Better Testing**: Test components in isolation
4. **Faster Development**: New landing pages become mostly configuration
5. **Consistent Design**: Enforces design patterns across pages
6. **Better Documentation**: Component props serve as API documentation

## Next Steps

When ready to implement:
1. Start with Phase 1 components to validate approach
2. Get feedback on component structure and prop design
3. Proceed with full implementation based on learnings
4. Document component library for future use

---

*Created: 2025-01-20*  
*Status: Planning Phase*  
*Estimated Effort: 11,000 tokens, 80-115 minutes*