export interface ICardProps {
  id: number
  job: string
  pricePerHour: number
  durationInMinutes: number
}

const Card = ({ id, job, pricePerHour, durationInMinutes }: ICardProps) => {

  const calculofHours: number = durationInMinutes / 60
  const hoursRound: string = calculofHours.toFixed()
  const totalPrice: number = calculofHours * pricePerHour

  return (
    <div id={id.toString()} className="card">
      <p className="card--job" > {job}</p>
      <div className='card--flex'>
        <p className="card--time"> {hoursRound}h</p>
        <p className="card--euros"> {totalPrice}&euro; au total </p>
      </div>
    </div>
  )
}

export default Card

