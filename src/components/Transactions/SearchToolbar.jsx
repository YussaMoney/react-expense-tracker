import { SearchIcon } from "lucide-react";
import CategoryFilter from "../CategoryFilter";
import SortedDropdown from "../SortedDropdown";

export default function SearchToolbar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="search-toolbar">
      <div className="search-wrapper">
        <SearchIcon className="search-icon" />
        <input
          type="search"
          name="search-input"
          id="search-transactions"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="toolbar-control">
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SortedDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </section>
  );
}
