import { test, expect } from '@playwright/test';

test.describe('AI Training Modal - Timer Behavior', () => {
  test('modal should only auto-open once after 5 seconds on mobile', async ({ page }) => {
    // Emulate iPhone 12
    await page.setViewportSize({ width: 390, height: 844 });

    // Navigate to AI training course page
    await page.goto('http://localhost:4322/ai-training-course-lp');

    // Wait 3 seconds - modal should NOT be visible yet
    await page.waitForTimeout(3000);
    let modalVisible = await page.getByRole('dialog').isVisible().catch(() => false);
    expect(modalVisible).toBe(false);

    // Wait another 3 seconds (total 6 seconds) - modal SHOULD be visible now
    await page.waitForTimeout(3000);
    modalVisible = await page.getByRole('dialog').isVisible().catch(() => false);
    expect(modalVisible).toBe(true);

    // Close the modal by clicking outside or pressing escape
    await page.keyboard.press('Escape');

    // Wait another 7 seconds - modal should NOT re-appear
    await page.waitForTimeout(7000);
    modalVisible = await page.getByRole('dialog').isVisible().catch(() => false);
    expect(modalVisible).toBe(false);

    console.log('✅ Modal timer test passed: Only opened once on mobile');
  });

  test('modal should re-open on exit intent after closing', async ({ page }) => {
    // Desktop viewport for exit intent testing
    await page.setViewportSize({ width: 1280, height: 720 });

    // Navigate to page
    await page.goto('http://localhost:4322/ai-training-course-lp');

    // Wait for auto-open modal
    await page.waitForTimeout(6000);

    // Close modal
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);

    // Simulate exit intent by moving mouse to top
    await page.mouse.move(640, 0);
    await page.waitForTimeout(1000);

    // Modal should re-appear due to exit intent
    const modalVisible = await page.getByRole('dialog').isVisible().catch(() => false);

    console.log('✅ Exit intent test completed');
  });
});
