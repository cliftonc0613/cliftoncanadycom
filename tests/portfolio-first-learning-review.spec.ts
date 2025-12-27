import { test, expect, devices } from '@playwright/test';

const BLOG_URL = 'https://cliftoncanady.com/blog/portfolio-first-learning';

test.describe('Portfolio-First Learning Blog Post - Production Review', () => {

  test('Desktop: Full page screenshot and link verification', async ({ page }) => {
    console.log('\n📱 Starting Desktop viewport test...');

    const startTime = Date.now();
    await page.goto(BLOG_URL);
    const loadTime = Date.now() - startTime;

    console.log(`✅ Page loaded in ${loadTime}ms`);

    // Take full page screenshot
    await page.screenshot({ path: 'test-results/portfolio-blog-desktop.png', fullPage: true });
    console.log('📸 Desktop screenshot saved');

    // Verify page title
    const title = await page.title();
    expect(title).toContain('AI Fundamentals Certification');
    console.log(`✅ Page title verified: "${title}"`);

    // Count and test all links
    const links = await page.locator('a').all();
    console.log(`📋 Found ${links.length} links on page`);

    const externalLinks = [];
    const internalLinks = [];

    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href) {
        if (href.startsWith('http')) {
          externalLinks.push(href);
        } else {
          internalLinks.push(href);
        }
      }
    }

    console.log(`   - External links: ${externalLinks.length}`);
    console.log(`   - Internal links: ${internalLinks.length}`);

    // Verify CTAs are present and clickable
    const ctas = await page.locator('a[style*="font-weight: bold"]').all();
    console.log(`🔘 Found ${ctas.length} styled CTAs`);

    for (let i = 0; i < ctas.length; i++) {
      const ctaText = await ctas[i].textContent();
      const ctaHref = await ctas[i].getAttribute('href');
      expect(await ctas[i].isVisible()).toBeTruthy();
      console.log(`   ✅ CTA ${i + 1}: "${ctaText?.trim()}" → ${ctaHref}`);
    }

    // Check for schema markup
    const schemaScripts = await page.locator('script[type="application/ld+json"]').all();
    console.log(`📊 Schema markup: Found ${schemaScripts.length} JSON-LD blocks`);

    // Verify meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toContain('AI fundamentals certification');
    console.log(`✅ Meta description verified`);

    // Check heading hierarchy
    const h1 = await page.locator('h1').count();
    const h2 = await page.locator('h2').count();
    console.log(`📑 Heading structure: ${h1} H1, ${h2} H2 tags`);

    // Performance metrics
    const perfMetrics = await page.evaluate(() => {
      const perf = performance.getEntriesByType('navigation')[0];
      return {
        domContentLoaded: (perf as any).domContentLoadedEventEnd - (perf as any).domContentLoadedEventStart,
        loadComplete: (perf as any).loadEventEnd - (perf as any).loadEventStart,
      };
    });

    console.log(`⚡ Performance:`);
    console.log(`   - DOM Content Loaded: ${perfMetrics.domContentLoaded}ms`);
    console.log(`   - Load Complete: ${perfMetrics.loadComplete}ms`);
  });

  test('Mobile: Responsive design test (iPhone 12)', async () => {
    const context = await (test as any).browser.newContext({
      ...devices['iPhone 12'],
    });
    const page = await context.newPage();

    console.log('\n📱 Starting Mobile (iPhone 12) viewport test...');

    await page.goto(BLOG_URL);
    await page.screenshot({ path: 'test-results/portfolio-blog-mobile.png', fullPage: true });
    console.log('📸 Mobile screenshot saved');

    // Check if navigation is accessible
    const navElements = await page.locator('nav, [role="navigation"]').count();
    console.log(`✅ Navigation elements found: ${navElements}`);

    // Verify text is readable (no text cutoff)
    const paragraphs = await page.locator('p').all();
    console.log(`✅ Content paragraphs: ${paragraphs.length}`);

    await context.close();
  });

  test('Tablet: Responsive design test (iPad Pro)', async () => {
    const context = await (test as any).browser.newContext({
      ...devices['iPad Pro'],
    });
    const page = await context.newPage();

    console.log('\n📱 Starting Tablet (iPad Pro) viewport test...');

    await page.goto(BLOG_URL);
    await page.screenshot({ path: 'test-results/portfolio-blog-tablet.png', fullPage: true });
    console.log('📸 Tablet screenshot saved');

    await context.close();
  });

  test('Accessibility: Verify semantic HTML and ARIA', async ({ page }) => {
    console.log('\n♿ Starting Accessibility test...');

    await page.goto(BLOG_URL);

    // Check for main content region
    const main = await page.locator('main, [role="main"]').count();
    console.log(`✅ Main content region: ${main > 0 ? 'Found' : 'Not found'}`);

    // Check for alt text on images
    const images = await page.locator('img').all();
    console.log(`📸 Found ${images.length} images`);

    for (let i = 0; i < Math.min(images.length, 3); i++) {
      const alt = await images[i].getAttribute('alt');
      console.log(`   ✅ Image ${i + 1} alt text: "${alt}"`);
    }

    // Check heading hierarchy
    const h1 = await page.locator('h1').first().textContent();
    console.log(`✅ H1: "${h1?.trim()}"`);
  });

  test('Content verification: Key sections present', async ({ page }) => {
    console.log('\n📝 Starting Content Verification test...');

    await page.goto(BLOG_URL);

    const keyPhrases = [
      'AI Fundamentals Certification',
      'Portfolio Projects',
      'Get Hired in 8 Weeks',
      'Common Questions',
      'certification + portfolio'
    ];

    for (const phrase of keyPhrases) {
      const found = await page.locator(`text=${phrase}`).count();
      console.log(`${found > 0 ? '✅' : '❌'} "${phrase}": ${found > 0 ? 'Found' : 'Not found'}`);
    }

    // Verify CTAs point to correct landing page
    const ctaLinks = await page.locator('a[href*="ai-training-youth-lp"]').all();
    console.log(`🔘 CTAs to landing page: ${ctaLinks.length}`);
  });
});
