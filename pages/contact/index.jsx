import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const myForm = event.target;
    const formData = new FormData(myForm);
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then(() => setIsModalVisible(true))
      .catch((error) => console.error("Form submission error:", error))
      .finally(() => {
        setIsLoading(false);
        myForm.reset();
      });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(() => {
        closeModal();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isModalVisible]);

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            data-netlify="true"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="b21b14e8-bef4-4db5-8034-0142aa1e012d"
            />
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                required
              />
            </div>
            <div className="flex gap-x-6 w-full">
              <input
                type="number"
                name="contactNumber"
                placeholder="Contact number"
                className="input"
                disabled={isLoading}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                disabled={isLoading}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden="true"
              />
            </button>
          </motion.form>

          {/* Modal */}
          {isModalVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
              <div className="bg-primary p-8 rounded-lg shadow-xl text-center border border-accent">
                <h3 className="text-xl font-bold text-white mb-4">
                  🎉 Thank You!
                </h3>
                <p className="text-white mb-6">
                  Your message has been sent successfully. I will get back to
                  you soon.
                </p>
                <button
                  className="btn bg-accent text-white px-6 py-2 rounded-full hover:bg-accent-dark transition"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
