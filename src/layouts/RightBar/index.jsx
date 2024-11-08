import '../layout.css'
import Addfriend from './addfriend'
import Footer from './footer'
import Premium from './premium'
import Search from './search'
import Trends from './trends'

export default function RightBar(){
    return(
        <div className='rightbar'>

            <Search/>
            <Premium/>
            <Trends/>
            <Addfriend/>
            <Footer/>
            
        </div>
    )
}