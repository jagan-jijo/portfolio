import Link from "next/link";
import React from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RevealAnimation from "@/components/reveal-animations";
import { getBlogPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog | Portfolio",
  description: "Thoughts, write-ups, and engineering notes from Jagan Jijo.",
};

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) =>
    new Date(b.metadata.publishedAt).getTime() -
    new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div className="container mx-auto min-h-screen px-4 py-24 font-sans">
      <RevealAnimation>
        <h1 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
          Space Log
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-400">
          Notes on backend engineering, AI-assisted development, and the systems
          that keep software work reliable.
        </p>
      </RevealAnimation>

      <div className="mx-auto grid max-w-4xl gap-6">
        {posts.map((post, index) => (
          <RevealAnimation key={post.slug} delay={index * 0.08}>
            <Card className="border-zinc-800 bg-black/40 backdrop-blur-sm transition-colors hover:border-purple-500/40">
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {post.metadata.publishedAt}
                  </div>
                  {post.metadata.tags?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {post.metadata.tags.map((tag) => (
                        <span
                          key={`${post.slug}-${tag}`}
                          className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <CardTitle className="text-2xl text-zinc-100">
                  {post.metadata.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-zinc-300">
                <p className="leading-7 text-zinc-400">{post.metadata.summary}</p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-purple-400 transition-colors hover:text-purple-300"
                >
                  Read post
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
}
