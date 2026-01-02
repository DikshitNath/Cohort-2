import React from 'react'
import { FcApproval } from "react-icons/fc";
import { IoPersonOutline } from "react-icons/io5";
import { RiUserFollowLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { SlUserFollowing } from "react-icons/sl";


const Card = (props) => {
    const [isFollowing, setIsFollowing] = React.useState(false);
    
  return (
    <div className='flex flex-col gap-3 w-1/5 h-1/2 shadow-lg p-1 rounded-2xl'>
        <div>
            <img src={props.image} alt={props.title} className='object-cover w-full rounded-2xl'/>
        </div>
        <div className='px-4'>
            <div className='flex items-center gap-2'>
                <h2 className='text-center font-semibold text-lg'>{props.title}</h2>
                <FcApproval className='text-2xl'/>
            </div>
            <h3 className='text-sm text-gray-500'>{props.description}</h3>
            <div className='flex justify-between items-center my-4'>
                <h3 className='flex items-center'><IoPersonOutline />{props.followers}</h3>
                <h3 className='flex items-center'><RiUserFollowLine />{props.following}</h3>
                <button className='flex items-center gap-3 bg-gray-200 shadow-lg px-4 py-1 rounded-full mt-2' onClick={()=>{
                    setIsFollowing(!isFollowing);
                }}>Follow {isFollowing ? <SlUserFollowing /> : <SlUserFollow />}</button>
            </div>
        </div>
        
        
    </div>
  )
}

export default Card
