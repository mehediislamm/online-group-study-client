import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../provider/AuthProvider";


const CreateAssignment = () => {
    const { user} = useContext(AuthContext);
    const createassignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const image = form.image.value;
        const level = form.level.value;
        const email = user?.email;
        const createData = {
            title, description, marks, image, level,email
        }

        fetch("http://localhost:5000/api/v1/create-assignments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged == true) {
                    swal("Good job!", "Added Producted Successfull", "success");
                }
            });
    };



    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold mb-8 text-center">Create Assignment</h2>
            <form onSubmit={createassignment} >
                <div className="grid grid-cols-1 ">
                    {/* form title and description */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title"  placeholder="title" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="description" name="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form marks and thumbnail row */}
                    <div className="md:flex gap-5 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Marks</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="marks" name="marks" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control   md:w-1/2">
                            <label className="label">
                                <span className="label-text">thumbnail ImageURL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="image url" className="input w-full input-bordered" />
                            </label>
                        </div>

                    </div>

                    {/* form Type and Price row */}
                    <div className="md:flex gap-5 mb-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Difficulty level</span>
                            </label>
                            {/* <label className="input-group">
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label> */}
                            <select name="level" className="select select-bordered w-full ">

                                <option>easy</option>
                                <option>medium</option>
                                <option> hard</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="date" placeholder="date" className="input w-full input-bordered" />
                            </label>
                        </div>

                    </div>


                    <input type="submit" value="Create Assignment" className=" text-white bg-slate-700 btn btn-block" />
                </div>
            </form>

        </div>

    );
};

export default CreateAssignment;