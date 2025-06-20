import './StatusCircle.scss';

interface StatusCircleProps {
  status: 'unstarted' | 'in-progress' | 'completed';
}


const StatusCircle : React.FC<StatusCircleProps> = ({status}) => {
  return (
    <div className="status-circle-container">
        <div className={`${status} status-circle`}> </div>
        <p className="status-text">{status}</p>
    </div>
  )
}

export default StatusCircle