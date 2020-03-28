import React from 'react';
import './Home.css';
import {Doughnut} from 'react-chartjs-2';
import profile from './profile.jpg';

const state = {
  labels:['React Js','Vue Js','Data Science','Android(Kotlin + Java)','Django','Flask'],
        datasets:[
          {
          label:'Techologies',
          data:[
            60,
            95,
            25,
            65,
            55,
            61
          ],
          backgroundColor:[
            'rgba(255,0,0,0.3)',
            'rgba(0,255,0,0.3)',
            'rgba(0,0,255,0.3)',
            'rgba(192,192,192,0.3)',
            'rgba(255,255,0,0.3)',
            'rgba(255,255,0,0.3)'
          ],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
        }
      ]
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      chartData:{
        labels:['React Js','Vue Js','Data Science','Android(Kotlin + Java)','Django','Flask'],
        datasets:[
          {
          label:'Techologies',
          data:[
            60,
            95,
            25,
            65,
            55,
            61
          ],
          backgroundColor:[
            'rgba(255,0,0,0.3)',
            'rgba(0,255,0,0.3)',
            'rgba(0,0,255,0.3)',
            'rgba(192,192,192,0.3)',
            'rgba(255,255,0,0.3)',
            'rgba(255,255,0,0.3)'
          ],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
        }
      ]
      }
    }
  }
  render() {
    return (
      <div className="pic">
      <div className="photo">
      <h4>Me</h4>
      <img src={profile} className="picture" alt="mypic" />
      <div className="glow-wrap">
        <i className="glow"></i>
      </div>
    </div>
      <div id="wr">
  <div id="cost">
    <h6>A developer</h6>
    <h6>A learner</h6>
    <h6>A coder</h6>
  </div>
  </div>
      <div className="techology">
        <Doughnut
          data={state}
          width={120}
          height={50}
          options={{
            title:{
              display:true,
              text:'Experience in technologies',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
       </div>
      </div>
      )
  }
}


export default Home;