import './IntroCard.scss'
import useWindowDimensions from '../../customHooks/useWindowDimension';
import Pagesplitter from '../PageSplitter/Pagesplitter'
import GithubLogo from '../../assets/github-image.png'
import LinkedIn from '../../assets/linkedin.png'
import Resume from '../../assets/Mateusz_Kumkowski_Resume.pdf'
import resumeimg from '../../assets/resume.png'
import myImage from '../../assets/MyImage.jpg'

const IntroCard = () => {

  const { width } = useWindowDimensions();

  if (width < 800) {
    return (
      <>
        <div className='intro-card' style={{justifyContent:'start'}}>
            <img src={myImage} alt="me" style={{marginBlock :'10%',width:'70%',height:'auto', objectFit:'cover' ,border:"white 2px solid", borderRadius:'5%'}}/>
            <div className='intro-card-container'>
              <h1 className='intro'>Mateusz</h1>
              <h1 className='intro'>Kumkowski.</h1>
              <br></br>
              <h3 className='subintro'>Java <span>Fullstack Developer</span></h3>
              <div className='media-flexbox'>
                <a href='https://github.com/KumkowskiMateusz' target='_blank'><img className='icon' src={GithubLogo} alt='github' width={50} height={50}></img></a>
                <a href='https://www.linkedin.com/in/kumkowskimateusz/' target='_blank'><img className='icon' src={LinkedIn} alt='linkedin' width={50} height={50}></img></a>
                <a href={`${Resume}`} target='_blank'><img src={resumeimg} className='icon' alt='resume' width={50} height={50}></img></a>
              </div>
            </div>
        </div>
      </>
    )
  }
  else {
    return (<Pagesplitter 
    leftSegment={
      <div className='intro-card'>
        <img src={myImage} alt="me" style={{width:'60%',height:'auto', objectFit:'cover' ,border:"white 5px solid",borderRadius:'50%'}}/>
      </div>}
    rightSegment={
      <>
        <div className='intro-card'>
          <div className='intro-card-container'>
            <h1 className='intro'>Mateusz</h1>
            <h1 className='intro'>Kumkowski.</h1>
            <br></br>
            <h3 className='subintro'>Java <span>Fullstack Developer</span></h3>
            <div className='media-flexbox'>
                <a href='https://github.com/KumkowskiMateusz' target='_blank'><img className='icon' src={GithubLogo} alt='github' width={50} height={50}></img></a>
                <a href='https://www.linkedin.com/in/kumkowskimateusz/' target='_blank'><img className='icon' src={LinkedIn} alt='linkedin' width={50} height={50}></img></a>
                <a href={`${Resume}`} target='_blank'><img className='icon' src={resumeimg} alt='resume' width={50} height={50}></img></a>
            </div>
          </div>
        </div>
    </>
    } 
    />)
  }
}

export default IntroCard