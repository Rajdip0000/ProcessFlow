import MacBook from "./Vector 17.png"
import Group from "./Group 44.png"
import step1 from "./step_1.png"
import step2 from "./step_2.png"
import step3 from "./step_3.png"
import step4 from "./step_4.png"
import step5 from "./step_5.png"
import step6 from "./step_6.png"
import step7 from "./step_7.png"
import step8 from "./step_8.png"
import step9 from "./step_9.png"
function ProcessFlow() {


  return (
    <div className="container" id="processflow">
      <h2>TIMELINE</h2>
      <div className="col-lg-10 col-md-11 col-sm-12" id="processflowvector">
        <img src={MacBook} />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-2 slider" data-aos="fade-left" data-aos-delay="300">
        <img src={Group} alt="Group" height="40" className="imgleft" />
        <div className="card" id="card1" >
          <div className="card-body">
            <div className="card-title">

              <img src={step1} alt="Step 1" height="130" />
            </div>
            <div className="card-text">
              <p>Teams should be formed as per perspective guidelines. Eligibility of the members for HACKSPIRE 2024 should follow eligibility guidelines.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-2 slider" data-aos="fade-right" data-aos-delay="300">
        <div className="card" id="card2" >
          <div className="card-body">
            <div className="card-title">

              <img src={step2} alt="Step 2" height="120" />
            </div>
            <div className="card-text">
              <p>A theme and matching problem statement has to be defined from HACKSPIRE Portal at :
                hackspire.fiem.org.in.</p>
            </div>
          </div>
        </div>
        <img src={Group} alt="Group" height="40" className="imgright" />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-2 slider" data-aos="fade-left" data-aos-delay="300">
        <img src={Group} alt="Group" height="40" className="imgleft" />
        <div className="card" id="card3" >
          <div className="card-body">
            <div className="card-title">

              <img src={step3} alt="Step 3" height="130" />
            </div>
            <div className="card-text">
              <p>IDEA template has to be prepared following the given IDEA template PPT in the HACKSPIRE portal.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-2 slider" data-aos="fade-right" data-aos-delay="300">
        <div className="card" id="card4" >
          <div className="card-body">
            <div className="card-title">

              <img src={step4} alt="Step 4" height="110" />
            </div>
            <div className="card-text">
              <p>A PDF has to be created of this PPT.</p>
            </div>
          </div>
        </div>
        <img src={Group} alt="Group" height="40" className="imgright" />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-2 slider" data-aos="fade-left" data-aos-delay="300">
        <img src={Group} alt="Group" height="40" className="imgleft" />
        <div className="card" id="card5">
        <div className="card-body">
            <div className="card-title">

              <img src={step5} alt="Step 5" height="80" />
            </div>
            <div className="card-text">
              <p>A consent letter has to be obtained in the given format from the Head of the institute and it should be scanned to PDF.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-2 slider" data-aos="fade-right" data-aos-delay="300">
        <div className="card" id="card6">
          <div className="card-body">
            <div className="card-title">

              <img src={step6} alt="Step 6" height="120" />
            </div>
            <div className="card-text">
              <p>Registration form has to be filled with all of the above mentioned details at Devfolio.</p>
            </div>
          </div>
        </div>
        <img src={Group} alt="Group" height="40" className="imgright" />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-2 slider" data-aos="fade-left" data-aos-delay="300">
        <img src={Group} alt="Group" height="40" className="imgleft" />
        <div className="card" id="card7">
        <div className="card-body">
            <div className="card-title">

              <img src={step7} alt="Step 7" height="110" />
            </div>
            <div className="card-text">
              <p>Idea selection and intimation to Mentors of selected teams for Grand Finale Registration.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-2 slider" data-aos="fade-right" data-aos-delay="300">
        <div className="card" id="card8">
          <div className="card-body">
            <div className="card-title">

              <img src={step8} alt="Step 8" height="120" />
            </div>
            <div className="card-text">
              <p>Grand Finale Round at FIEM, Evaluation of Development in Phases.</p>
            </div>
          </div>
        </div>
        <img src={Group} alt="Group" height="40" className="imgright" />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-2 slider" data-aos="fade-left" data-aos-delay="300">
        <img src={Group} alt="Group" height="40" className="imgleft" />
        <div className="card" id="card9">
        <div className="card-body">
            <div className="card-title">

              <img src={step9} alt="Step 9" height="110" />
            </div>
            <div className="card-text">
              <p>Final compilation of Results and Announcement of Winners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProcessFlow