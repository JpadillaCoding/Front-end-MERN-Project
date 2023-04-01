import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import axios from 'axios';

function NutritionFacts() {

  
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [searchResult, setSearchResult] = useState([]);
  let [nutritionInfo, setNutritionInfo] = useState([{
    calcium: "0",
    calories: "0",
    carbohydrate: "0",
    fat: "0",
    fiber: "0",
    sugar:"0",
    food_name: "",
    food_type: "",
    iron: "0",
    potassium: 0,
    protein: "0",
    saturated_fat: "",
    serving_description: "0",
    serving_measure: "0",
    serving_size: "0",
    sodium: 0,
    trans_fat: "0",
    cholesterol: "0",
    vitamin_a: "0",
    vitamin_c: "0",
  }])

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }

  const handleSearchQuery = async (searchText) => {

    await axios.get("http://localhost:4000/foods/searchFood?food=" + searchText)
      .then((res) => {
        setSearchResult(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(nutritionInfo)
  }, [nutritionInfo])
  return (
    <div id="content">
      <div className="left">
        <SearchBar handleSearchQuery={handleSearchQuery} />
        <SearchResult searchResult={searchResult} setNutritionInfo={setNutritionInfo}/>
      </div>
      
    <div className="right">
    <h2 className="nutritionTitle">Nutrition Facts</h2>
        <label htmlFor="number-input" className="servings">
          Servings:
        </label>
        <input className="nutInput"
          type="number"
          step="0.01"
          id="number-input"
          value={value}
          onChange={handleInputChange}
        />

        <select
          id="dropdown-menu"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="option1">----------</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <div className="nutritionInfo">
            <table className="nutInfo">
            <tbody>
            <tr>
            <td class="col-1">Calories</td>
            <td class="col-2">{`${nutritionInfo.calories}`}</td>
            <td class="col-1">Sodium</td>
            <td class="col-2">{`${nutritionInfo.sodium}`}mg</td>
            </tr>
            <tr>
            <td class="col-1">Total Fat</td>
            <td class="col-2">0g</td>
            <td class="col-1">Potassium</td>
            <td class="col-2">{`${nutritionInfo.potassium}`}mg</td>
            </tr>
            <tr>
            <td class="col-1 sub">Saturated</td>
            <td class="col-2">{`${nutritionInfo.saturated_fat}`}g</td>
            <td class="col-1">Total Carbs</td>
            <td class="col-2">{`${nutritionInfo.carbohydrate}`}g</td>
            </tr>
            <tr>
            <td class="col-1">Dietary Fiber</td>
            <td class="col-2">{`${nutritionInfo.fiber}`}g</td>
            <td class="col-1">Sugars</td>
            <td class="col-2">{`${nutritionInfo.sugar}`}g</td>
            </tr>
            <tr>
            <td class="col-1 sub">Trans</td>
            <td class="col-2">{nutritionInfo.trans_fat}g</td>
            <td class="col-1">Protein</td>
            <td class="col-2">{`${nutritionInfo.protein}`}g</td>
            </tr>
            <tr class="last">
			<td class="col-1">Cholesterol</td>
			<td class="col-2">{`${nutritionInfo.cholesterol}`}mg</td>
			<td class="col-1">&nbsp;</td>
			<td class="col-2">&nbsp;</td>
		</tr>
        <tr class="alt">
			<td class="col-1">Vitamin A</td>
			<td class="col-2">{`${nutritionInfo.vitamin_a}`}%</td>
			<td class="col-1">Calcium</td>
			<td class="col-2">{`${nutritionInfo.calcium}`}%</td>
		</tr>
        <tr class="last">
			<td class="col-1">Vitamin C</td>
			<td class="col-2">{`${nutritionInfo.vitamin_c}`}%</td>
			<td class="col-1">Iron</td>
			<td class="col-2">{`${nutritionInfo.iron}`}%</td>
		</tr>
        </tbody>
        </table>
        </div>
  </div>
  </div>
  );
}

export default NutritionFacts;
