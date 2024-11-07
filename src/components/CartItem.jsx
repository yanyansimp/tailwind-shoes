import { CiTrash } from "react-icons/ci";
import { Select } from "../components/Select";
import { SIZES, QTY } from "../constant";

export function CartItem({ item: { product, qty, size }, onClickTrash }) {
  return (
    <div className="dark:bg-transparent dark:hover:bg-night-50 bg-gray-50 hover:bg-[#daffa2] cursor-pointer p-2  space-y-2">
      <div className="flex space-x-2">
        {/* Image */}
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          {/* Title and Description */}
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* Price */}
        <div className="font-bold dark:text-white">{product.price}$</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              value={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              value={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>

        <button onClick={() => onClickTrash(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
