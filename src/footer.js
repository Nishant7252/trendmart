import s1 from './images/s1.png';
import s2 from './images/s2.png';
function Footer()
{
    return(
        <div style={{textAlign:'center'}}>
            <img src={s1} style={{width:'200px'}} />
            <img src={s2} style={{width:'200px'}}/>
            <hr/>
            All Rights Reserved Copyrights 2023
        </div>
    );
}
export default Footer;