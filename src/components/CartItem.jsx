import { CiTrash } from "react-icons/ci";
import { Select } from "../components/Select";
import { SIZES, QTY } from "../constant";

export function CartItem({ item: { product, qty, size } }) {
  return (
    <div className=" bg-gray-50 cursor-pointer p-2 hover:bg-[#daffa2] space-y-2">
      <div className="flex space-x-2">
        {/* Image */}
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          {/* Title and Description */}
          <div className="font-bold">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* Price */}
        <div className="font-bold">{product.price}$</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select
              defaultValue={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select
              defaultValue={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>

        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
}
