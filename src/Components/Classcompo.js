import React, { Component } from 'react'

export default class Classcompo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
        };
    }
  render() {
    const {count}=this.state;
    return (
     
            <div className='mt-10 ml-20'>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h3>Count: {count}</h3>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{this.props.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       
       <div className='flex justify-between'>
       <button class="bg-gray-500 rounded-md text-white px-4 py-2"
        onClick={()=>{
            this.setState({
               count:this.state.count+1,
            })
        }}
        >Increase</button>

    <button class="bg-gray-500 rounded-md text-white px-4 py-2"
        onClick={()=>{
            this.setState({
               count:this.state.count-1,
            })
        }}
        >Decrease</button>

       </div>
    </div>
</div>
            </div>


    )
  }
}
