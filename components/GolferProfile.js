const GolferProfile = ({ userName, userId }) => (
  <div className="flex flex-row p-3 my-4 shadow-md lg:w-1/3 md:w-1/2">
    <div className="w-5/6">
      <div>
        {`${userName} | ID: ${userId}`}
      </div>
    </div>
  </div>
)

export default GolferProfile
