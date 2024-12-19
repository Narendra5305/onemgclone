import consultBanner1 from "@/assets/consultBanner1.png";
import "./consult.css";



function ConsultPageComponent() {
    return (
      <div className="consultPage">
        <img src={consultBanner1} alt="consultBanner" />
        <div className="consultation">
          <div className="consult-info">
            <h1>Online doctor consultation with qualified doctors</h1>
            <p>Starting at ₹199</p>
            <div>
              <div>
                <img
                  src="https://onemg.gumlet.io/marketing/e7391473-ce45-403b-ae9e-04f25674874c.svg"
                  alt="svg1"
                />
                <span>Talk within 30 min</span>
              </div>
              <div>
                <img
                  src="https://onemg.gumlet.io/marketing/7df1fb1e-dc1e-4d1d-9031-bb05955710fa.svg"
                  alt="svg2"
                />
                <span>Free follow up for 3 days</span>
              </div>
              <div>
                <img
                  src="https://onemg.gumlet.io/marketing/a420ec3a-01da-40f8-95f2-db07e89c1421.svg"
                  alt="svg3"
                />
                <span>Free follow up for 3 days</span>
              </div>
            </div>
            <button>Consult now</button>
          </div>
          <div>
            <img src="https://onemg.gumlet.io/marketing/793368e4-7232-45b3-9690-2fc81da12287.svg" alt="consultSvg" />
          </div>
        </div>
        <div className="consultCounter">
          <div>
            <div>
              <h1>30L+</h1>
              <h3>Total Consultations</h3>
            </div>
            <div>
              <h1>3k+</h1>
              <h3>Daily Consultations</h3>
            </div>
            <div>
              <h1>22+</h1>
              <h3>Specialities</h3>
            </div>
          </div>
        </div>
  
        <div className="feedback">
          <p>Our Happy Customers</p>
          <p>
            I installed the app and went for a free consultation with a dietician.
            The advice given by Dr. Mirza was simply great. He shared a detailed
            diet chart and exercises with me which was easy to incorporate into my
            hectic schedule.
          </p>
        </div>
  
        <div className="achivements">
          <div>
            <img src="https://www.1mg.com/images/confidential.svg" alt="banner" />
            <h3>100% Confidential</h3>
            <p>
              All advice & consultations are completely confidential. You can also
              delete chats whenever you want.
            </p>
          </div>
          <div>
            <img src="https://www.1mg.com/images/certified.svg" alt="banner" />
            <h3>Certified Doctors</h3>
            <p>
              We offer quality healthcbannerare through our network of certified
              and experienced doctors.
            </p>
          </div>
          <div>
            <img src="https://www.1mg.com/images/convenience.svg" alt="banner" />
            <h3>Convenience</h3>
            <p>
              Forget the hassle of long queues and rush hour. Seek expert opinion
              anytime, anywhere.
            </p>
          </div>
          <div>
            <img
              src="https://www.1mg.com/images/costEffective.svg"
              alt="banner"
            />
            <h3>Cost Effective</h3>
            <p>
              We provide medical assistance on non urgent queries for free. Fee
              starting at ₹50 for faster response to queries.
            </p>
          </div>
        </div>
        <div className="frequent">
          <h2>Frequently Asked Questions</h2>
          <div>
  
          <div>
            <p>When will I get an answer to my query? What happens if I don’t get a response?</p>
            <p>If you opt for a free consult, then we make sure the doctor replies within 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account.</p>
          </div>

          <div>
            <p>Who are the consulting doctors?</p>
            <p>All the doctors are registered medical practitioners. Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed with Tata 1mg and is given access to answer patient queries.</p>
          </div>

          <div>
            <p>Will the doctor be able to resolve my issue?</p>
            <p>Our doctors will give you expert advice on your problem and help you identify next steps which may include further tests, medicine recommendation or lifestyle tips. Few cases require face-to-face examination and we do ask patients to share pictures or reports if they can, for a conclusive diagnosis.</p>
          </div>

          <div>
            <p>Is my consultation private with my doctor?</p>
            <p>Privacy of data is one of the fundamental human rights and we at Tata 1mg understand that. All your medical history and online consultation with us are completely private and confidential. We are compliant with industry standards to ensure your consultations are securely stored.</p>
          </div>


          <div>
            <p>For how long is the consultation valid?</p>
            <p>In the case of a paid consult, you can follow-up with your doctor for up to 3 days. In case you opt for a free consult, follow-up questions are valid for one day only.</p>
          </div>


          <div>
            <p>Do you have a refund policy?</p>
            <p>We have a “take-it-easy” policy. If for any reason you’re not convinced with your online consultation, you can write to us at contact@1mgdoctors.com and we will review the consult with the doctor - seeking clarifications on your queries that were answered. 100% refund will be given in genuine cases.</p>
          </div>


          
          </div>
        </div>
  
        <div className="help">
          <div>
            <img src="https://www.1mg.com/images/oc_doctor.svg" alt="doctorSvg" />
          </div>
          <div>
            <h2>Are you a doctor?</h2>
            <p>Be a part of our panel of specialists and connect with your patients from anywhere.</p>
            <button>Join us</button>
          </div>
        </div>
      </div>
    );
  }


export default ConsultPageComponent;
  