import { IoIosArrowDown } from "react-icons/io";

export function Select({ title, options }) {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="bg-white w-24 appearance-none border border-gray-300 p-4"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
