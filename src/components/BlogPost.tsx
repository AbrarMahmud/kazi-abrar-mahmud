import React from 'react';
import GlassCard from './GlassCard';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  title: string;
  content: string;
  videoUrl: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, videoUrl, date }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Video Section */}
        <GlassCard className="mb-8">
          <div className="relative pb-[56.25%]">
            <iframe
              src={videoUrl}
              className="absolute inset-0 w-full h-full rounded-t-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </GlassCard>

        {/* Content Section */}
        <GlassCard className="p-8">
          {/* Header */}
          <div className="mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{title}</h1>
            <div className="flex items-center text-gray-600">
              <time dateTime={date} className="text-sm">
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-indigo-600 prose-strong:text-gray-800">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </GlassCard>
      </div>
    </div>
  );
}

export default BlogPost;