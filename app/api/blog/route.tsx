import { NextResponse } from 'next/server';
import { db } from "@/app/utils/firebase"
import { collection, getDocs } from 'firebase/firestore';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
  try {
    // 1. Try fetching from Medium
    const feed = await parser.parseURL('https://medium.com/feed/@yashkhairnar');

    if (feed && feed.items && feed.items.length > 0) {
      const mediumPosts = feed.items.map((item) => {
        // Extract first image from content if available
        const imgRegex = /<img[^>]+src="([^">]+)"/;
        const match = item['content:encoded']?.match(imgRegex) || item.content?.match(imgRegex);
        const imageUrl = match ? match[1] : null;

        // Clean up content/excerpt
        const excerpt = item.contentSnippet ||
          item.content?.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...';

        return {
          id: item.guid || item.link,
          title: item.title,
          link: item.link,
          date: item.pubDate,
          author: item.creator || 'Yash Khairnar',
          excerpt: excerpt,
          content: item['content:encoded'] || item.content,
          imageUrl: imageUrl,
          source: 'medium',
          tags: item.categories || []
        };
      });

      return NextResponse.json(mediumPosts);
    }
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
  }

  // 2. Fallback to Firebase
  try {
    const snap = await getDocs(collection(db, 'blog'));
    const data = snap.docs.map(d => ({
      id: d.id,
      ...d.data(),
      source: 'firebase'
    }));
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Firebase blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
