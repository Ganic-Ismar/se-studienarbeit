import React, { useEffect, useState } from "react";

function TableSide(){
    const [tableData, setTableData] = useState([]);

    async function refreshTable(e) {
        e.preventDefault();
        await fetch('http://127.0.0.1:8080/demo/all')
            .then((response) => response.json())
            .then((data) => {
                setTableData(data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    const DisplayData=tableData.map(
        (info)=>{
            return(
                <tr key={info.email}>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{info.name}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{info.email}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{info.strasse}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{info.plz}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{info.ort}</td>
                    <td class="whitespace-nowrap text-sm font-medium">
			            <PassItem pass={info.password} />
			        </td>
                </tr>
            )
        }
    )
    

    return (
        <div className="flex justify-center pt-20 w-full h-full overflow-scroll">
            <form className="bg-neutral-900 border-[#3d3d3d] border-2 shadow-lg shadow-md rounded px-10 pt-6 pb-8 mb-4 w-full max-w-[90%] h-full max-h-[80%]">
                <div class="relative flex flex-wrap mb-6">
                    <div class="w-full w-1/2 px-3 mb-6 md:mb-0">
                    <button onClick={refreshTable} className="w-[30%] shadow bg-purple-600 hover:bg-purple-800 text-white-800 font-bold py-2 px-4 rounded-lg inline-flex items-center justify-center">
                            <span>&#128260; Refresh</span>
                        </button>
                    </div>
                    <div class="absolute top-1.5 right-2">
                        <label class="text-white-700 text-sm font-bold mb-2">
                            {tableData.length} Einträge
                        </label>
                    </div>
                </div>
                <div className="mb-6 mt-5 max-h-[90%] overflow-scroll">

                    <div class="flex flex-col w-full">
                        <div class="-m-1 overflow-scroll-auto">
                            <div class="p-1.5 min-w-full inline-block align-middle">
                                <div class="border border-[#3d3d3d] border-2 rounded-lg shadow overflow-hidden shadow-gray-900">
                                    <table class="min-w-full divide-y divide-[#3d3d3d]">
                                        <thead class="bg-[#121212]">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Name</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Email</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Strasse</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">PLZ</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Ort</th>
                                                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Passwort</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-[#2E2E2E] bg-[#1C1C1C]">
                                            {DisplayData}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </form>
        </div>
    ) 
}

function PassItem(props) {
    const [actualPass, setActualPass] = useState(props.pass);
    const [showPass, setShowPass] = useState(false);
    
    return (
        <>
            <p className={"text-purple-600 " + (showPass ? "hidden" : "")} onClick={() => {setShowPass(prev => !prev)}}>
                *******
            </p>
            <p className={"text-purple-600 " + (showPass ? "" : "hidden")} onClick={() => {setShowPass(prev => !prev)}}>
                {actualPass}
            </p>
        </>
    )
}

export default TableSide