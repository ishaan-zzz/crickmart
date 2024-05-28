import React,{useEffect} from 'react'
import Banner from './Banner'
import Heromain from './Heromain'
import FlatList from './Flatlist'
import Subscribe from './Subscribe'
import TeamList from './TeamList'
import References from './References'
import BlogRef from './BlogRef'




export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top left corner of the window
  }, []);
  return (
   <>
   <Banner/>
   <Heromain/>
   

   {/* <FlatList/> */}
   <BlogRef/>
  

 

   <References/>
   </>
  )
}
