import HomePage from "../Home/HomePage";
import { Link } from "react-router-dom";
import "./Card.css";


const Card =() => {
    

  const Card = ({ img }) => <img className="card" src={"https://www.google.com/search?sca_esv=574427856&rlz=1C1CHBF_enIN1019IN1019&sxsrf=AM9HkKkda2k-UBWv1-SnEpPQSbUtW3lbfg:1697631089857&q=Bharat&stick=H4sIAAAAAAAAAEVTPY7UMBjVIM1omQUJ7RZIlByAiR0nTlaiod8zWBNnY69je2OPlTg5BkegpuAazAEoKei4ASUzMP62fH7ve9-vr9bvX-_EDiEhch9N3uGNeRofHw7H1f93Xg62MaxOOOkSdn5wVUbIcbXdmV02NWow9ri6PgOEdWNUAaioZjM_GyOETd4n3CFSSjSZZBRj7VAibaZRHhZ8If0gJ1ckUnIVehYp4KwhSpXxIrZ0GrEDEjtCaZfSNFPnhL6AVgxqrJIycLWwhUKa0Nnh4At1Edei15QkUqFmqJdsgV7L0kcFLJ4wa5BO7GmMk4BJdAeXjUIsqQpt6vZU78szoNgXI9ROmUMdhqRC2vYQVQZGFucD5hr40AXLPU9p80qjdgF2xmQqcYRo2pBQFB76jSP1QeWgL61ipmxggZljVZtBPLe8knyGNdh51DVtwa-hlBk6gL6X7sBOs7m0PVc0tz7trM11SDeVSyKlet7u0o9ljNAUxpVKJkRlEq5EFN5QOGQtydJ1CIalSD8vKpJfq4_Xb37_-Xn7jnz--v3H6sP2bc_vduahfdzfTXIfWHhi0z5weXO7Xd-fn2-2N1fbzf2_f_Lqy3rzSe79Pnxbv_gLKIUxwU4DAAA&sa=X&ved=2ahUKEwiR8sfQyP-BAxWD1jgGHVAzDfAQ8sMGegQIDhAr&biw=638&bih=553&dpr=1.5#"} alt="cover" />;

  const Row = ({ title, arr = [] }) => (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item) => (
          <Card img={item.img} key={item.img} />
          
        ))}
      </div>
    </div>
  );

    <HomePage />

    return(
        <div>
            <section className="home">
          <div className='banner'></div>
          <br />
        <n />
        <>
            <div className="popular_movies"> 
                <div className='text'>
                    <Row title="Movies" arr={[{ img: "https://www.google.com/search?sca_esv=573962864&rlz=1C1CHBF_enIN1019IN1019&sxsrf=AM9HkKlN3nxmQJt-WiXmt9ToHxLVtOcfKQ:1697525745384&q=Antim:+The+Final+Truth&stick=H4sIAAAAAAAAAFWTMY7UMBSGNUizWmZBQrMSSFQjDsDYjuMkK1HQ0G23fTSJJ_Y4sTd2QuzkGHsEagquwRyAkoKOG1Ayg2KPKH9_ee__33vK9fLdyy3bQqhAA6N-QuhKPg6HfXdc_P_uNWMmMSayx8VqK7fAVJQaHCBRIpek8JqDkvZDz72ukgL3cWy8lhgxnUE0N2sjPXbWw5JAiGRUe13YNs7zLJhVZLIOk_S4uDkXwyhtIJ1CNWhH1fJgxbiinRMgdHOwxEMG_Bwttzr2sK9U25lYzLAGdaGH4NtpMDA2zTBjdZNcNjAibAlyYX3j0GQJDTF4WmluEl9c2EqzZhYsNjLpZqFiMKR0FrSRGdV-UNQUUsRndeqIogyOY_CrQJQ3JSNBKxS1qPQWguCuIZfzFFgI4i63jYyTUXVpVk-jQtCnYK0YUg-1aXUKMJ6hLUQrVVigGxLTiyhEjtNRjp4KXI-TcNhTwFSLwmVoTqGLwOnuz880QSYe_JenjJaFPhyCyWhTBhdCjBOX6aShhYx9QOcy7UdRiR2Q_rX4cPPq95-ft2_x09fvPxbvV2_q8m4r9_Swu7N81-f9Y253fcnXt6vl_fl5vVpfr67u__0iL74sX39U_UHebR74fvPpoHbN5sF87vm35bO_fBJfjVkDAAA&sa=X&sqi=2&ved=2ahUKEwjom7OYwPyBAxUO3jgGHd4DAy4Q8sMGegQICBAK&biw=638&bih=553&dpr=1.5#" }]} />
                    <Row title={"Enjoy on your TV"} />
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p> <line></line><br />
                    <Row title={"Download your shows to watch offline"}  />
                    <p>Save your favourites easily and always have something to watch.</p>
                    <Row title={"Watch everywhere"} />
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    <Row title={"Create profiles for kids"} />
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div> 
        </>    
        </section>
        </div>
    );
};

export default Card;