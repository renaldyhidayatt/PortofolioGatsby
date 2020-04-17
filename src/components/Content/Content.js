import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Content = () => {
    return(
        <section className="content">
            <section className="about" id="about">
                <div className="center">
                    <Typography variant="h2" component="h2">About Me</Typography>
                    <div className="personal_data">
                        <figure><img src="" alt="user image"></img></figure>
                        <ul className="personal_data-list">
                            <li><strong>Name:</strong>Lorem</li>
							<li><strong>Last Name:</strong>Ipsum</li>
							<li><strong>Email:</strong>loremipsum@gmail.com</li>
							<li><strong>Tel:</strong>+000 00 000 0000</li>
							<li><strong>Birthday:</strong>01/01/1990</li>
							<li><strong>Nationality:</strong>German</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="about_description">
				<Typography variant="h2" component="h2">Personal Review</Typography>
                <Typography variant="p" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo diam, cursus ut dictum ac, blandit eget mauris. Nulla velit lectus, accumsan eget enim vel, tempus pulvinar elit. Aenean et elementum tortor. Curabitur sed erat tellus. Donec eu porttitor tortor. Integer eleifend tempus dolor nec sagittis.</Typography>
                <Typography variant="p" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo diam, cursus ut dictum ac, blandit eget mauris. Nulla velit lectus, accumsan eget enim vel, tempus pulvinar elit. Aenean et elementum tortor. Curabitur sed erat tellus. Donec eu porttitor tortor. Integer eleifend tempus dolor nec sagittis.</Typography>
                <Typography variant="p" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo diam, cursus ut dictum ac, blandit eget mauris. Nulla velit lectus, accumsan eget enim vel, tempus pulvinar elit. Aenean et elementum tortor. Curabitur sed erat tellus. Donec eu porttitor tortor. Integer eleifend tempus dolor nec sagittis.</Typography>
				<Button class="hire">Hire Me</Button>
            </section>
            <section className="skills" id="skills">
                <div className="center">
                    <h2>Skills</h2>
                    <ul className="skills_list">
                        <li>
                            <h2>Web Development:</h2>
                            <div className="progress-bar blue stripes">
                                <span style={{width: '90%'}} />
                            </div>
                        </li>
                        <li>
                            <h2>SEO:</h2>
                            <div className="progress-bar blue stripes">
                                <span style={{width: '60%'}} />
                            </div>
                        </li>
                        <li>
                            <h2>Online Marketing:</h2>
                            <div className="progress-bar blue stripes">
                                <span style={{width: '85%'}} />
                            </div>
                        </li>
                        <li>
                            <h2>Database Administration:</h2>
                            <div className="progress-bar blue stripes">
                                <span style={{width: '100%'}} />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}