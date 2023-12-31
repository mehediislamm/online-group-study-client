import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateAssignment = () => {
    const singleAssignment = useLoaderData();
    // console.log(singleAssignment);
    const updateAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const image = form.image.value;
        const level = form.level.value;
        const date = form.date.value;
        const updateData = {
            title, description, marks, image, level, date
        }
        fetch(`https://online-group-study.vercel.app/api/v1/update-assignment/${singleAssignment._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.modifiedCount>0){
                    swal("Good job!", "Update Assignment Successfull", "success");
                }
            });


    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold mb-8 text-center">Update Assignment</h2>
            <form onSubmit={updateAssignment} >
                <div className="grid grid-cols-1 ">
                    {/* form title and description */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="title" defaultValue={singleAssignment?.title} className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="description" defaultValue={singleAssignment?.description} name="description" className="input input-bordered w-full" />
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
                                <input type="text" placeholder="marks" defaultValue={singleAssignment?.marks} name="marks" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control   md:w-1/2">
                            <label className="label">
                                <span className="label-text">thumbnail ImageURL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={singleAssignment?.image} placeholder="image url" className="input w-full input-bordered" />
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
                            <select name="level" defaultValue={singleAssignment?.level} className="select select-bordered w-full ">

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
                                <input type="date" name="date" defaultValue={singleAssignment?.date} placeholder="date" className="input w-full input-bordered" />
                            </label>
                        </div>

                    </div>


                    <input type="submit" value="Create Assignment" className=" text-white bg-slate-700 btn btn-block" />
                </div>
            </form>

        </div>
    );
};

export default UpdateAssignment;