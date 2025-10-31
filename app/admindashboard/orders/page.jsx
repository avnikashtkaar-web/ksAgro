'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Loading from "@/components/Loading";

const Orders = () => {
    const { currency } = useAppContext();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSellerOrders = async () => {
        setOrders(orderDummyData);
        setLoading(false);
    };

    useEffect(() => {
        fetchSellerOrders();
    }, []);

    return (
        <div className="flex-1 min-h-screen overflow-scroll flex flex-col justify-between text-sm bg-gray-50">
            {loading ? (
                <Loading />
            ) : (
                <div className="md:p-10 p-4 space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Orders
                    </h2>

                    <div className="max-w-6xl mx-auto space-y-5">
                        {orders.map((order, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row gap-6 justify-between p-6 border border-green-200 bg-gradient-to-r from-green-100 via-lime-50 to-green-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex-1 flex gap-5 max-w-lg">
                                    <Image
                                        className="w-20 h-20 object-cover"
                                        src={assets.box_icon}
                                        alt="box_icon"
                                    />
                                    <p className="flex flex-col gap-2 text-gray-700">
                                        <span className="font-medium text-gray-800">
                                            {order.items
                                                .map(
                                                    (item) =>
                                                        item.product.name +
                                                        ` x ${item.quantity}`
                                                )
                                                .join(", ")}
                                        </span>
                                        <span>Items : {order.items.length}</span>
                                    </p>
                                </div>

                                <div className="text-gray-700">
                                    <p>
                                        <span className="font-semibold">
                                            {order.address.fullName}
                                        </span>
                                        <br />
                                        <span>{order.address.area}</span>
                                        <br />
                                        <span>{`${order.address.city}, ${order.address.state}`}</span>
                                        <br />
                                        <span>{order.address.phoneNumber}</span>
                                    </p>
                                </div>

                                <p className="font-semibold text-gray-800 my-auto">
                                    {currency}
                                    {order.amount}
                                </p>

                                <div className="text-gray-700">
                                    <p className="flex flex-col">
                                        <span>Method : COD</span>
                                        <span>
                                            Date :{" "}
                                            {new Date(
                                                order.date
                                            ).toLocaleDateString()}
                                        </span>
                                        <span>Payment : Pending</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orders;
