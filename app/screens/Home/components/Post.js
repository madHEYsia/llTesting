import React, {Component, PropTypes} from 'react';

export default class Post extends Component {
  render() {
    const prop = this.props;
    return (
      <div>
        <img
          style={prop.styling}
          src={prop.param.imageUrl} />
        {prop.param.isLive==1 && <div style={{fontSize: '50px', padding:'15px 35px', border: '2px solid',
        width: 'fit-content', marginTop: '-100px', backgroundColor: 'darkred', color:'white'}}>
        	&#x25b6; Live
        </div>}
        <div  style={{padding: '30px 50px', marginBottom: '10px', borderBottom: '2px solid'}}>
          <h1 style={{paddingBottom: '20px', fontSize: '40px', fontWeight: "200"}}> {prop.param.title}</h1>
          <div style={{fontSize: '40px', padding:'15px 25px', border: '2px solid',
          width: 'fit-content'}}>
            Join
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {

};
