import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.scss';
interface MemeViewerProps{
  meme:{
    id?:number,
    name:string
    text:string,
    x:number,
    y:number,
    fontSize:number,
    fontWeight:number,
    underline:boolean,
    italic:boolean,
    color:string,
    imageId:number,
    image:{
      url:string,
      w:number,
      h:number
    }
  }
}
const MemeViewer = (props:MemeViewerProps) => {
  const img= props.meme.image?props.meme.image:{w:1000, h:1000,url:''}
  return (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={`0 0 ${img.w} ${img.h}`}>
    <image href={img.url}/>
    <text 
    x={props.meme.x} 
    y={props.meme.y}
    style={{
      fontWeight:props.meme.fontWeight,
      fontSize:props.meme.fontSize,
      textDecoration:props.meme.underline?'underline':'none',
      fontStyle:props.meme.italic?'italic':'normal',
      fill:props.meme.color
    }}
    >{props.meme.text}</text>
  </svg>
);}

MemeViewer.propTypes = {
  meme:PropTypes.object.isRequired,
};

MemeViewer.defaultProps = {};

export default MemeViewer;
