import Link from 'next/link'

const GolferCard = ({ userId, userName }) => {
  
  return (
    <div className="flex flex-row p-3 my-4 shadow-md lg:w-1/3 md:w-1/2">
      <div className="w-5/6">
        <div>
          <Link href={`/golfers/${userId}`}>
              <a className="text-2xl">{userName} | ID: {userId}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GolferCard
