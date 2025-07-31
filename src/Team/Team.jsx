import React from "react";
import Card from "./card";
import './team.css'

function Team(){
    return(<div className="maindivteam">
        <div style={{textAlign:'center',padding:'5px 40px'}}>
            <h1><span style={{color:'red'}}><b>TEDx</b></span>HITAM TEAM 2025</h1>
            <p style={{textAlign:'center',color:'white'}}>A passionate collective of changemakers, innovators, and visionaries working together to spark conversations, inspire action, and bring powerful ideas to life at HITAM. Fueled by curiosity and driven by purpose, the TEDxHITAM Team 2025 is dedicated to creating an unforgettable platform that celebrates creativity, diversity, and the spirit of "ideas worth spreading.</p>
            <button className="tabs">TEAM 2023</button>
            <button className="tabs">TEAM 2024</button>
            <button className="tabs">TEAM 2025</button>
        </div>

        <div style={{padding:'5px 40px'}}>
            <h1 className="HeadS">Core Team</h1>
            <div style={{display:'flex',flexDirection:'row',width:'100%',flexWrap:'wrap',gap:'15px'}}>
                <Card Name='Ishita Roy' Des='Chair' img='core/1.jpg' url='https://www.linkedin.com/in/ishitadroy'/>
                <Card Name='Pravallika Sayyaparaju' Des='core/Co-Chair' img='core/2.jpg' url='https://www.linkedin.com/in/pravallika-sayyapparaju'/>
                <Card Name='Rahil Hussain' Des='Curator' img='core/3.jpg' url='https://www.linkedin.com/in/rahilhussain-04'/>
                <Card Name='Akshitha Thakur' Des='Mentor' img='core/4.jpeg' url='https://www.linkedin.com/in/akshitha-thakur-818788232/'/>
                <Card Name='Heramba Sai Ganesh' Des='Organizer' img='core/5.png' url='https://www.linkedin.com/in/herambasgp/'/>
            </div>
           
        </div>
        <div style={{padding:'5px 40px'}}>
            <h1 className="HeadS">Executive Committee</h1>
            <div style={{display:'flex',flexDirection:'row',width:'100%',flexWrap:'wrap',gap:'15px'}}>
                <Card Name='Alwala Satvika Reddy' Des='Curator' img='EX/1.jpg' url='https://www.linkedin.com/in/alwala-satvika-reddy-8a3287256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'/>
                <Card Name='G . Sree Varsha ' Des='Event Manager' img='2.jpg' url='https://www.linkedin.com/in/varsha-g-575b55247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'/>
                <Card Name='Zahrah' Des='Public Relations Head' img='EX/3.jpg' url='https://www.linkedin.com/in/zahrah-aamaal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'/>
                <Card Name='Baavith Reddy Anugu ' Des='Sponsorship & Budget Manager' img='EX/4.jpg' url='https://www.linkedin.com/in/baavith-reddy-anugu-062655317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'/>
                <Card Name='SK. Thouhid Ali' Des='Logistics Head' img='EX/5.jpg' url='https://www.linkedin.com/in/thouhid-ali-7ab06b286'/>
                <Card Name='Kavitha Singh' Des='Executive Producer' img='EX/6.jpg' url='https://www.linkedin.com/in/kavitha-singh-65235b261/'/>
                <Card Name='N Balaji' Des='Website Manager' img='EX/7.jpg' url='https://www.linkedin.com/in/balaji-n152004'/>
                <Card Name='Sai Vyshnavi Kammampati ' Des='Registrations Head' img='EX/8.jpg' url='https://www.linkedin.com/in/sai-vyshnavi-kammampati-3a8ba62aa'/>
                <Card Name='Adari Vishnu ' Des='Designer & Video and Production Lead' img='EX/9.jpg' url='https://www.linkedin.com/in/adari-vishnu-091131291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'/>
            </div>
           
        </div>

        {/* <div style={{padding:'5px 40px'}}>
            <h1 className="HeadS">Supporting Managers</h1>
            <div style={{display:'flex',flexDirection:'row',width:'100%',flexWrap:'wrap',gap:'15px'}}>
                <Card Name='B. Sai Abhineeth'  img='vol/1.jpg' url='https://www.linkedin.com/in/abhineeth-sai'/>
                <Card Name='M. Bhavyanjali '  img='vol/2.jpg' url='https://www.linkedin.com/in/bhavyanjali-m'/>
                <Card Name='Tulugu Mavya Sri' img='vol/3.jpg' url='https://linkedin.com/in/tulugu-mavyasri-395529346'/>
                <Card Name='Thanniru Rajeswari' img='vol/4.jpg' url='https://www.linkedin.com/in/rajeswari-thanniru-2881a62bb'/>
                <Card Name='Palak Guleria'  img='vol/5.jpg' url='https://www.linkedin.com/in/palak-guleria-8748b8252'/>
                <Card Name='B.Alankrusha'  img='vol/6.jpg' url='https://www.linkedin.com/in/alankrusha-bathini-b99544326'/>
                <Card Name='Tejal Sharma'  img='vol/7.png' url='https://www.linkedin.com/in/tejal-sharma-43172428b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'/>
                <Card Name='Pallavi Bisadi'  img='vol/8.jpg' url='https://www.linkedin.com/in/pallavi-bisadi-05450934b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'/>
            </div>
           
        </div> */}
    
    </div>)
}

export default Team;