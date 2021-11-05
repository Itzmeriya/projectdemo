import React from 'react';
import './cricket.css'
function MissedRun() {
	return <h1 className="no-run">OH NO! COULDN'T GET THE RUN</h1>; }
function MadeRun(props) {
	return <h1 className="made-run">WoW YoU GoT {props.scored} Runs! :)</h1>; }
function Run(props) {
  const runs = props.isRun;
  if (runs <=0) {
    return <MissedRun />; 
  }else
    return <MadeRun scored={runs} />;
}

export default Run;
