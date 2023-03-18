import React,{useState} from "react";

import LineGraph from "./LineGraph";
import TimeLine from "./TimeLine";

import {Chip}  from "@mui/material";
import {Avatar} from "@mui/material";

const Newsfeed = () => {

    const [popularTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Pakistan",
        "China",
        "Pharma",
      ]);



  return (
    <div className="newsfeed  text-white  flex-[0.7]">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h2 className="text-3xl font-semibold">$114,656</h2>
            <p>+$44.63 (+0.04%) <span className="text-xs text-[grey]">Today</span></p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying_section flex justify-between border-b border-[#3b4754] py-5 ">
          <h2>Buying Power</h2>
          <h2>$4.11</h2>
        </div>

        <div className="newsfeed__market__section mt-[60px] ">
          <div className="newsfeed__market__box h-[15vh] p-5 border border-[#31363A] rounded  ">
            <p className="text-[#7B858A] text-base uppercase font-bold mb-2">
              Markets Closed
            </p>
            <h1 className="text-4xl font-semibold">Happy Thanksgiving</h1>
          </div>
        </div>

        <div className="newsfeed__popularlists__section ">
          <div className="newsfeed__popularlists__intro flex justify-between items-center py-5 mt-[60px]">
            <h1 className="text-4xl font-semibold">Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges flex flex-wrap">
            {popularTopics.map((topic) => (
              <Chip
                key={topic}
                className="topic__badge"
                variant="outlined"
                label={topic}
                style={{color:"white" , display:"flex", height: "30px" , border:"1px solid #31363A",alignItems:"center" , borderRadius:"18px",padding:"3px 0",marginRight:"8px", marginBottom:"8px" , cursor:"pointer"}}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
