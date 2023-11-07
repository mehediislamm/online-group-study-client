/* eslint-disable react/prop-types */

const SubmitedAssignments = ({ assignment,handelComplite }) => {
    // console.log(assignment);

    
    const { _id, status,title , name , marks } = assignment;
    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th className="text-xl">Name</th>
                            <th className="text-xl">title</th>
                            <th className="text-xl">status</th>
                            <th className="text-xl">marks</th>
                            <th className="text-xl">button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                           
                            <td>
                                <div className="flex items-center space-x-3">
                                   
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                               {title}
                            </td>
                            <td>{status}</td>
                            <td>{marks}</td>
                            <th>
                                <button onClick={()=>handelComplite(_id)} className="btn btn-primary btn-sm">give marks</button>
                            </th>
                        </tr>
                       
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default SubmitedAssignments;