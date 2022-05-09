import React from 'react'

function Table() {
  return (
    <div class="overflow-x-auto w-full flex justify-center">
        <table class="table w-96">
            {/* <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
            </thead> */}
            <tbody>
            <tr>
                <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src="https://api.lorem.space/image/face?hash=53273" alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div class="font-bold">Hart Hagerty</div>
                    <div class="text-sm opacity-50">United States</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                <button class="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table