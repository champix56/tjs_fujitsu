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
  return (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={`0 0 ${props.meme.image.w} ${props.meme.image.h}`}>
    <image href={props.meme.image.url}/>
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
