function Listform(){
      const items=["Tokyo","Nigerians","England","france","portugal"]
      return(
            <div>
                  <h1>List</h1>
                  {items.length===0 && <p>No items found</p>}
                  <ul>
                        {items.map((items,index)=>(
                              <li Key={items} onclick={()=> console.log(items,index)}>
                                    {items}
                              </li>
                        )

                      )}
                  </ul>
            </div>
      )
}
export default Listform