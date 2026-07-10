export default function SortedDropdown({ sortBy, setSortBy }) {
  return (
    <select
      name="sort-dropdown"
      id="sort-dropdown"
      className="sort-dropdown"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
      <option value="Highest">Highest Amount</option>
      <option value="Lowest">Lowest Amount</option>
      <option value="A-Z">A → Z</option>
      <option value="Z-A">Z → A</option>
    </select>
  );
}
