import React from 'react'

const App = () => {
  const list =
    [
      { name: 'Ajay' },
      { name: 'Puneet' },
      { name: 'Nitin' },
      { name: 'Titu' },
      { name: 'Tarun' },
    ];
  console.log('list', list);

  return (
    <div>
      <div>
        {
          list?.map((d, i) => {
            return (
              <>
                <div className='bg-red-200'>
                  <input type="checkbox" name="" id="" />
                  <p>{i + 1}</p>
                  <p>{d?.name}</p>
                </div>
              </>
            )
          })
        }
      </div>
    </div >
  )
}

export default App