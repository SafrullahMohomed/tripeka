import React from "react";
import ListObject from "./ListObject";

function List2(props) {
    return (
        <>
            <div className="w-full max-w-2xl px-4">
                <div className="border rounded-lg border pb-6 border-gray-200">
                    
                    <div className="px-6 pt-6 overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <tbody>
                            <ListObject></ListObject>
                            <ListObject></ListObject>
                            <ListObject></ListObject>
                                <tr className="border-solid border-2 bg-slate-300">
                                    <td>
                                        <div className="flex items-center">
                                            
                                            <div className="pl-3">
                                                <div className="flex items-center text-sm leading-none">
                                                    <p className="font-semibold text-gray-800">{props.title}</p>
                                                </div>
                                                <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">{props.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-16">
                                        <div>
                                            <p className="text-lg font-semibold leading-none text-right text-gray-800 mr-10 mt-3" >Rs.{props.amount}</p>
                                            <div className="flex items-center justify-center px-2 py-1 mt-2 mb-2 mr-2 bg-green-200 rounded-full">
                                            <p className="text-blue-500 ml-3 text-xs ">on {props.date} at {props.time}</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr> 
                                {/* row two */}
                                <tr className="border-solid border-2 bg-slate-300 ">
                                    <td>
                                        <div className="flex items-center">
                                            
                                            <div className="pl-3">
                                                <div className="flex items-center text-sm leading-none">
                                                    <p className="font-semibold text-gray-800">Train ticket from badulla to nuwara-eliya</p>
                                                </div>
                                                <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">15’5. Core i5. FHD. Integrated graphics</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-16">
                                        <div>
                                            <p className="text-lg font-semibold leading-none text-right text-gray-800 mr-10 mt-3" >$2200</p>
                                            <div className="flex items-center justify-center px-2 py-1 mt-2 mb-2 mr-2 bg-green-200 rounded-full">
                                            <p className="text-blue-500 ml-3 text-xs ">on 2016-01-04 at 10:34:23</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List2;
