import categories from "../data/categories";

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="All">All</option>

      {categories.map((category) => (
        <option key={category.title} value={category.title}>
          <span>{category.icon}</span>
          {category.title}
        </option>
      ))}
    </select>
  );
}
