# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2025-12-27

### Added

#### Blog Content & SEO
- **Portfolio-First Learning Blog Post**: Comprehensive 3,500+ word blog post with 92-93% human-written score
  - Five-stage editing process for authentic voice targeting 17-24 year-old audience
  - SEO optimization with schema markup for Article and BreadcrumbList
  - External research citations and authoritative links
  - Strategic CTAs linking to AI Training Youth course
- **AI as Business Tool Enhancements**: Strategic improvements to blog post content
  - Enhanced readability and authentic voice
  - Improved SEO metadata and descriptions
  - Better alignment with target audience needs

#### Technical Features
- **Scheduled Publishing Support**: Added `publishDate` field to blog content configuration
  - Allows content to be created in advance and published at specific dates
  - Separate from `pubDate` for better content workflow management
- **Draft Status Support**: Blog posts can now be marked as drafts to prevent public visibility
- **Schema Markup**: JSON-LD structured data for improved SEO
  - Article schema with author, publisher, and publication details
  - BreadcrumbList schema for better navigation understanding

#### Distribution Strategy
- **Video Scripts**: Platform-specific video scripts for social media distribution
  - YouTube long-form content strategy
  - Instagram Reels, TikTok, and YouTube Shorts scripts
  - LinkedIn professional content scripts
- **Social Media Copy**: Ready-to-publish social media content
  - Platform-optimized captions and hashtags
  - Engagement-focused copy variations
  - Distribution workflow documentation

### Changed
- **Blog Post Presentation**: Enhanced blog detail pages with schema markup integration
- **Blog Listing**: Improved blog index with better filtering and date handling
- **Content Configuration**: Updated blog content schema to support scheduling and draft status

### Improved
- **Authenticity Scoring**: Achieved 92-93% human-written score on Portfolio-First Learning post
  - Removed em-dashes for more natural tone
  - Implemented conversational language patterns
  - Enhanced readability for target demographic
- **SEO Optimization**: Comprehensive on-page SEO improvements
  - Meta descriptions optimized for click-through
  - Strategic keyword placement
  - External link integration for authority

### Documentation
- Created comprehensive distribution content documentation
- Established blog writing workflow and quality standards
- Documented scheduled publishing process

---

## [1.2.0] - 2025-12-26

### Added
- Enhanced WIOA section messaging emphasizing "Launch your AI career at zero cost" for stronger call-to-action

### Changed
- **Job Cards Visual Update**: Alternating orange/blue color scheme for job cards on AI Training Youth landing page
  - Odd-indexed cards now use orange (--accent) background
  - Even-indexed cards use blue (--primary) background
  - Provides better visual distinction and engagement
- **Testimonial Cards Redesign**: Cleaner, modern appearance with border removal
  - Removed left border styling for simplified card design
  - Maintained readability while improving visual flow
- Updated pricing section copy to strengthen career launch messaging and urgency

### Visual Improvements
- Job cards alternating color pattern creates dynamic visual rhythm
- Testimonial cards simplified aesthetic aligns with modern design trends
- WIOA section messaging optimized for conversion

---

## [1.1.0] - 2025-12-26

### Added

#### Curriculum Disclosure Feature
- **8-Week AI Training Curriculum**: Complete curriculum data structure with all 8 weeks of course content, including session titles, descriptions, and learning outcomes
- **Curriculum Disclosure Components**: New React components for displaying curriculum information in an accessible, user-friendly format
- **Responsive Disclosure UI**: Mobile-optimized accordion-style curriculum display with smooth animations and enhanced styling
- **Integrated Curriculum Section**: Full integration of curriculum disclosure component into AI Training landing page

#### Landing Page Enhancements
- Enhanced AI training week badges with improved visual design
- Updated hero section height for better visual impact on AI training course landing page
- Improved testimonial badge styling with custom specifications
- Refined job badge sizing and styling for better visual balance

### Fixed
- Fixed modal not opening issue on youth landing page
- Resolved React component errors in AI training week badges
- Fixed testimonial badge display issues with !important flags for consistent styling

### Changed
- Updated youth landing page pricing strategy to lead with FREE offer (Russell Brunson's WIOA funnel strategy)
- Simplified youth LP to 100% FREE focus, removing all $2,999 mentions for clarity
- Implemented Donald Miller + Russell Brunson pricing strategy across landing pages
- Removed 'Now:' prefix from testimonial job badges for cleaner presentation
- Refined testimonial badges with smaller size and uppercase styling

### Improved
- Complete UI premium implementation across AI training landing pages
- Full SEO optimization for AI training course content
- Enhanced content optimization for better user engagement
- Critical improvements to youth AI training landing page structure and messaging

---

## [1.0.0] - 2025-12-24

### Added
- Initial release of Clifton T. Canady personal brand website
- AI Training landing pages with comprehensive course information
- Blog functionality with date display and content management
- Professional photography portfolio integration
- StoryBrand messaging framework implementation
- Mobile-responsive design with shadcn/ui components

### Infrastructure
- Astro static site generation setup
- Tailwind CSS styling system
- GSAP animations and HeadroomJS navigation
- Netlify deployment configuration
- GitHub repository integration

---

[1.3.0]: https://github.com/cliftoncanady/cliftoncanady.com/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/cliftoncanady/cliftoncanady.com/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/cliftoncanady/cliftoncanady.com/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/cliftoncanady/cliftoncanady.com/releases/tag/v1.0.0
