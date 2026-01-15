import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RevealAnimation from "@/components/reveal-animations";

export const metadata = {
  title: "Blog | Portfolio",
  description: "Thoughts, tutorials, and updates from the space.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans">
      <RevealAnimation>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Space Log
        </h1>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Documenting my journey through the cosmos of code.
        </p>
      </RevealAnimation>

      <div className="max-w-3xl mx-auto">
        <RevealAnimation>
          <Card className="bg-black/40 border-zinc-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">
                Software Engineer Wrap 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                A Spotify Wrapped-style “year in code” card generator for
                developers. It runs 100% in your browser—no backend, no uploads,
                just your data on your device.
              </p>
              <p>
                Live demo:{" "}
                <a
                  className="text-purple-400 underline"
                  href="https://jagan-jijo.github.io/softdev-wrapped/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://jagan-jijo.github.io/softdev-wrapped/
                </a>
              </p>
              <h3 className="text-xl">What it does</h3>
              <ul className="list-disc ml-6 space-y-1 text-zinc-400">
                <li>Build a tall 9:16 story card with your yearly stats</li>
                <li>Live preview while you edit</li>
                <li>Export a crisp PNG for sharing</li>
                <li>Themes (2 dark + 2 light)</li>
                <li>Custom badges + apps + languages</li>
                <li>Local storage saves everything automatically</li>
              </ul>
              <h3 className="text-xl">Notes</h3>
              <ul className="list-disc ml-6 space-y-1 text-zinc-400">
                <li>Everything is client-side; nothing is uploaded.</li>
                <li>Works offline once loaded.</li>
                <li>Have fun with it.</li>
              </ul>
            </CardContent>
          </Card>
        </RevealAnimation>
      </div>
    </div>
  );
}
