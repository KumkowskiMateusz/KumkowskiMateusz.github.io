import './InformationTable.scss'
import InformationTableBody from './InformationTableBody/InformationTableBody';
import InformationTableHeader from './InformationTableHeader/InformationTableHeader';
import InformationTableHeaderSegment from './InformationTableHeader/InformationTableHeaderSegment/InformationTableHeaderSegment';




const InformationTable = () => {
  return (
    <div id='information-table'>
        <InformationTableHeader content={[<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>]} />
        <InformationTableBody content={[]} key={""} />
    </div>
  )
}

export default InformationTable