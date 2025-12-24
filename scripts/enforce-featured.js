#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { sync as globSync } from 'glob';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../src/content/blog');

/**
 * Enforce featured status: only the most recent blog post should be featured
 */
async function enforceFeatured() {
  try {
    // Find all markdown files in the blog directory
    const blogFiles = globSync(path.join(BLOG_DIR, '*.md'));

    if (blogFiles.length === 0) {
      console.log('📝 No blog posts found.');
      return;
    }

    // Parse all blog posts and extract metadata
    const posts = blogFiles.map(filePath => {
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: body } = matter(content);
      return {
        filePath,
        data,
        body,
        pubDate: data.pubDate ? new Date(data.pubDate) : null,
      };
    });

    // Validate all posts have pubDate
    const postsWithoutDate = posts.filter(post => !post.pubDate);
    if (postsWithoutDate.length > 0) {
      console.error('❌ Error: Some posts are missing pubDate:');
      postsWithoutDate.forEach(post => {
        console.error(`   - ${path.basename(post.filePath)}`);
      });
      process.exit(1);
    }

    // Find the most recent post
    const mostRecentPost = posts.reduce((most, current) => {
      return current.pubDate > most.pubDate ? current : most;
    });

    // Update featured status
    let changesCount = 0;
    posts.forEach(post => {
      const shouldBeFeatured = post.filePath === mostRecentPost.filePath;
      const isFeatured = post.data.featured === true;

      if (shouldBeFeatured !== isFeatured) {
        // Update the featured status
        post.data.featured = shouldBeFeatured;

        // Reconstruct the file content with updated frontmatter
        const updatedContent = matter.stringify(post.body, post.data);
        fs.writeFileSync(post.filePath, updatedContent, 'utf-8');

        changesCount++;
        const action = shouldBeFeatured ? '⭐ Featured' : '✓ Unfeatured';
        console.log(`${action}: ${path.basename(post.filePath)}`);
      }
    });

    // Summary
    if (changesCount === 0) {
      console.log(`✅ All featured statuses correct. Latest: ${path.basename(mostRecentPost.filePath)}`);
    } else {
      console.log(`\n✅ Updated ${changesCount} post(s). Featured: ${path.basename(mostRecentPost.filePath)}`);
    }
  } catch (error) {
    console.error('❌ Error enforcing featured status:', error.message);
    process.exit(1);
  }
}

// Run the function
enforceFeatured();
