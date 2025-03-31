import './IntroCard.scss'
import useWindowDimensions from '../../customHooks/useWindowDimension';
import Pagesplitter from '../PageSplitter/Pagesplitter'
import Flower from '../../assets/Gorgosaurus_BW_transparent.png'


const IntroCard = () => {

  const { width } = useWindowDimensions();

  if (width < 800) {
    return (
      <div className='intro-card'>
          <h1 className='intro'>Mateusz</h1>
          <h1 className='intro'>Kumkowski.</h1>
          <br></br>
          <h3 className='subintro'>Java Fullstack Developer</h3>
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
        <h1 className='intro'>Mateusz</h1>
        <h1 className='intro'>Kumkowski.</h1>
        <br></br>
        <h3 className='subintro'>Java Fullstack Developer</h3>
      </div>
    } 
    />)
  }
}

export default IntroCard