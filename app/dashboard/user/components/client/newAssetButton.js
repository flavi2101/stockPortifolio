'use client'

async function asset(){
    console.log('asset')
}

function NewAssetButton() {
  return (
    <button onClick={asset}>+</button>
  )
}

export default NewAssetButton