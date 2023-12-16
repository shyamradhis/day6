
export default function Listt()
{
    const college=[{id :1,stuname:"shyam",age:18},
                      {id:2,stuname:"santhosh",age:18}]

     const display=college.map((col)=><li key={col.id}>{col.stuname} {col.age}</li>)
     
     return(
        <div>
            <h1>List the Students</h1>
            {display}
            
        </div>
     )
     
}