export default function SearchBar({ search, setSearch }) {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
