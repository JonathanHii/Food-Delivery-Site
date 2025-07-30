import React from "react";

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold-">${price.toFixed(2)}</h2>

            <div className="flex gap-4">
                {options?.map(option => (<button key={option.title} className="p-2 ring-1 ring-red-400 rounded-md">
                    {option.title}
                </button>))}
            </div>

            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className="">
                {/* QUANTITY */}
                <div className="">
                    <span>Quantity</span>
                    <div>
                        <button>{'<'}</button>
                        <span>1</span>
                        <button>{'>'}</button>
                    </div>
                </div>
                {/* CART BUTTON */}
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Price;