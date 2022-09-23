import React from 'react'

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid sd:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="card w-full h-40 bg-[#ff0000] rounded-md shadow-lg">

        </div>

        <div className="card w-full h-40 bg-[#00cc00] rounded-md shadow-lg">

        </div>

        <div className="card w-full h-40 bg-[#0000ff] rounded-md shadow-lg">

        </div>

        <div className="card w-full h-40 bg-[#ffcc00] rounded-md shadow-lg">

        </div>
      </div>
    </div>
  )
}

export default Dashboard