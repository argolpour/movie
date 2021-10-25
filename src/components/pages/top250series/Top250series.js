import Topseries from './Topseries';
const Top250 = ({top250series}) => {

    return (
        <div className="movies-wrapper">
          
        <Topseries top250series={top250series}/>
                   
    </div>
    )
}

export default Top250
