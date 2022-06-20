import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import useGolfer from '../../lib/useGolfer'
import GolferProfile from '../../components/GolferProfile'
import ScoreCard from '../../components/ScoreCard'

const Golfer = () => {
  const router = useRouter()
  const { id } = router.query
  const { scores, error } = useGolfer(id)

  return (
    <Layout>
      {error ? (
        error
      ) : (
        <>
          {scores ? (
            <>
              <GolferProfile
                key={scores[0].id}
                userId={scores[0].user_id}
                userName={scores[0].user_name}
              />
              {scores && scores.map(score => (
                <ScoreCard
                  key={score.id}
                  id={score.id}
                  totalScore={score.total_score}
                  playedAt={score.played_at}
                  userId={score.user_id}
                  userName={score.user_name}
                />
              ))}
            </>
          ) : (
            <h1>Loading ...</h1>
          )}
        </>
      )}
    </Layout>
  )
}

export default Golfer
