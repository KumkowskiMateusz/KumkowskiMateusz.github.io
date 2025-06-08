import TransitionLine from '../TransitionLine/TransitionLine'
import ListHolder from '../ListHolder/ListHolder'
import OracleCertImage from '../../assets/personalImages/OCAJSE8(1).jpg' // Update the path as needed
import './MobileAdditionalInfo.scss' // Assuming you have a CSS file for styling

const MobileAdditionalInfo = () => {
  return (
    <>
        <article id="Career">
          <h1>Career</h1>
          <ListHolder list={[
            {
              name: 'Software Engineer at Tech Solutions Inc.',
              description: 'Developing scalable web applications using React and Node.js.',
              date: 'June 2023 - Present',
              image: '' // Add an image if available
            },
            {
              name: 'Intern at Innovative Tech Co.',
              description: 'Assisted in the development of mobile applications and learned about Agile methodologies.',
              date: 'Jan 2023 - May 2023',
              image: '' // Add an image if available
            }
          ]} type='Certification'/>
        </article>
        <TransitionLine size='70%' thickness='5px' color='white' marginLeft='auto' marginRight='0px' marginBlock='2rem'/>
        <article id="Certifications">
          <h1>Certifications</h1>
          <ListHolder list={[
            {
              name: 'Oracle Certified Java SE 8 Developer',
              description: 'Certification demonstrating expertise in the Java programming language and its core concepts.',
              date: 'May 2025',
              image: OracleCertImage
            }
          ]} type='Certification'/>
        </article>
        <TransitionLine size='70%' thickness='5px' color='white' marginLeft='0px' marginRight='0px' marginBlock='2rem'/>
        <article id="Technical Skills">
          <h1>Technical Skills</h1>
        </article>
        <TransitionLine size='70%' thickness='5px' color='white' marginLeft='auto' marginRight='0px' marginBlock='2rem'/>
    </>
  )
}

export default MobileAdditionalInfo