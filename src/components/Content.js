import React from 'react';

// import Box from './Box';

const Content = () => {
  return (
    <div className="container">
      <div className="boxContainer">
        <div className="box box--do">
          <div className="box__header">
            <div className="box__headerTitle">
              <span className="box__headerCircle" role="img">
                &#9873;
              </span>
              DO
              <span className="box__headerCount">05</span>
            </div>
            <div className="box__headerAction">+</div>
          </div>
        </div>
        <div className="box box--decide">
          <div className="box__header">DECIDE</div>
        </div>
        <div className="box box--delegate">DELEGATE</div>
        <div className="box box--delete">DELETE</div>
      </div>
    </div>
  );
};

export default Content;
