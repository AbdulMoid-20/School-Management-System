const StudentList = () => {

    return (
        <div className="p-6">

            {/* 🔹 HEADER */}
            <div className="flex justify-between items-center mb-4">

                <h1 className="text-lg font-semibold text-violet-900">
                    Students List
                </h1>

                <button
                    className="
                    px-4 py-2 rounded-full
                    bg-gradient-to-r from-violet-500 to-purple-500
                    text-white text-sm font-medium
                    shadow-md
                    hover:opacity-90 transition
                    "
                >
                    + Add Teacher
                </button>

            </div>
            <div className="bg-white border border-violet-200 rounded-2xl shadow-sm p-4 overflow-x-auto ">

                <table className="table w-full">

                    {/* HEAD */}
                    <thead className="bg-violet-50 text-violet-700 text-sm">
                        <tr>
                            <th>
                                <input type="checkbox" className="checkbox checkbox-sm border-violet-300" />
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody className="text-violet-900">

                        {/* ROW */}
                        <tr className="hover:bg-violet-50 transition">
                            <th>
                                <input type="checkbox" className="checkbox checkbox-sm border-violet-300" />
                            </th>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12 border border-violet-200">
                                            <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold">Hart Hagerty</div>
                                        <div className="text-xs text-violet-400">United States</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge bg-violet-100 text-violet-600 border-0 text-xs">
                                    Desktop Support Technician
                                </span>
                            </td>

                            <td>Purple</td>

                            <th>
                                <button className="btn btn-sm bg-violet-100 text-violet-700 hover:bg-violet-200 border-0">
                                    Details
                                </button>
                            </th>
                        </tr>

                        {/* COPY SAME STYLE FOR OTHER ROWS */}
                        <tr className="hover:bg-violet-50 transition">
                            <th>
                                <input type="checkbox" className="checkbox checkbox-sm border-violet-300" />
                            </th>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12 border border-violet-200">
                                            <img src="https://img.daisyui.com/images/profile/demo/3@94.webp" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold">Brice Swyre</div>
                                        <div className="text-xs text-violet-400">China</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                Carroll Group
                                <br />
                                <span className="badge bg-violet-100 text-violet-600 border-0 text-xs">
                                    Tax Accountant
                                </span>
                            </td>

                            <td>Red</td>

                            <th>
                                <button className="btn btn-sm bg-violet-100 text-violet-700 hover:bg-violet-200 border-0">
                                    Details
                                </button>
                            </th>
                        </tr>

                        <tr className="hover:bg-violet-50 transition">
                            <th>
                                <input type="checkbox" className="checkbox checkbox-sm border-violet-300" />
                            </th>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12 border border-violet-200">
                                            <img src="https://img.daisyui.com/images/profile/demo/4@94.webp" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold">Marjy Ferencz</div>
                                        <div className="text-xs text-violet-400">Russia</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                Rowe-Schoen
                                <br />
                                <span className="badge bg-violet-100 text-violet-600 border-0 text-xs">
                                    Office Assistant I
                                </span>
                            </td>

                            <td>Crimson</td>

                            <th>
                                <button className="btn btn-sm bg-violet-100 text-violet-700 hover:bg-violet-200 border-0">
                                    Details
                                </button>
                            </th>
                        </tr>

                        <tr className="hover:bg-violet-50 transition">
                            <th>
                                <input type="checkbox" className="checkbox checkbox-sm border-violet-300" />
                            </th>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12 border border-violet-200">
                                            <img src="https://img.daisyui.com/images/profile/demo/5@94.webp" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-semibold">Yancy Tear</div>
                                        <div className="text-xs text-violet-400">Brazil</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                Wyman-Ledner
                                <br />
                                <span className="badge bg-violet-100 text-violet-600 border-0 text-xs">
                                    Community Outreach Specialist
                                </span>
                            </td>

                            <td>Indigo</td>

                            <th>
                                <button className="btn btn-sm bg-violet-100 text-violet-700 hover:bg-violet-200 border-0">
                                    Details
                                </button>
                            </th>
                        </tr>

                    </tbody>

                    {/* FOOT */}
                    <tfoot className="text-violet-500 text-xs">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    )
}

export default StudentList;