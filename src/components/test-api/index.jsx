import { useEffect, useState } from 'react'
import styles from './styled.module.css'


const TestApi =() => {
const[teamData,setTeamData] =useState([])
const[isLoad,setIsLoad] =useState(true)
    
useEffect(() => {
    const url = 'https://free-nba.p.rapidapi.com/players'
    const options = {
        method: 'GET',
        params: {
          page: '0',
          per_page: '25'
        },
        headers: {
          'X-RapidAPI-Key': '7da40d9e65mshc561eb8cad0b33bp153598jsn76e6ac7ec657',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      };
fetch(url, options)
.then(res => res.json())
.then(res => setTeamData(res.data));
}, []);

    return( 
    <div className={styles.App}>
<div>Команды</div>
<div>

{teamData.map((el,i) =>{
return(
<div key={el.id}> 
{i+1} {el.id} {el.first_name} 

</div>
)
})}

    </div>

    </div>
    
    );
};

export default TestApi


