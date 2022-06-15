import React from 'react'
// imported in parentComponent_pure
function MemoComponent({name}) {
    console.log('memo');
  return (
    <div>MemoComponent</div>
  )
}
// if it passed in regular component class  without React.memo it will re render even if the new state not change
// export default MemoComponent
export default React.memo(MemoComponent);