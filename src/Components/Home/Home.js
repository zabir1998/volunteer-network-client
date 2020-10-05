import React, { useState } from 'react';
import Task from '../Task/Task';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';



 const tasks=[
    {
        id: 1,
        name: 'Child Support',
        pic: 'childSupport.png',
        
      },
      {
        id: 2,
        name: 'Refuge Shelter',
        pic: 'refuseShelter.png',
        
      },
      {
        id: 3,
        name: 'Food Charity',
        pic: 'foodCharity.png',
        
      },
      {
        id: 4,
        name: 'Host a Clothing Swap',
        pic: 'clothSwap.png',
        
      },
      {
        id: 5,
        name: 'Host a River Cleanup',
        pic: 'riverClean.png',
       
      },
      {
        id: 6,
        name: 'Clean-up Water for Children',
        pic: 'cleanWater.png',
       
      },
      {
        id: 7,
        name: 'Good Education',
        pic: 'goodEducation.png',
        
      },
      {
        id: 8,
        name: 'New Books for Children',
        pic: 'newBooks.png',
        
      },
      {
        id: 9,
        name: 'Host a study group',
        pic: 'studyGroup.png',
        
      },
      {
        id: 10,
        name: 'Build birdhouses for your neighbors',
        pic: 'birdHouse.png',
       
      },
      {
        id: 11,
        name: 'Organize books at the library',
        pic: 'libraryBooks.png',
        
      },
      {
        id: 12,
        name: 'Give a seminar on driving safety',
        pic: 'driveSafety.png',
      
      },
      {
        id: 13,
        name: 'Give free music lessons',
        pic: 'musicLessons.png',
        
      },
      {
        id: 14,
        name: 'Teach people how to register to vote',
        pic: 'voteRegister.png',
        
      },
      {
        id: 15,
        name: 'Clean up your local park',
        pic: 'clearnPark.png',
        
      },
      {
        id: 16,
        name: 'Give IT help to local adults',
        pic: 'extraVolunteer.png',
       
      },
      {
        id: 17,
        name: 'Foster a shelter animal',
        pic: 'animalShelter.png',
        
      },
      {
        id: 18,
        name: 'Babysit during PTA meetings',
        pic: 'babySit.png',
        
      },
      {
        id: 19,
        name: 'Collect stuffed animals.',
        pic: 'stuffedAnimals.png',
        
      },
      {
        id: 20,
        name: 'Collect school supplies',
        pic: 'ITHelp.png',
        
      },
    ];

const Home = () => {
    
    return (
        
        <div id="home"className="home">
            <Header></Header><br/>
            <Link to={"/registration/"}>
            <div className="row">
            {
                tasks.map(task=><Task task={task}></Task>)
            }
        </div>
        </Link>

        </div>
    );
};

export default Home;