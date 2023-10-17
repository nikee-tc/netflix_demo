import React from 'react'

import './FeatureContent.css';
import ListItem from './ListItem';


const FeatureContent = () => {

    const items=[
        { name:'What is Netflix?' , content:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There always something new to discover, and new TV shows and movies are added every week!'},
        {name:'How much does Netflix cost?' , content:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.'},
        {name:'Where can I watch?', content:'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.'},
        { name:'How do i cancel?' , content:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There always something new to discover, and new TV shows and movies are added every week!'},
        {name:'What can i watch on netflix?' , content:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.'},
        {name:'is netflix good for kids?', content:'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.'}
    ];
  return (
    
    <div className='feature-content'>
     
<h1>Frequently Asked Questions</h1>
<div>

{items.map((item,index)=>(
<ListItem key={index} item={item}/>
)
)}

</div>
      
    </div>
   
  )
}

export default FeatureContent
