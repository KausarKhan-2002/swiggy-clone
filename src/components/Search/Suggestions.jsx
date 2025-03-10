import React, { useEffect, useState } from "react";
import { SUGGESTIONS_DATA, SUGGESTIONS_IMG_URL } from "../../utils/API";
import SuggestionCards from "./SuggestionCards";
import SuggestionShimmerUI from "../ShimmerUI/SuggestionShimmerUI";

const Suggestions = ({ text }) => {
  const [data, setData] = useState([]);
  const [suggestionCardId, setSuggestionCardId] = useState(false);

  const fetchSuggestionsData = async () => {
    const data = await fetch(SUGGESTIONS_DATA + text);
    const response = await data.json();
    // console.log(response.data.suggestions);
    setData(response.data.suggestions);
  };

  useEffect(() => {
    fetchSuggestionsData();
  }, []);

  if (data.length == 0) return <SuggestionShimmerUI />;

  //   console.log(data);

  return (
    <div>
      <div
        className={`flex flex-col gap-4 mt-5 px-5 ${
          suggestionCardId && "hidden"
        }`}
      >
        {data &&
          data.map((item) => (
            <div
              onClick={() => setSuggestionCardId(item.text)}
              key={item.cloudinaryId}
              className="flex items-center gap-5 hover:bg-slate-100 py-4 cursor-pointer"
            >
              <img
                className="w-16 rounded-lg"
                src={SUGGESTIONS_IMG_URL + item.cloudinaryId}
              />

              <div>
                <h2 className="text-slate-800 ">{item.text}</h2>
                <p className="text-sm text-slate-700">{item.tagToDisplay}</p>
              </div>
            </div>
          ))}
      </div>

      {suggestionCardId && <SuggestionCards cardId={suggestionCardId} />}
    </div>
  );
};

export default Suggestions;
