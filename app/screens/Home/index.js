import React, {Component} from 'react';
import ImagePath from './components/ImagePath'
import Post from './components/Post'

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      static: {
        title: 'RBC Olympians',
        country: 'Canada',
        description: 'RBC understands the demands we face as athletes, and what we need to move forward both in sport and in life. In addition to invaluable job skills and mentoring opportunities with other Olympians, being an RBC Olympian allows me to share my Olympic experience and passion for sport with people across the country.',
        members: '36',
        total: '1026',
      },
      tab: ['Posts','Our Athelets','Videos','Photos'],
      visibilityIndex: 0,
      posts: [{
          imageUrl: 'assets/images/girl.jpg',
          title: 'Q & A with RBC Olympian Caroline Calve',
          isLive: 1
      },{
          imageUrl: 'assets/images/messi.jpg',
          title: 'Hello Messi! Love from IIT Roorkee',
          isLive: 1
      },{
          imageUrl: 'assets/images/lebleu.jpg',
          title: 'LeBLEU. WINTER IS COMING. #Cool',
          isLive: 0
      },{
          imageUrl: 'assets/images/girl.jpg',
          title: 'Q & A with RBC Olympian Caroline Calve',
          isLive: 1
      },{
          imageUrl: 'assets/images/messi.jpg',
          title: 'Hello Messi! Love from IIT Roorkee',
          isLive: 1
      },{
          imageUrl: 'assets/images/lebleu.jpg',
          title: 'LeBLEU. WINTER IS COMING. #Cool',
          isLive: 0
      }],
      ourAthelets: ['Sample Text here','Sample Text here','Sample Text here','Sample Text here','Sample Text here'],
      videos: ['Sample Text here','Sample Text here','Sample Text here','Sample Text here','Sample Text here'],
      photos: ['Sample Text here','Sample Text here','Sample Text here','Sample Text here','Sample Text here']
    }
  }

  changeTab = (e) => {
      this.setState({ visibilityIndex : e});
  }

  render() {
    var tabDetail = this.state.tab;
    var postDetail = this.state.posts;
    var ourAthelets = this.state.ourAthelets;
    var videos = this.state.videos;
    var photos = this.state.photos;
    var zooming = {zoom: '5', width: '20%'};
    return (
      <div>
        <ImagePath
          styling={{width: "100%"}}
          path='assets/images/header.jpg' />
        <ImagePath
          styling={{width: "30%", margin : "-100px 0px 0px 5%", borderRadius: "50%"}}
          path='assets/images/profilePic.jpg' />
        <div style={{textAlign: 'center', padding: '60px'}}>
          <h1 style={{fontSize: '60px', fontWeight: "bold"}}>{this.state.static.title}</h1>
          <h2>{this.state.static.country}</h2>
          <h2 style={{textAlign:"justify"}}>{this.state.static.description}</h2>
        </div>
        <div style={{padding: "0 0 60px 10%"}}>
          <h1 style={{fontSize: '60px', fontWeight: "600"}}>{this.state.static.members} members</h1>
          <div style={{display: 'flex'}}>
            <div style={{width: '55%', textAlign: 'right', marginRight: '60px'}}>
              {['1','2','3','4'].map((item, i) => {
                var imgpt = 'assets/images/member'+item+'.jpg';
                return (
                  <ImagePath key={i}
                    styling={{width: "30%", borderRadius: "50%", marginRight: "-25px"}}
                    path= {imgpt} />
                );
              })}
            </div>
            <p style={{width:'45%', fontSize: '50px', fontWeight: "600", paddingTop:'25px'}}>+{this.state.static.total} more</p>
          </div>
        </div>
        <div className="sticky">
          <div style={{display: 'flex', height: '150px', width: '100%', backgroundColor: '#355a61'}}>
            {tabDetail.map((title,index) => {
              return (
                <div key={index} style={{width:'25%'}}>
                  <h3
                    style={{height: '125px', color: 'white', fontSize: '40px', textAlign: 'center', fontWeight:'lighter', margin: '30px 0px -20px 0px'}}
                    onClick={() => this.changeTab(index)}>{title}</h3>
                  <div
                    style={{display: this.state.visibilityIndex==index ? 'flex' : 'none', padding: '0px 10%'}}>
                    <span style={{height: '20px', width: '100%', backgroundColor: 'white'}}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {this.state.visibilityIndex==0 &&
            postDetail.map((detail, index) => {
              return (
                <Post
                  key={index}
                  styling={{width: "100%"}}
                  param = {detail} />
              );
            })
        }
        {this.state.visibilityIndex==1 &&
            ourAthelets.map((detail, index) => {
              return (
                <h1 key={index}
                  style={{fontSize: '40px', fontWeight: "200", padding: '50px 0px', textAlign: 'center'}}>{detail}</h1>
              );
            })
        }
        {this.state.visibilityIndex==2 &&
            videos.map((detail, index) => {
              return (
                <h1 key={index}
                  style={{fontSize: '40px', fontWeight: "200", padding: '50px 0px', textAlign: 'center'}}>{detail}</h1>
              );
            })
        }
        {this.state.visibilityIndex==3 &&
            photos.map((detail, index) => {
              return (
                <h1 key={index}
                  style={{fontSize: '40px', fontWeight: "200", padding: '50px 0px', textAlign: 'center'}}>{detail}</h1>
              );
            })
        }
        <div style={{height: '100px'}}></div>
        <div style={{width:'100%', backgroundColor: 'white', display: 'flex', textAlign: 'center', position: 'fixed', bottom:0}}>
            <div style={zooming}>&#128195;</div>
            <div style={zooming}>&#x1F50D;</div>
            <div style={zooming}>&#8853;</div>
            <div style={zooming}>&#128229;</div>
            <div style={zooming}>&#128113;</div>
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
