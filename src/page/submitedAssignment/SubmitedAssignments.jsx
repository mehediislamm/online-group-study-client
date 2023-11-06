/* eslint-disable react/prop-types */

const SubmitedAssignments = ({ assignment }) => {
    // console.log(assignment);
    const { status, pdf, textarea, email } = assignment;
    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th className="text-xl">email</th>
                            <th className="text-xl">status</th>
                            <th className="text-xl">pdf</th>
                            <th className="text-xl">textarea</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    
                                    <div>
                                        <div className="font-bold">{email}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h1>{status}</h1>
                            </td>
                            <td>{pdf}</td>
                            <th>
                                <p>{textarea}</p>
                            </th>
                        </tr>
                        {/* row 2 */}
                        
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default SubmitedAssignments;