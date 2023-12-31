
const Qustion = () => {
    return (
        <div className="lg:h-full bg-green-300" data-aos="fade-up"
        data-aos-duration="3000" >
            <div className="bg-green-300 collapse h-32 collapse-arrow 
            " >
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                What are the benefits of participating in online group study sessions?
                </div>
                <div className="collapse-content">
                    <p className="text-white">Benefits of online group study include shared knowledge, motivation, diverse perspectives, and improved understanding through discussion.</p>
                </div>
            </div>
            
            <div className="bg-green-300 collapse h-32 collapse-arrow 
            ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can you effectively organize and schedule online group study sessions?
                </div>
                <div className="collapse-content">
                    <p className="text-white">Effective organization involves setting clear objectives, scheduling regular meetings, and assigning roles or tasks to group members.</p>
                </div>
            </div>
            
            <div className=" bg-green-300 h-32 collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What are some common challenges faced during online group study, and how can they be overcome?
                </div>
                <div className="collapse-content">
                    <p className="text-white">Common challenges in online group study include time zone differences, technical issues, and maintaining focus. These can be overcome through effective communication and time management.</p>
                </div>
            </div>
        </div>
    );
};

export default Qustion;