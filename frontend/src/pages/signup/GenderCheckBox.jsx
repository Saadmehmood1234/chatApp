import React from "react";

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4 my-4">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white">Male</span>
          <input
            type="radio"
            name="gender"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            className={`radio border-slate-900 ${
              selectedGender === "male" &&
              "checked:bg-gradient-to-r checked:from-pink-500  checked:via-blue-400 checked:to-orange-500"
            }`}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white">Female</span>
          <input
            type="radio"
            name="gender"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            className={`radio border-slate-900 ${
              selectedGender === "female" &&
              "checked:bg-gradient-to-r checked:from-pink-500  checked:via-blue-400 checked:to-orange-500"
            }`}
          />        
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
