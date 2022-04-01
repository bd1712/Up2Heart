
import './CardOfAnnouncement.scss';
import{Component} from 'react';

 class CardOfAnnouncement1 extends Component{
    state={
       profileImg:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.senertec.de%2Fcenter-rhein-haardt%2Fblank-profile-picture-973460_1280%2F&psig=AOvVaw2qFQckNTjvd36HdbbFSVo1&ust=1647292777185000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCekPqBxPYCFQAAAAAdAAAAABAD'
   }
   imageHandler=(e)=>{
    const reader = new FileReader();
    reader.onload =()=>{
        if (reader.readyState === 2){
            this.setState({profileImg: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
}
 render(){
    const {profileImg}=this.state
    return(
        <div className='page'>
        <div className='CardOfAnnouncement__container__img-holder'>
            <img src={profileImg} alt="" id="img" className='img'/>
        </div> 
        <div className="label">
            <label htmlFor="input" className="image-upload">
                <i className="material-icons">add_photo_alternate</i>
              
            </label>
        </div>

        <input type="file" name="image-upl" id="input" accept="image/*" onChange={this.imageHandler} />
        
        </div> )
 }
}
export default CardOfAnnouncement1;