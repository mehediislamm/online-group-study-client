/* eslint-disable react/prop-types */

const MyAssignmentCard = ({myassignment}) => {
    const { status,title , name , marks,pdf } = myassignment;
    return (
        <div className="bg-green-400">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th className="text-xl text-yellow-500 font-mono">Name</th>
                            <th className="text-xl text-yellow-500 font-mono">title</th>
                            <th className="text-xl text-yellow-500 font-mono">status</th>
                            <th className="text-xl text-yellow-500 font-mono">mark</th>
                            <th className="text-xl text-yellow-500 font-mono">PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                           
                            <td>
                                <div className="flex items-center space-x-3">
                                   
                                    <div>
                                        <div className="font-bold text-blace font-mono text-red-500">{name}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td className="font-bold  font-mono text-red-500">
                               {title}
                            </td>
                            <td className="font-bold  font-mono text-red-500">{status}</td>
                            <td className="font-bold  font-mono text-red-500 ">{marks}</td>
                            <td className="font-bold  font-mono text-red-500"><a href="">{pdf}</a></td>
                            
                        </tr>
                       
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
   
};

export default MyAssignmentCard;