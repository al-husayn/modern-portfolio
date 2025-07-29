type BlogTabsProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export const BlogTabs = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: BlogTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};