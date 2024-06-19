import React from 'react'
import Img from '../../Assets/Firstslide.png'
import './Blog.css'
import bg from '../../Assets/website-background-templates.png'
function Blog() {
  return (
    <div className='total flex justify-center'  >

        <div className='flex-col flex mt-8 post mb-10 '>
            <div className='flex-col flex shadow shadow-current mt-3 blog1 rounded-lg bg-slate-50  '>
            <div className='flex mt-2 image-container  bg-slate-50'><img className='image' src={Img} alt="photo"/></div>
                
                <div className='flex  image-likes'>
                  <span><i class="bi bi-hand-thumbs-up-fill"></i>Like</span>
                  <span><i class="bi bi-hand-thumbs-down-fill"></i>Dislike</span>
                  <span><i class="bi bi-share-fill"></i>Share</span>


                </div>

            </div>
            <div className='flex-col flex mt-4 comment-section  shadow  bg-slate-50 rounded-xl p-2'>
            <p className='mt-2 text-xl text-left'> 10 comments</p>
            <div className='mt-2 text-xl text-left'>
               <span> Add Comment</span>
               <input type='text' id="comment" className='comment-input border ml-4 shadow-sm shadow-inherit'  placeholder='Add comment '/>
            </div>
            <div className='flex mt-4 border ' >
                <div className='pro-pic bg-slate-300'>
                  img 
                </div>
                <div className='flex flex-col comments  border ' >
                <p className='flex justify-between'><span>username</span> <span>time</span></p>
                <div className='each-comment'>Nice video !!</div>
                <div className='flex justify-around'>
                   <span><i class="bi bi-hand-thumbs-up-fill"></i>like</span> 
                   <span><i class="bi bi-hand-thumbs-down-fill"></i>dislike</span> 
                   <span>reply</span> 
                    
                    

                </div>

                </div>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Blog