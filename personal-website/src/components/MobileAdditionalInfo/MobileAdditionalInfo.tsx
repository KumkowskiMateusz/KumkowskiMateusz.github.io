import TransitionLine from '../TransitionLine/TransitionLine'
import ListHolder from '../ListHolder/ListHolder'
import './MobileAdditionalInfo.scss' // Assuming you have a CSS file for styling
import CareerList from './CareerList'; // Assuming you have a CareerList component for rendering career items
import CertList from './CertList'
import ColumnFlexBox from '../ColumnFlexBox/ColumnFlexBox';
import l from './SkillsList'; // Assuming you have a SkillsList component for rendering skills

const MobileAdditionalInfo = () => {
  

  return (
    <>
        <article id="Career" className='section'>
          <h1>Career</h1>
          <ListHolder list={CareerList} type='Certification'/>
        </article>
        <TransitionLine size='70%' thickness='5px' color='white' marginLeft='auto' marginRight='0px' marginBlock='2rem'/>
        <article id="Certifications" className='section'>
          <h1>Certifications</h1>
          <ListHolder list={CertList} type='Certification'/>
        </article>
        <TransitionLine size='70%' thickness='5px' color='white' marginLeft='0px' marginRight='0px' marginBlock='2rem'/>
        <article id="Skills">
          <h1>Technical Skills</h1>
          <ColumnFlexBox items={l}></ColumnFlexBox>
        </article>
        <TransitionLine size='70%' thickness='5px' color='white' marginLeft='auto' marginRight='0px' marginBlock='2rem'/>
         <article id="Projects">
          <h1>Projects</h1>
          <ColumnFlexBox items={[]}></ColumnFlexBox>
          <br></br>
          <br></br>
        </article>
    </>
  )
}

export default MobileAdditionalInfo