import React from 'react';

function ShowSelectedOption(props: any) {
  const isCodeFirst :boolean = props.isCodeFirst;
  if (isCodeFirst) {
    return (
      <div>
        <p>Order by priority:</p>
        <div><span className={'highlight'}>Programming</span>
        &emsp;
        <span>UX/UI</span></div>   
      </div>
    )
  }
  return (
    <div>
        <p>Order by priority:</p>
        <div><span>Programming</span>
        &emsp;
        <span className={'highlight'}>UX/UI</span></div>   
      </div>
  )
}

export default ShowSelectedOption;