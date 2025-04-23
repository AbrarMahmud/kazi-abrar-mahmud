# Adding New Sections to the Portfolio

This guide explains how to add new sections to the portfolio that follow the same structure as existing sections.

## 1. Add Data to Configuration

First, add your new data to the `portfolio` object in `/src/config/portfolio.ts`. The new data should follow the same structure as existing sections.

### Example: Adding Articles Section

```typescript
// In /src/config/portfolio.ts
export const portfolio = {
  // ... existing portfolio data ...
  
  articles: [
    {
      title: "Article Title",
      journal: "Publication Name",
      year: 2024,
      abstract: "Detailed abstract of the article...",
      description: "Brief description for preview",
      link: "#",
      citations: 0
    }
    // Add more articles as needed
  ]
};
```

## 2. Add the Section Component

In `/src/pages/Portfolio.tsx`:

1. Add state variables for the new section:
```typescript
const INITIAL_ARTICLES_COUNT = 3;
const [showAllArticles, setShowAllArticles] = useState(false);
```

2. Create display variables:
```typescript
const displayedArticles = showAllArticles 
  ? portfolio.articles 
  : portfolio.articles.slice(0, INITIAL_ARTICLES_COUNT);
const hasMoreArticles = portfolio.articles.length > INITIAL_ARTICLES_COUNT;
```

3. Copy and modify an existing section's JSX structure:
```typescript
<GlassCard className="mb-12 p-8 animate-slide-up animate-bounce-slow">
  <div className="flex items-center gap-2 mb-6">
    <Flask className="text-gray-700" size={24} />
    <h2 className="text-2xl font-bold text-gray-800">Articles</h2>
  </div>
  <div className="space-y-6">
    {displayedArticles.map((article) => (
      // ... content structure
    ))}
  </div>
  {hasMoreArticles && (
    <div className="mt-8 flex justify-center gap-4">
      <button
        onClick={() => setShowAllArticles(!showAllArticles)}
        className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
      >
        {showAllArticles ? 'Show Less' : 'Show More'}
        <ArrowUpRight size={16} />
      </button>
    </div>
  )}
</GlassCard>
```

## 3. Import Required Components

Ensure all necessary components and icons are imported at the top of the file:

```typescript
import { Flask } from 'lucide-react';
```

## 4. Styling Considerations

- Use consistent styling classes from the existing sections
- Maintain the same animation and transition effects
- Keep the glass card effect for visual consistency
- Follow the established responsive design patterns

## Best Practices

1. Maintain Consistency:
   - Use the same naming conventions
   - Follow the same state management pattern
   - Keep the same animation and styling approach

2. Component Organization:
   - Place new sections in a logical order
   - Maintain the same component hierarchy
   - Keep the same prop structure

3. Performance:
   - Implement pagination/show more functionality for large datasets
   - Maintain the same lazy loading patterns
   - Follow the same data fetching strategies

4. Accessibility:
   - Keep the same semantic HTML structure
   - Maintain keyboard navigation support
   - Preserve ARIA attributes and roles

## Testing

After adding a new section:
1. Verify the show more/less functionality works correctly
2. Check responsive behavior across different screen sizes
3. Ensure animations and transitions work smoothly
4. Test keyboard navigation and accessibility
5. Verify all links and interactions function properly