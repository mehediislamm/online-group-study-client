/* eslint-disable react/prop-types */

const SubmitedAssignments = ({ assignment,handelComplite }) => {
    // console.log(assignment);

    
    const { _id, status,title , name , marks } = assignment;
    return (
        <div className="bg-green-400
        ">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th className="text-xl text-yellow-500 font-mono">Name</th>
                            <th className="text-xl text-yellow-500 font-mono">title</th>
                            <th className="text-xl text-yellow-500 font-mono">status</th>
                            <th className="text-xl text-yellow-500 font-mono">marks</th>
                            <th className="text-xl text-yellow-500 font-mono">button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                           
                            <td>
                                <div className="flex items-center space-x-3">
                                   
                                    <div>
                                        <div className="font-bold text-blace font-mono ">{name}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td className="font-bold  font-mono ">
                               {title}
                            </td>
                            <td className="font-bold  font-mono ">{status}</td>
                            <td className="font-bold  font-mono ">{marks}</td>
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