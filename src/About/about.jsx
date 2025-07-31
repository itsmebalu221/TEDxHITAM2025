import react from 'react';
import './about.css'

function About(){
    return(<div>
    <h1 className='HeadU' align='center' style={{margin:'20px'}}>About</h1>
           
    <div className="AboutTEDx1">
        <div className='TED1'>
            <iframe 
        src="https://www.youtube.com/embed/d0NHOpeczUU?si=ZVSOg4KhGyfnHFI9" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
</iframe>
            <div className='cont1'>
                <h1 className='HeadS'>TED</h1>
                <p>TED (Technology, Entertainment, and Design) began with topics like e-books and fractals but has evolved into a global platform for creativity and innovation. It now features a diverse range of voices, including business leaders, scientists, and philosophers. TED’s initiatives, such as TED-Ed for education, TEDGlobal conferences, and the TED Prize for impactful change, continue to inspire inclusivity, progress, and transformative ideas worldwide.</p>
            </div>
        </div>

        <div className='TED1'>
            
            <div className='cont1'>
                <h1 className='HeadS'>TEDx</h1>
                <p>
            TEDx promotes "ideas worth spreading" through independently organized events worldwide. Driven by passionate individuals, these events bring fresh ideas and stories to inspire and spark meaningful conversations. 
            Guided by TED’s principles, TEDx events follow specific guidelines and host over 3,000 events annually, making a global impact at the grassroots level.</p>

            </div>
            <iframe 
        src="https://www.youtube.com/embed/d0NHOpeczUU?si=ZVSOg4KhGyfnHFI9" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
</iframe>
        </div>

        <div className="about1">
        <h1 className="HeadS">What is TEDxHITAM</h1>
        <p>At TEDxHITAM, we believe an idea is the most powerful catalyst for change. Our stage is a launchpad for thoughts that challenge the status quo, inspire new perspectives, and provoke action. Since our journey began in 2023, we've been committed to amplifying these powerful voices.
<br></br><br></br>
Now entering our third edition, we continue to be a platform where creativity, technology, and humanity converge to shape a better future.</p>
<button
  onClick={() => {
    alert("🚨 Registrations will begin from tomorrow. Stay tuned!");
  }}
  className="reminder-btn exp"
>
  Explore more
</button>

      </div>
    </div>
    
    </div>)
}

export default About;