import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col lg:ml-[150px] relative`}>
    <div className="absolute z-[0] w-[40%] h-[20%] right-[10%] rounded-full blue__gradient" />
    <div className="absolute z-[0] w-[40%] h-[20%] right-[40%] rounded-full blue__gradient" />
    <div className="absolute z-[0] w-[40%] h-[20%] right-[70%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between lg:justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden" />
        saying about us. </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[422px] text-left `}>
          Everything you need to do is accept the card payment and grow your business anywhere on the plannet.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap lg:justify-start justify-center w-full Feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}


    </div>
  </section>
)


export default Testimonials
