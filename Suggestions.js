import React from "react";
import suggestions from "../../assets/Data/suggestion.json";
function Suggestions() {
  return (
    <div className="ml-7 mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-400 font-medium">Sugestões para ti</h1>
        <button>Ver todas</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between mt-2"
        >
          <img
            src={suggestion.img}
            alt=""
            className="w-10 h-10 rounded-full object-cover border p-[2px]"
          />
          <div className="flex-1 m-1 ml-2">
            <p className="font-medium text-sm ">{suggestion.name}</p>
            <h1 className="text-xs  text-gray-500">Sugestões para ti</h1>
          </div>
          <div>
            <button className="text-sm text-blue-500 font-semibold">Seguir</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
