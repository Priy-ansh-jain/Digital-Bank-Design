import { clients } from "../constants"
import styles from "../style"
const Clients = () => 
   (
    <section className={`${styles.flexCenter} my-4`}>
     <div className={`${styles.flexCenter} flex-wrap w-full lg:ml-[-100px  `}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w[192px] min-w-[120px] hover:bg-dimWhite hover:rounded-[40px] hover:py-[20px] cursor-pointer`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain justify-between "/>
      </div>
      ))}
     </div>
    </section>
  )

export default Clients
