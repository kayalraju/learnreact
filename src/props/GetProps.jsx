import React from 'react'

const GetProps = (props) => {
    const user=props
    console.log("ddd",user);
  return (
    <div>
      <h1>get Props</h1>
      <div className="container">
        <div className="row">

            {
                user?.data?.map((item,index)=>{
                    return(
                        <>
                         <div className="col-md-4">
                            <h4>name : {item.name}</h4>
                        </div>
                        </>
                    )
                })
            }
           
        </div>
      </div>
    </div>
  )
}

export default GetProps
