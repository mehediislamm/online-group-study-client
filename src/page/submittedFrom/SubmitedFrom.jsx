/* eslint-disable no-undef */
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";

const SubmitedFrom = () => {
   const allassignment = useLoaderData();
   
// console.log(allassignment);
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const pdf = form.pdf.value;
        const textarea = form.textarea.value; 
        const email = user?.email;  
        const status= "pending"
        const title = `${allassignment?.title}`;
        const name = `${user?.displayName}`
        const marks = `${allassignment?.marks}`
        const submited = {
            status, pdf, textarea, email, name, title, marks
        }
       
        fetch('https://online-group-study.vercel.app/api/v1/submited-assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submited)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged == true) {
                    swal("Good job!", "Added Producted Successfull", "success");
                }
            })
    }
    return (
        <div className="mb-10 bg-orange-200">
            <form onSubmit={handleSubmit} className="">
                <div className="md:flex mb-8 gap-5 ">

                    <div className=" mt-5 form-control ml-20 w-80 md:ml-64 lg:ml-[500px]" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <label className="label">
                            <span className="label-text">PDG link</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pdf"  placeholder="PDG link" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>

                <div className="mb-6 ">
                    <div className=" form-control ml-20 md:ml-64 lg:64 lg:ml-[500px]" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <label className="label">
                            <span className="label-text">TEXT area</span>
                        </label>
                        <label className="input-group">
                            <textarea placeholder="text area" name="textarea" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
                        </label>
                    </div>
                </div>
                <input type="submit" value="assignment submission"
                 className=" mb-5 text-white bg-slate-700 btn btn-neutral ml-32 md:ml-80 lg:ml-[552px]" data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom" />

            </form>
        </div>
    );
};

export default SubmitedFrom;