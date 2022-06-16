import Layout from "../../components/Layout";
import GolferCard from '../../components/GolferCard'
import useGolfers from "../../lib/useGolfers";

const Golfers = () => {
    const { golfers, error } = useGolfers()

    return (
        <Layout>
            <>
                {error ? (
                    error
                ) : (
                    <>
                        {golfers && golfers.map(golfer => (
                            <GolferCard
                                key={golfer.id}
                                userId={golfer.id}
                                userName={golfer.name}
                            />
                        ))}
                    </>
                )}  
            </>
        </Layout>
        
    )
}
 
export default Golfers
