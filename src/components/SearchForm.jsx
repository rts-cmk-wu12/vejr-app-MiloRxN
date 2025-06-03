export default function SearchForm({ query, onQueryChange, onSubmit, loading }) {

    function handlesubmit(event) {
        event.preventDefault()
        onSubmit()
    }
    
    return (
        <form onSubmit={handlesubmit} className="search-form">
            <label htmlFor="location" hidden>
                Search Location
            </label>
            <input
                value={query}
                onChange={event => onQueryChange(event.target.value)}
                type="text"
                placeholder="Enter location..."
                className="search-form__input"
                name="location"
            />
            <button
                type="submit"
                disabled={loading}
                className={`search-form__button ${loading ? 'search-form__button--loading' : ''}`}
            >
                {loading ? "Loading..." : "Get Weather"}
            </button>
        </form>
    )
}