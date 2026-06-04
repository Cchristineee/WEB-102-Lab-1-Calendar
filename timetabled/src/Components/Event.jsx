const Event = ({ event, color }) => {
  return (
    <td className={`event-box ${color}`}>
      <span>{event}</span>
    </td>
  )
}

export default Event;

