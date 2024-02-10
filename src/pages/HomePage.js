import "../stylesheets/homePage.css"
const HomePage = () => {
  return (
    // <div className="home-div">
    //   <div className="right">
    //     <div className="text-div">
    //       <h1>OLT</h1>
    //       <button className="details-btn"> Details</button>
    //     </div>
    //     <div className="image">
    //     </div>
    //     <h3 style={{position:'fixed', top:'0'}}>Optical Line Termination</h3>
    //   </div>
    //   <div className="left">
    //     <div className="text-div">
    //       <h1>Internet</h1>
    //       <button className="details-btn"> Details</button>
    //     </div>
    //     <div className="image"></div>
    //   </div>
    //   <h3 style={{position:'fixed', top:'500px'}}>Optical Line Termination</h3>
    //   <div className="right">
    //     <div className="text-div">
    //       <h1>OTL</h1>
    //       <button className="details-btn"> Details</button>
    //     </div>
    //     <div className="image"></div>
    //   </div>
    //   <div className="left">
    //     <div className="text-div">
    //       <h1>Internet</h1>
    //       <button className="details-btn"> Details</button>
    //     </div>
    //     <div className="image"></div>
    //   </div>
      
    // </div>
    // <section class="one">
    //   <div class="image"></div>
    //   <div class="text">
    //     <h1 class="scroll" data-rate=".4" data-direction="vertical">OLT</h1>
    //     <p ></p>
    //   </div>
    //   <h3 class="scroll" data-rate=".4" data-direction="vertical">Optical Line Termination</h3>
    // </section>
    <div class="main">
      <div class="one">
      <h1><span>Opt</span>ical Line Termination</h1>
      <div class="image"></div>
      <div class="text">
        <h2>OLT</h2>
        <p><br></br><br></br>An optical line termination (OLT), also called an optical line terminal, is a device which serves as the service provider endpoint of a passive optical network.</p>
        <div class="button"><button className="details-btn"> Details</button>
        <button className="details-btn"> Analysis</button></div>
      </div>
    </div>
    <div class="two">
    <h1 class="h1-two">Optical Network Term<span>inal</span></h1>
    <div class="image-two"></div>
    <div class="text">
      <h2 class="h2-two">ONT</h2>
      <p class="p-two"><br></br><br></br>An optical network terminal (ONT) unit is a device that connects fiber optics cables to other wiring <br></br> such as Ethernet and phone lines by converting the signal from optical to electrical and vice versa.</p>
      <div class="button"><button className="details-btn" id="btn-two"> Details</button>
      <button className="details-btn" id="btn-two"> Details</button></div>
    </div>
  </div>
  <div class="one">
      <h1><span></span>WiFi Access Point</h1>
      <div class="image"></div>
      <div class="text">
        <h2>WAP</h2>
        <p><br></br><br></br>A wireless access point (WAP) is a networking device that allows wireless-capable devices to connect to a wired network. <br></br> It is simpler and easier to install WAPs to connect all the computers or devices in your network than to use wires and cables.</p>
        <div class="button"><button className="details-btn"> Details</button>
        <button className="details-btn"> Analysis</button><button className="details-btn"> Add Access Point</button></div>
      </div>
    </div>
    <div class="two">
    <h1 class="h1-two">User WiFi Nodes<span></span></h1>
    <div class="image-two"></div>
    <div class="text">
      <h2 class="h2-two">Users</h2>
      <p class="p-two"><br></br><br></br>Any type of communication device whether its a smartphone, laptop or any Iot device.</p>
      <div class="button"><button className="details-btn" id="btn-two"> Details</button>
      <button className="details-btn" id="btn-two"> Analysis</button><button className="details-btn" id="btn-two"> Add New User</button>
      <button className="details-btn" id="btn-two"> Delete User</button></div>
    </div>
  </div>
    </div>
    
  
  );
}

export default HomePage