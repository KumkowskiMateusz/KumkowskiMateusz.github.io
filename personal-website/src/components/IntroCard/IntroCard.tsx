import './IntroCard.scss'
import useWindowDimensions from '../../customHooks/useWindowDimension';
import Pagesplitter from '../PageSplitter/Pagesplitter'
import Flower from '../../assets/Gorgosaurus_BW_transparent.png'
import CardComponent from '../Card/CardComponent';


const IntroCard = () => {

  const { width } = useWindowDimensions();

  if (width < 800) {
    return (
      <div className='intro-card'>
          <div className='intro-card-container'>
            <h1 className='intro'>Mateusz</h1>
            <h1 className='intro'>Kumkowski.</h1>
            <br></br>
            <h3 className='subintro'>Java Fullstack Developer</h3>
          </div>
      </div>
    )
  }
  else {
    return (<Pagesplitter 
    leftSegment={
      <div className='intro-card'>
        <img src={Flower} alt="flower" style={{width: '100%', height: 'auto'}}/>
      </div>}
    rightSegment={
      <div className='intro-card'>
        <div className='intro-card-container'>
          <h1 className='intro'>Mateusz</h1>
          <h1 className='intro'>Kumkowski.</h1>
          <br></br>
          <h3 className='subintro'>Java <span>Fullstack Developer</span></h3>
        </div>
      </div>
    } 
    />)
  }
}

export default IntroCard