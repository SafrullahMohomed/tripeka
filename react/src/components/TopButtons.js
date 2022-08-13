import React from 'react'

const TopButtons = ({ setQuery }) => {
    const cities = [
        {
          id: 1,
          title: "Colombo",
        },
        {
          id: 2,
          title: "Kandy",
        },
        {
          id: 3,
          title: "Anuradhapura",
        },
        {
          id: 4,
          title: "Matale",
        },
        {
          id: 5,
          title: "Galle",
        },
    ];
    return (
        <div className="flex items-center justify-around my-6">
          {cities.map((city) => (
            <button
              key={city.id}
              className="text-white text-lg font-medium bg-inherit"
              onClick={() => setQuery({ q: city.title })}
            >
              {city.title}
            </button>
          ))}
        </div>
    );
}

export default TopButtons