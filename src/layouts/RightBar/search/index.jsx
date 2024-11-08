import { useState } from "react";

const Search = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="searchdiv">
      <div
        className="search"
        style={{
          backgroundColor: focused ? "black" : "rgb(32, 35, 39)",
          border: focused
            ? "1px solid rgb(29, 155, 240)"
            : "1px solid rgb(32, 35, 39)",
        }}
      >
        <div className="slogo">
          <svg
           
           style={{fill:focused 
            ? "rgb(29, 155, 240)" 
            : "rgb(113, 118, 123)"}}
            width={18.75}
            height={18.75}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1bwzh9t r-4wgw6l r-2dysd3"
          >
            <g>
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </g>
          </svg>
        </div>
        <input
          style={{
            backgroundColor: focused ? "black" : "rgb(32, 35, 39)",
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="inputs"
          type="text"
          placeholder="Ara"
        />
      </div>
    </div>
  );
};

export default Search;
