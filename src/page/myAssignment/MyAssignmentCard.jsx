/* eslint-disable react/prop-types */

const MyAssignmentCard = ({myassignment}) => {
    const { status,title , name , marks } = myassignment;
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
                            <th className="text-xl">total mark</th>
                            <th className="text-xl">mark</th>
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
                            
                        </tr>
                       
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
   
};

export default MyAssignmentCard;